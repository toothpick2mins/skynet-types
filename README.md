# Skynet Types

 [![npm](https://img.shields.io/npm/v/skynet-types.svg)](https://npmjs.com/package/skynet-types)

> TypeScript definitions for skynet standard library

## Installation

> NOTE: In most of cases your environment-specific types would already include this package. In that case you don't need to do anything. If you're a developer of such types you should add `skynet-types` as a dependency and load it by adding `/// <reference types="lua-types/<version>" />`

1. Get this package from npm

```bash
npm install -D skynet-types
```

2. Modify your `tsconfig.json`

```diff
{
  "compilerOptions": {
+    "types": ["skynet/index"]
  }
}
```