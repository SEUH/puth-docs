---
id: plugins
title: Plugins
---

Puth supports Plugins. There are two types of plugins: `PuthInstancePlugin` and `PuthContextPlugin`.

**`PuthInstancePlugin`**

Puth instance plugins are loaded into the Puth instance on creation. They extend the general functions of Puth,
for example, you could add another route to the Server.

**`PuthContextPlugin`**

Puth context plugins are loaded into Contexts when they are created. They can extend the functions of every object that
a client can work with. For example, you can add your own functions to the `Page` element.

## Standard plugins

Puth comes bundled with a standard plugin (`PuthStandardPlugin`) that contains useful extensions. Puppeteer on its own does only contain basic
functionality.