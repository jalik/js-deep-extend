# @jalik/deep-extend

A utility to merge deep objects.

## Introduction

Use it when you need to merge nested objects.

**This library has been unit tested.**

## Merging deep objects

The following code shows how to merge objects without losing values that are not defined in objects to merge.

```js
import deepExtend from "@jalik/deep-extend";

const defaultColors = {
    cold: {
        blue: "#0000FF",
        green: "#00FF00"
    },
    hot: {
        red: "#FF0000",
        yellow: "#FFFF00"
    }
};

const customColors = {
    cold: {
        blue: "#48C2ED"
    },
    hot: {
        yellow: "#E6CB5F"
    }
};

// Merge all colors into a new object.
// The final colors will have custom blue and yellow colors,
// but the other colors will be the default ones.
const finalColors = deepExtend({}, defaultColors, customColors);
```

## Merging arrays

See below how it is easy to merge arrays recursively.

```js
import deepExtend from "@jalik/deep-extend";

const a = [1, [2, [3]]];
const b = [undefined, [4, [undefined, 5], 6], 7];
const c = deepExtend([], a, b);

// c would result to [1, [4, [3, 5], 6], 7]
```

## Changelog

History of releases is in the [changelog](./CHANGELOG.md).

## License

The code is released under the [MIT License](http://www.opensource.org/licenses/MIT).
