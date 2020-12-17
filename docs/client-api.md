---
id: client-api
title: Puth Client Api
---

### Puth Client

Puth comes bundled with two clients: `PuthLocalClient` and `PuthRemoteClient`. Both come with the same interface.

#### `contextCreate(options? = {}, debug? = false)`

Creates a Context. You can pass additional options.

#### `contextCall(rpcPacket)`

Invokes the Contexts `call` function. This is used to call functions on objects.

#### `contextGet(rpcPacket)`

Invokes the Contexts `get` function. This is used to get a property of an object.

#### `contextSet(rpcPacket)`

Invokes the Contexts `set` function. This is used to set a property of an object to a specific value.

#### `contextDelete(rpcPacket)`

Invokes the Contexts `delete` function. This is used to delete a property of an object.

### Context

#### `connectBrowser(options? = {})`

Connects to an already running Browser.

#### `createBrowser(options? = {})`

Creates a Browser with the given options in addition to Puth`s default options.

#### `destroy()`

Destroys the Context.

## Puppeteer

Puppeteer has its own documentation on [https://pptr.dev](https://pptr.dev). Here are only some of the most useful 
functions of some classes listed. Keep in mind that you can't use the event functions if you use a remote client.

### Browser

#### `pages()`

Returns all pages.

#### `newPage()`

Creates a new Page and returns it.

#### `userAgent()`

Returns the user agent. Something like: `HeadlessChrome/61.0.3153.0`

#### `wsEndpoint()`

Returns the ws endpoint URI.

#### more

You can find all browser functions on [Puppeteers Browser Documentation](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-class-browser)

### Page

#### `$(selector)`

Runs document.querySelector within the page. If no element matches the selector, the return value resolves to null.

#### `$$(selector)`

Runs document.querySelectorAll within the page. If no elements match the selector, the return value resolves to [].

#### `close()`

Closes the page.

#### `content()`

Returns the full HTML contents of the page, including the doctype.

#### `frames()`

Returns an array of all frames attached to the page.

#### `goto(url, options? = {})`

Navigates to the given url. The url should include the scheme (`https://`,...).

#### `title()`

Returns the page title.

#### `url()`

Returns the current page url.

#### more

You can find all page functions on [Puppeteers Page Documentation](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-class-page)

### ElementHandle

#### `$(selector)`

Runs element.querySelector within the page. If no element matches the selector, the return value resolves to null.


#### `$$(selector)`

Runs element.querySelectorAll within the page. If no elements match the selector, the return value resolves to [].

#### `click(options?)`

Clicks on the element.

#### `getProperty(name)`

Returns the property with given name.

#### `type(text, options?)`

Focuses the element, and then sends a keydown, keypress/input, and keyup event for each character in the text.

#### more

You can find all element functions on [Puppeteers ElementHandle Documentation](https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-class-elementhandle)

### More classes

Puppeteer is much bigger than this small overview. You can read all the available functions on [Puppeteers Documentation](https://pptr.dev/#?product=Puppeteer&version=v5.5.0)