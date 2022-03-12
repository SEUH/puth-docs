# General information

This is the documentation for the Puth/Puppeteer Api. Keep in mind that some things might differ in different
programming languages.

!!! warning "Important for PHP"
    The API sometimes specifies a return value type `Promise` but there are no Promises in PHP. If a function specifies
    that it returns e.g. `Promise[Page]`, then PHP does get the Page object returned directly. Therefor calling e.g.
    `browser->newPage()` returns either a `Page` object or throws an exception if it fails.