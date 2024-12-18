/*
 * The MIT License (MIT)
 * Copyright (c) 2024 Karl STEIN
 */

import { describe, expect, it } from '@jest/globals'
import deepExtend from '../src/index'

describe('deepExtend(null, null)', () => {
  it('should return null', () => {
    const a = null
    const b = null
    expect(deepExtend(a, b)).toBeNull()
  })
})

describe('deepExtend(undefined, undefined)', () => {
  it('should return undefined', () => {
    const a = undefined
    const b = undefined
    expect(deepExtend(a, b)).toBeUndefined()
  })
})

// Objects

describe('deepExtend(null, object)', () => {
  it('should return an object', () => {
    const a = null
    const b = { a: 1 }
    expect(deepExtend(a, b)).toEqual(b)
  })
})

describe('deepExtend(undefined, object)', () => {
  it('should return an object', () => {
    const a = undefined
    const b = { a: 1 }
    expect(deepExtend(a, b)).toEqual(b)
  })
})

describe('deepExtend(object, null)', () => {
  it('should return an object', () => {
    const a = { a: 1 }
    const b = null
    expect(deepExtend(a, b)).toEqual(a)
  })
})

describe('deepExtend(object, undefined)', () => {
  it('should return an object', () => {
    const a = { a: 1 }
    const b = undefined
    expect(deepExtend(a, b)).toEqual(a)
  })
})

describe('deepExtend(object, object)', () => {
  it('should replace existing attributes', () => {
    const a = { a: 1 }
    const b = { a: 2 }
    expect(deepExtend(a, b)).toStrictEqual(b)
  })

  it('should merge new attributes', () => {
    const a = { a: 1 }
    const b = { b: 2 }
    const r = { a: 1, b: 2 }
    expect(deepExtend(a, b)).toStrictEqual(r)
  })

  it('should merge objects recursively', () => {
    const a = { a: { b: 1, c: 3 }, d: 4 }
    const b = { a: { b: 2 } }
    const r = { a: { b: 2, c: 3 }, d: 4 }
    expect(deepExtend(a, b)).toStrictEqual(r)
  })

  it('should not modify input array', () => {
    const a = { array: [] }
    const b = { array: [1, 2] }
    const r = deepExtend({}, a, b)

    r.array[0] = 8
    r.array[1] = 9

    expect(a.array).toStrictEqual([])
    expect(b.array).toStrictEqual([1, 2])
  })

  it('should not modify nested objects', () => {
    const a = { child: { a: 1 } }
    const b = { child: { b: 2 } }
    const r = deepExtend({}, a, b)

    r.child.a = null
    r.child.b = null

    expect(a.child).toStrictEqual({ a: 1 })
    expect(b.child).toStrictEqual({ b: 2 })
  })
})

// Arrays

describe('deepExtend(array, array)', () => {
  it('should merge arrays by replacing index value', () => {
    const a = [0, 1]
    const b = [0, 2]
    expect(deepExtend(a, b)).toEqual(b)
  })

  it('should not ignore null values when merging arrays', () => {
    const a = [0, 1]
    const b = [0, null]
    const r = [0, null]
    expect(deepExtend(a, b)).toEqual(r)
  })

  it('should ignore undefined values when merging arrays', () => {
    const a = [0, 1]
    const b = [0, undefined]
    const r = [0, 1]
    expect(deepExtend(a, b)).toEqual(r)
  })

  it('should merge arrays recursively', () => {
    const a = [1, [2, [3]]]
    const b = [undefined, [4, [undefined, 5], 6], 7]
    const r = [1, [4, [3, 5], 6], 7]
    expect(deepExtend(a, b)).toEqual(r)
  })
})

describe('deepExtend(null, array)', () => {
  it('should not modify input array', () => {
    const a = null
    const b = [1, 2, 3]
    expect(deepExtend(a, b)).not.toBe(b)
  })
})

// Arrays to Object

describe('deepExtend(object, array)', () => {
  it('should merge arrays into objects', () => {
    const a = {}
    const b = [1]
    const r = { 0: 1 }
    expect(deepExtend(a, b)).toEqual(r)
  })
})

describe('deepExtend({}, { __proto__: { polluted: "polluted" } })', () => {
  it('should not pollute prototype', () => {
    const a = {}
    const b = JSON.parse('{"__proto__": {"polluted": "polluted"}}')
    const result = deepExtend(a, b)
    expect(result).toStrictEqual({})
    // @ts-ignore
    expect({}.polluted).toBeUndefined()
  })
})
