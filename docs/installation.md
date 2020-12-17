---
id: installation
title: Installation
---

## Requirements

- Node.js version >= 12

## Installation

You need the core package for basic operation. It contains a chromium browser and a server.

```bash
npm i --dev puth
```

## Start the server

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

## Configuration

You can configure plugins for puth in the `puth.config.json` file inside your projects root directory.
Puth will create this file after you have installed Puth. The configuration file is only used if you use Puth`s CLI.

```json title="puth.config.json"
{
  "plugins": [
    "puth/lib/plugins/PuthStandardPlugin"
  ]
}
```