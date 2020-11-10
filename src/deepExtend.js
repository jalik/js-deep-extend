/*
 * The MIT License (MIT)
 * Copyright (c) 2020 Karl STEIN
 */

/**
 * Merges two arrays and returns the new one.
 * @param {[]} a
 * @param {[]} b
 * @param {Function} fn
 * @return {[]}
 */
function mergeArrays(a, b, fn) {
  const result = [];

  for (let i = 0; i < a.length; i += 1) {
    if (typeof a !== 'undefined') {
      if (a[i] !== null && typeof a[i] === 'object') {
        result[i] = fn({}, a[i]);
      } else {
        result[i] = a[i];
      }
    }
  }

  for (let i = 0; i < b.length; i += 1) {
    if (typeof b[i] !== 'undefined') {
      if (b[i] !== null && typeof b[i] === 'object') {
        result[i] = fn(a[i], b[i]);
      } else {
        result[i] = b[i];
      }
    }
  }
  return result;
}

/**
 * Merge deep objects
 * @param {*} args
 * @return {*}
 */
function deepExtend(...args) {
  let a = args.shift();

  for (let i = 0; i < args.length; i += 1) {
    const b = args[i];

    if (a !== null && b !== null && typeof a !== 'undefined' && typeof b !== 'undefined') {
      // Merge objects
      if (typeof a === 'object' && typeof b === 'object') {
        // Merge arrays
        if (a instanceof Array && b instanceof Array) {
          a = mergeArrays(a, b, deepExtend);
        } else {
          const keys = Object.keys(b);

          for (let j = 0; j < keys.length; j += 1) {
            const key = keys[j];

            if (typeof b[key] === 'object' && b[key] !== null) {
              a[key] = deepExtend(a[key], b[key]);
            } else if (typeof b[key] !== 'undefined') {
              a[key] = b[key];
            }
          }
        }
      }
    } else if (b !== null && typeof b !== 'undefined') {
      if (b instanceof Array) {
        a = mergeArrays([], b, deepExtend);
      } else {
        a = b;
      }
    }
  }
  return a;
}

export default deepExtend;
