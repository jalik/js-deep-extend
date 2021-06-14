# @jalik/deep-extend

![GitHub package.json version](https://img.shields.io/github/package-json/v/jalik/js-deep-extend.svg)
[![Build Status](https://travis-ci.com/jalik/js-deep-extend.svg?branch=master)](https://travis-ci.com/jalik/js-deep-extend)
![GitHub](https://img.shields.io/github/license/jalik/js-deep-extend.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/jalik/js-deep-extend.svg)
[![GitHub issues](https://img.shields.io/github/issues/jalik/js-deep-extend.svg)](https://github.com/jalik/js-deep-extend/issues)
![npm](https://img.shields.io/npm/dt/@jalik/deep-extend.svg)

A utility to merge deep objects.

## Introduction

Use it when you need to merge nested objects.

## Merging deep objects

The following code shows how to merge objects without losing values that are not defined in objects
to merge.

```js
import deepExtend from "@jalik/deep-extend";

const defaultColors = {
  cold: {
    blue: '#0000FF',
    green: '#00FF00',
  },
  hot: {
    red: '#FF0000',
    yellow: '#FFFF00',
  },
};

const customColors = {
  cold: {
    blue: '#48C2ED',
  },
  hot: {
    yellow: '#E6CB5F',
  },
};

// Merge all colors into a new object.
// The final colors will have custom blue and yellow colors,
// but the other colors will be the default ones.
const result = deepExtend({}, defaultColors, customColors);
```

The result:

```json
{
  "cold": {
    "blue": "#48C2ED",
    "green": "#00FF00"
  },
  "hot": {
    "red": "#FF0000",
    "yellow": "#E6CB5F"
  }
}
```

## Merging arrays

See below how it is easy to merge arrays recursively.

```js
import deepExtend from "@jalik/deep-extend";

const a = [1, [2, [3]]];
const b = [undefined, [4, [undefined, 5], 6], 7];

const result = deepExtend([], a, b);
```

The result:

```json
[
  1,
  [
    4,
    [
      3,
      5
    ],
    6
  ],
  7
]
```

## Changelog

History of releases is in the [changelog](./CHANGELOG.md).

## License

The code is released under the [MIT License](http://www.opensource.org/licenses/MIT).
