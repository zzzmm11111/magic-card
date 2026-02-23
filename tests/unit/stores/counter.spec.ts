import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('useCounterStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initial state', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
    expect(store.double).toBe(0)
  })

  it('increment', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
    expect(store.double).toBe(2)
    store.increment()
    expect(store.count).toBe(2)
  })

  it('reset', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    store.reset()
    expect(store.count).toBe(0)
  })
})
