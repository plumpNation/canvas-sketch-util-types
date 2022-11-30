canvas-sketch-util-types
========================

An unfinished collection of typings based on the 1.10.0 version of canvas-sketch-util.

The version of these typings will be changed to match the version of canvas-sketch-util it applies to once the typings are completed. 

I exported a dump of the d.ts files and I'm trying to update them, removing all the uses of `any` as I use the functions and learn more about how they are used.

Also, using as a learning project to get some typings into DefinitelyTyped, which I am in huge admiration of.

## To install

### DefinitelyTyped alias (@types)

Add an entry for `"@types/canvas-sketch-util": "canvas-sketch-util-types"` in your package.json file and run the install with pnpm/yarn/npm.

### Paths in tsconfig.json

```bash
pnpm install canvas-sketch-util-types
# or
yarn add canvas-sketch-util-types
# or
npm install canvas-sketch-util-types
```

```json
{
  "compilerOptions": {
    "paths": {
        "canvas-sketch-util": ["./node_modules/canvas-sketch-util-types"],
        "canvas-sketch-util/*": ["./node_modules/canvas-sketch-util-types/*"]
    }
  }
}
```
