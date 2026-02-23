import { describe, it, expect } from 'vitest'
import request from '@/api/request'

describe('request', () => {
  it('exposes get, post, put, delete', () => {
    expect(typeof request.get).toBe('function')
    expect(typeof request.post).toBe('function')
    expect(typeof request.put).toBe('function')
    expect(typeof request.delete).toBe('function')
  })
})
