---
id: javascript
title: Javascript
---

The Javascript Client comes bundled with Puth. If you have installed Puth, then you already have the Javascript Client.

## Usage

In this example, we will use nodejs to run the example code.

So lets require the Puth Client, make our first context and open this website.

```js
const PuthClient = require('puth/lib/clients/js');

// Setup the Puth Client
const puth = new PuthClient('http://127.0.0.1:4000');

// Create a new Context
let context = await puth.contextCreate();

// Creating a Browser instance
let browser = await context.createBrowser({
  headless: false, // With headless = false, you will see the Browser window
});

// Use the Browsers default Page
let page = (await browser.pages())[0];

// Lets open this website in the Browser
await page.goto('https://puth.io/docs/clients/javascript');

// Thats it! :)
```

### What is a Context

A Context is your main Object on the Server. You always interact with the Context. There are only two functions
to get started: `createBrowser` and `connectBrowser`. With `createBrowser` you will create a Browser on you Puth Server.
With `connectServer` you let your Context connect to an external Browser instance. `connectBrowser` internally calls
`puppeteer.connect()` while `createBrowser` internally calls `puppeteer.launch()`.

When you have created/connected to a Browser, you have all of puppeteer's functions and of all of your Plugins functionality available.

For example, if you have started your own Browser in Daemon mode, you can connect with the Devtools Websocket URI.

```js
let browser = await context.connectBrowser({
  browserWSEndpoint: 'ws://127.0.0.1:41931/devtools/browser/539ada...dfc0',
});
```