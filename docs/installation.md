---
id: installation
title: Installation
---

### Requirements

- Node.js version >= 12

### Installation

You need the core package for basic operation. It contains a chromium browser and a server.

```bash
npm i --dev puth
```

### Start

```bash
puth start
```

or you can add a start script to your package.json

```json title="package.json"
{
  // ...
  "scripts": {
    // ...
    "puth": "puth start",
  }
}
```

And execute it with

```bash
npm run puth
```

Thats it! Now select a Puth Client and start writing tests or whatever you want to do with a Browser.