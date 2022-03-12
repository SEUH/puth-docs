---
hide:
- navigation
---

# Puth E2E testing

Puth is a nice browser testing framework with focus on stability, performance, extendability and extensive feedback.

## Why Puth

Puth solves the problem of being able to run browser tests in any programming language. It does this by providing a 
very simple api that can be used to control Puth. There is also the Puth GUI which lets you look into what Puth is doing.

## Easy to use and clean to write

    
=== "Js"
    ``` js linenums="1"
    import {LocalPuthClient} from "puth";
    
    (async () => {
    
      // Setup the Puth Client
      const puth = new LocalPuthClient();
      
      // Create a new Context
      let context = await puth.contextCreate();
      
      // Creating a Browser instance
      let browser = await context.createBrowser();
      
      // Use the Browsers default Page
      let page = (await browser.pages())[0];
      
      // Lets open this website in the Browser
      await page.goto('https://puth.dev/');
      
      console.log('Successfully opened', await page.url());
      
      // Destroy the context
      await context.destroy();
      
    })();
    ```
=== "PHPUnit"
    ``` php
    <?php
    
    use Puth\PuthTestCase;
    
    class BasicTest extends PuthTestCase
    {
        function test_visit_documentation() {
            // Visit this site
            $this->page->goto('https://puth.dev/');
            
            // Assert that the visited sites url is the expected
            $this->assertUrlIs('https://puth.dev/');
        }
    }
    ```
=== "Laravel"

## Extensible

You can easily extend Puth with plugins. You need a special function? Then write your own plugin. It's really easy, I promise! :)

## Powered by Puppeteer

Puth uses [Puppeteer](https://pptr.dev/){:target="_blank"} at its core and allows you to use all of its features and more!