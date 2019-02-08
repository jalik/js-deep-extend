/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Karl STEIN
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
  const a = null;
  const b = null;
  expect(deepExtend(a, b)).toEqual(null);
});

it('deepExtend(undefined, undefined) should return undefined', () => {
  const a = undefined;
  const b = undefined;
  expect(deepExtend(a, b)).toEqual(undefined);
});

// Objects

it('deepExtend() should replace null values', () => {
  const a = null;
  const b = { a: 1 };
  expect(deepExtend(a, b)).toEqual(b);
});

it('deepExtend() should replace undefined values', () => {
  const a = undefined;
  const b = { a: 1 };
  expect(deepExtend(a, b)).toEqual(b);
});

it('deepExtend() should ignore null values', () => {
  const a = { a: 1 };
  const b = null;
  expect(deepExtend(a, b)).toEqual(a);
});

it('deepExtend() should ignore undefined values', () => {
  const a = { a: 1 };
  const b = undefined;
  expect(deepExtend(a, b)).toEqual(a);
});

it('deepExtend() should replace existing attributes', () => {
  const a = { a: 1 };
  const b = { a: 2 };
  expect(deepExtend(a, b)).toEqual(b);
});

it('deepExtend() should merge new attributes', () => {
  const a = { a: 1 };
  const b = { b: 2 };
  const r = { a: 1, b: 2 };
  expect(deepExtend(a, b)).toEqual(r);
});

it('deepExtend() should merge objects recursively', () => {
  const a = { a: { b: 1, c: 3 }, d: 4 };
  const b = { a: { b: 2 } };
  const r = { a: { b: 2, c: 3 }, d: 4 };
  expect(deepExtend(a, b)).toEqual(r);
});

// Arrays

it('deepExtend() should merge arrays by replacing index value', () => {
  const a = [0, 1];
  const b = [0, 2];
  expect(deepExtend(a, b)).toEqual(b);
});

it('deepExtend() should ignore undefined values when merging arrays', () => {
  const a = [0, 1];
  const b = [0, undefined];
  const r = [0, 1];
  expect(deepExtend(a, b)).toEqual(r);
});

it('deepExtend() should merge arrays recursively', () => {
  const a = [1, [2, [3]]];
  const b = [undefined, [4, [undefined, 5], 6], 7];
  const r = [1, [4, [3, 5], 6], 7];
  expect(deepExtend(a, b)).toEqual(r);
});

// Arrays to Object

it('deepExtend() should merge arrays into objects', () => {
  const a = {};
  const b = [1];
  const r = { 0: 1 };
  expect(deepExtend(a, b)).toEqual(r);
});
