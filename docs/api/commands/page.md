# Page

## $(selector)

- selector: `string` A selector to query the page for
- returns: `ElementHandle`

Returns the first element that matches the `selector`. If no element was found, the client will throw an exception.

!!! danger ""
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

!!! danger ""
    The `$$` character is reserved in `PHP`, therefore the php client renames this function to `getAll`.

=== "Js"
    ``` js
    let images = page.$$('.images');
    ```
=== "PHPUnit"
    ``` php
    $images = $page->getAll('.images');
    ```