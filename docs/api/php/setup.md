# Setup

## Installation

Puth provides a composer package [`puth/php`](https://packagist.org/packages/puth/php){target=_blank}.

```bash
composer require puth/php
```

## Usage

The package provides a `Puth\PuthTestCase` class and a `Puth\Traits\PuthTestCaseTrait` trait from which you can select one.
Normally you would use the `Puth\PuthTestCase` class. You can extend it if you need to change some variables.

`Puth\Traits\PuthTestCaseTrait` is used if you already have a `TestCase` class from another package. Then you would
extend your other `TestCase` and in there use the `Puth\Traits\PuthTestCaseTrait` trait.

### PHPUnit

For plain PHPUnit tests you can use the `Puth\PuthTestCase` class.

=== "tests/GotoTest.php"

    ``` php
    <?php
    
    namespace Tests;
    
    use Puth\PuthTestCase;
    
    class PuthTestCase extends PuthTestCase
    {
        public function test_goto()
        {
            $this->page->goto('https://playground.puth.dev');
            
            $this->assertTitle('Puth - Playground');
        }
    }
    ```

### Laravel

In laravel you would create a `PuthTestCase` class beside your `TestCase` class.

=== "tests/PuthTestCase.php"

    ``` php
    <?php
    
    namespace Tests;
    
    use Puth\Traits\PuthTestCaseTrait;
    
    class PuthTestCase extends TestCase
    {
        use PuthTestCaseTrait;
    }
    ```