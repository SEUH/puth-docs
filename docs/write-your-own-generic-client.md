---
id: write-your-own-client
title: Write your own client
sidebar_label: Write your own client
---

Here you will learn how to create a client for Puth. Puth is on the one hand a http server over which you work via remote prcedure calls on the remote objects.

## [Puths Api](api)

We use the following 5 api endpoints to write our own client.

- [Create Context](api#create-context): `POST /context`
- [Delete Context](api#delete-context): `DELETE /context`
- [Call on Context](api#call-on-context): `PATCH /context/call`
- [Get on Context](api#get-on-context): `PATCH /context/get`
- [Set on Context](api#set-on-context): `PATCH /context/set`

## Principles of remote object interactions

The Api always returns one of the following types: `GenericObject`, `GenericValue` or `Error`.

A `GenericObject` response **does not** contain the actual object, it contains an `Representation` (Object with `id`, `type` and `represents`).

A `GenericValue` response contains the actual `value`. You only get a GenericValue response if the returning value, of f.e. a function call, is serializable.

**Conclusion**

The client never gets the actual objects on which you interact. It only knows the `Representation` of objects, it is somewhat like a Handle/Pointer/Symbol.

## Lets start

Our goal is to connect to Puth, then create our first context, browser and page. Then we want to open a website. I will represent the actual http requests for this. You can use any language, i will just show some example prototype code in javascript for easier understanding.

```js
// This is a prototype code representation of our goal
puth = Puth('http://127.0.0.1:4000'); // Puth will be the final client
context = puth.contextCreate();
browser = context.createBrowser();
page = browser.newPage();

page.goto('https://docs.puth.io/');
```

### Creating a new Context

To create a new context we need to make a POST request to `/context`.

```js
contextRepresentation = request('POST', '/context');
```

### Creating a new Browser
Now we have the `Representation` of the Context. Next we want to instantiate a new Browser.

To create a new Browser we need to call the `createBrowser` function on the context. So we need to make a PATCH request to `/context/call`.

```js
contextRepresentation = request('POST', '/context');

browserRepresentation = request('PATCH', '/context/call', {
  context: contextRepresentation,
  function: 'createBrowser',
});
```

### Creating a new Page
Now we have the `Representation` of the Browser. Next we want to instantiate a new Page.

To create a new Page we need to call the `newPage` function on the Browser object within the context. Again we need to make a PATCH request to `/context/call` but now containing the object with which we want to interact.

```js
contextRepresentation = request('POST', '/context');

browserRepresentation = request('PATCH', '/context/call', {
  context: contextRepresentation,
  function: 'createBrowser',
});

pageRepresentation = request('PATCH', '/context/call', {
  context: contextRepresentation,
  id: browserRepresentation.id,
  type: browserRepresentation.type,
  function: 'createPage',
});
```

### Opening a website on the page
Now we have the `Representation` of the Page. Next we want to go to a website.

To go to a website on the page, we need to call the `goto` function on the Page object within the context. Again we need to make a PATCH request to `/context/call` but now containing the object with which we want to interact.

```js
/* .... */

pageRepresentation = request('PATCH', '/context/call', {
  context: contextRepresentation,
  id: browserRepresentation.id,
  type: browserRepresentation.type,
  function: 'createPage',
});

request('PATCH', '/context/call', {
  context: contextRepresentation,
  id: pageRepresentation.id,
  type: pageRepresentation.type,
  function: 'goto',
  parameters: [
    'https://docs.puth.io/'
  ]
});
```

## Working example

The following code illustrates what we have learned in this tutorial. Now you know how to interact with Puth. If you want to have a look on the official js client, you can go to LINK

```js title="Dependencies: axios. Written for nodejs."
const axios = require('axios');

(async () => {
  
  // Create axios instance
  let instance = axios.create({
    baseURL: 'http://127.0.0.1:4000',
  });
  
  // Create context
  let contextRepr = await instance.post('/context', {})
    .then(r => r.data)
    .catch(console.error);
  
  // Call createBrowser on Context
  let browserRepr = await instance.patch('/context/call', {
      context: contextRepr,
      id: contextRepr.id,
      type: contextRepr.type,
      function: 'createBrowser',
    })
    .then(r => r.data)
    .catch(console.error);
  
  // Call createPage on Browser
  let pageRepr = await instance.patch('/context/call', {
      context: contextRepr,
      id: browserRepr.id,
      type: browserRepr.type,
      function: 'newPage',
    })
    .then(r => r.data)
    .catch(console.error);
  
  // Call goto on Page
  await instance.patch('/context/call', {
      context: contextRepr,
      id: pageRepr.id,
      type: pageRepr.type,
      function: 'goto',
      parameters: [
        'https://google.com/',
      ],
    })
    .then(r => r.data)
    .catch(console.error);
  
  // Cal url function on page
  let pageUrl = await instance.patch('/context/call', {
      context: contextRepr,
      id: pageRepr.id,
      type: pageRepr.type,
      function: 'url',
    })
    .then(r => r.data)
    .catch(console.error);
  
  console.log('page url is', pageUrl.value);
  
  // Cleanup: delete the context
  await instance.delete('/context', {
    data: {
      id: contextRepr.id,
    },
  });

})();
```