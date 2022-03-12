# Browser

## pages()

- returns: `Array[Page]`

Returns an array of all pages inside the Browser.

## newPage()

- returns: `Page`

Returns a new page inside the browser.

## userAgent()

- returns: `string`

Returns the browser's original user agent.

!!! warning ""
    Note: Pages can override browser user agent with page.setUserAgent()

## version()

- returns: `string`

Returns the browser's version. For headless Chromium, this is similar to `HeadlessChrome/61.0.3153.0`.
For non-headless, this is similar to `Chrome/61.0.3153.0`.

!!! warning ""
    Note: Pages can override browser user agent with page.setUserAgent()

## More

You can find the complete documentation for Browser on [pptr.dev](https://pptr.dev/#?show=api-class-browser){target=_blank}