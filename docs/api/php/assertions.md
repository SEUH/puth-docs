# Assertions

## assertElementEquals

Assert that the `$first` element equals the `$second` element.

`assertElementNotEquals()` is the inverse of this assertion.

```php
$this->assertElementEquals($first, $second);
```

## assertTitle

Assert that the page title matches `$title`.

```php
$this->assertTitle($title);
```

## assertTitleContains

Assert that the page title contains `$title`.

```php
$this->assertTitleContains($title);
```

## assertUrlIs

Assert that the current URL matches `$url`.

```php
$this->assertUrlIs($url);
```

## assertSchemeIs

Assert that the current URL scheme matches `$scheme`.

```php
$this->assertSchemeIs($scheme);
```

## assertSchemeIsNot

Assert that the current URL scheme does not match `$scheme`.

```php
$this->assertSchemeIsNot($scheme);
```

## assertHostIs

Assert that the current URL host matches `$host`.

```php
$this->assertHostIs($host);
```

## assertHostIsNot

Assert that the current URL host does not match `$host`.

```php
$this->assertHostIsNot($host);
```

## assertPortIs

Assert that the current URL port matches `$port`.

```php
$this->assertPortIs($port);
```

## assertPortIsNot

Assert that the current URL port does not match `$port`.

```php
$this->assertPortIsNot($port);
```

## assertPathBeginsWith

Assert that the current URL path begins with `$path`.

```php
$this->assertPathBeginsWith($path);
```

## assertPathIs

Assert that the current path matches `$path`.

```php
$this->assertPathIs($path);
```

## assertPathIsNot

Assert that the current path does not match `$path`.

```php
$this->assertPathIsNot($path);
```

## assertQueryStringHas

Assert that `$name` is present in the query string.

```php
$this->assertQueryStringHas($name);
```

Assert that `$name` is present in the query string and matches `$value`.

```php
$this->assertQueryStringHas($name, $value);
```

## assertQueryStringMissing

Assert that `$name` is missing in the query string.

```php
$this->assertQueryStringMissing($name);
```

## assertFragmentIs

Assert that the URL's current hash fragment matches `$fragment`.

```php
$this->assertFragmentIs($fragment);
```

## assertFragmentBeginsWith

Assert that the URL's current hash fragment begins with `$fragment`.

```php
$this->assertFragmentBeginsWith($fragment);
```

## assertFragmentIsNot

Assert that the URL's current hash fragment does not match `$fragment`.

```php
$this->assertFragmentIsNot($fragment);
```

## assertHasCookie

Assert that a cookie named `$name` is present.

```php
$this->assertHasCookie($name);
```

## assertCookieMissing

Assert that a cookie named `$name` is not present.

```php
$this->assertCookieMissing($name);
```

## assertCookieValue

Assert that a cookie named `$name` is present and has the value `$value`.

```php
$this->assertCookieValue($name, $value);
```

## assertSee

Assert that `$text` is present on the page.

```php
$this->assertSee($text);
```

## assertDontSee

Assert that `$text` is not present on the page.

```php
$this->assertDontSee($text);
```

## 

Assert ``.

```php
$this->
```

## 

Assert ``.

```php
$this->
```

## 

Assert ``.

```php
$this->
```
