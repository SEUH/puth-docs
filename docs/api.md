---
id: api
title: Puth Api
---

Puth is on the one hand a http server over which you work via remote prcedure calls on the remote objects.

### Create Context

With a POST request on /context you can create a context.

- Url: `/context`
- Method: `POST`

**Post data structure**

```json
{
  "test": "[string]", // optional
  "group": "[string]", // optional
  "snapshot": "[boolean]", // optional (default=false)
  "debug": "[boolean]" // optional (default=false)
}
```

#### Success response (Code: 200 OK)

```json
{
    "id": "c0117100-5c8b-461a-b4e3-647ef7a7ed61",
    "type": "Context"
}
```

### Delete Context

With a DELETE request on /context you can delete a context.

- Url: `/context`
- Method: `DELETE`

**Post data structure**

```json
{
  "id": "[string]",
  "type": "[string]" // optional
}
```

Example post data

```json
{
  "id": "c0117100-5c8b-461a-b4e3-647ef7a7ed61",
  "type": "Context"
}
```

#### Success response (Code: 200 OK)

### Call on Context

With a PATCH request on /context/call you can call a function on a remote object.

- Url: `/context/call`
- Method: `PATCH`

**Post data structure**

If you don't provide an `id` and a `type`, Puth will call the function on the context object.

```json
{
  "context": "[context]",
  "id": "[string]", // optional, the id of the object to call the function on
  "type": "[string]", // optional, the type of the object. usually this is 'GenericObject'
  "function": "[string]", // the name of the function you want to call
  "parameters": "[array]" // optional, the parameters for the function
}
```

Example post data

```json
{
  "context": {
    "id": "c0117100-5c8b-461a-b4e3-647ef7a7ed61",
    "type": "Context"
  },
  "function": "createBrowser",
  "parameters": [
    {"headless": true} // this is parameter[0] that gets passed to the function
  ]
}
```

#### Success response (Code: 200 OK)

In this example, the `createBrowser` function instantiates a new browser object on the context and therefore responds with a GenericObject representation.

```json
{
  "type": "GenericObject",
  "id": "c0117100-5c8b-461a-b4e3-647ef7a7ed61",
  "represents": "Browser"
}
```

You can now use the `id` and `type` from the response to call functions on the new `Browser` object.
For example: calling `newPage` function on the browser object:

```json
{
  "context": {
    "id": "c0117100-5c8b-461a-b4e3-647ef7a7ed61",
    "type": "Context"
  },
  "id": "c0117100-5c8b-461a-b4e3-647ef7a7ed61",
  "type": "GenericObject",
  "function": "newPage",
}
```

- `PATCH /context/get` `With a PATCH request on /context/get you can get a property from a remote object.`
- `PATCH /context/set` `With a PATCH request on /context/set you can set a property of a remote object.`