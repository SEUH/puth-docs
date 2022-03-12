# Page

## $(selector)

- selector: `string` A selector to query the page for
- returns: `ElementHandle`

Returns the first element that matches the `selector`. If no element was found, the client will throw an exception.

!!! important
    The `$` character is reserved in `PHP`, therefore the php client renames this function to `get`.

=== "Js"
    ```js
    let image = page.$('#image');
    ```
=== "PHPUnit"
    ```php
    $image = $page->get('#image');
    ```

## $$(selector)

- selector: `string` A selector to query the page for
- returns: `Array[ElementHandle]`

Returns an array of ElementHandle's that match the `selector`. If no element was found, an empty array is returned.

!!! important
    The `$$` character is reserved in `PHP`, therefore the php client renames this function to `getAll`.

=== "Js"
    ``` js
    let images = page.$$('.images');
    ```
=== "PHPUnit"
    ``` php
    $images = $page->getAll('.images');
    ```

## browser()

- returns: `Browser`

Returns the Browser the page belongs to.

## close(options)

- options: `Object`
    - runBeforeUnload: `boolean` (default to `false`) Whether to run the before unload page handlers.

By default, `page.close()` does not run beforeunload handlers.

!!! warning
    If `runBeforeUnload` is passed as `true`, a beforeunload dialog might be summoned and should be handled manually via page's 'dialog' event.

## content()

- returns: `string`

Returns the full HTML contents of the Page, including the doctype.

## cookies([...urls])

- url (optional): `Array[string]` 
- returns: `Array[Object]`
    - name: `string`
    - value: `string`
    - domain: `string`
    - path: `string`
    - expires: `number` Unix time in seconds
    - size: `number`
    - httpOnly: `boolean`
    - secure: `boolean`
    - session: `boolean`
    - sameSite: `'Strict'|'Lax'|'Extended'|'None'`

If no URLs are specified, this method returns cookies for the current page URL. If URLs are specified, only cookies for those URLs are returned.

## deleteCookie(...cookies)

- ...cookies: `Object`
    - name: `string` *required*
    - url: `string`
    - domain: `string`
    - path: `string`

Deletes all cookies that match the criteria.

## focus(selector)

- selector: `string` A selector of an element to focus. If there are multiple elements satisfying the selector, the first will be focused.

This method fetches an element with selector and focuses it. If there's no element matching selector, the method throws an error.

## goto (url[, options])

- url: `string` URL to navigate page to. The URL should include scheme, e.g. `https://`.
- options: `Object`
    - timeout: `number` Maximum navigation time in milliseconds, defaults to 30 seconds, pass `0` to disable timeout. The default value can be changed by using the `page.setDefaultNavigationTimeout(timeout)` or `page.setDefaultTimeout(timeout)` methods.
    - waitUntil: 'load'|'domcontentloaded'|'networkidle0'|'networkidle2' When to consider navigation succeeded, defaults to load. Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:
        - `load`: consider navigation to be finished when the `load` event is fired.
        - `domcontentloaded`: consider navigation to be finished when the `DOMContentLoaded` event is fired.
        - `networkidle0`: consider navigation to be finished when there are no more than 0 network connections for at least `500` ms.
        - `networkidle2`: consider navigation to be finished when there are no more than 2 network connections for at least `500` ms.
    - referer: `string` Referer header value. If provided it will take preference over the referer header value set by `page.setExtraHTTPHeaders()`.
- returns: `Promise[HTTPResponse?]` Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect.

`page.goto` will throw an error if:
    - there's an SSL error (e.g. in case of self-signed certificates).
    - target URL is invalid.
    - the timeout is exceeded during navigation.
    - the remote server does not respond or is unreachable.
    - the main resource failed to load.
