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

import deepExtend from '../src';

it('deepExtend(null, null) should return null', () => {
  expect(deepExtend(null, null)).toEqual(null);
});

it('deepExtend(null, {a: true}) should return an object', () => {
  expect(deepExtend(null, { a: true })).toEqual({ a: true });
});

it('deepExtend({a: true}, null) should return an object', () => {
  expect(deepExtend({ a: true }, null)).toEqual({ a: true });
});

it('deepExtend({a: true}, {a: false}) should merge objects', () => {
  expect(deepExtend({ a: true }, { a: false })).toEqual({ a: false });
  expect(deepExtend({ a: true }, { b: false })).toEqual({ a: true, b: false });
});

it('deepExtend({a: true}, {b: {c: false}}) should merge objects recursively', () => {
  expect(deepExtend({ a: true, b: { d: 0 } }, { b: { c: false } })).toEqual({
    a: true,
    b: { d: 0, c: false },
  });
});
