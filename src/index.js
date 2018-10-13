/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 Karl STEIN
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import extend from '@jalik/extend';

/**
 * Merge deep objects
 * @return {*}
 */
function deepExtend(...args) {
  let a = args.shift();

  for (let i = 0; i < args.length; i += 1) {
    const b = args[i];

    if (typeof b === 'object' && b !== null
      && typeof a === 'object' && a !== null) {
      const keys = Object.keys(b);

      for (let j = 0; j < keys.length; j += 1) {
        const key = keys[j];

        if (typeof b[key] !== 'undefined') {
          if (typeof b[key] === 'object' && b[key] !== null) {
            a[key] = extend(a[key], b[key]);
          } else {
            a[key] = b[key];
          }
        }
      }
    } else if (b !== null && typeof b !== 'undefined') {
      a = b;
    }
  }
  return a;
}

export default deepExtend;
