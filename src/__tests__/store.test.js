import store from "../store"

test("initial state", () => {
  expect(store.getState()).toEqual({
    current: -1,
    loading: true,
    images: [],
  })
})

test("subscribing", () => {
  const callback = jest.fn()
  store.subscribe(callback)
  store.dispatch(state => state)
  expect(callback.mock.calls.length).toEqual(1)
  expect(callback.mock.calls[0][0]).toEqual({
    current: -1,
    loading: true,
    images: [],
  })
})

test("dispatching", () => {
  const reducer = prevState => ({ ...prevState, count: -50 })
  store.dispatch(reducer)
  expect(store.getState()).toEqual({
    current: -1,
    loading: true,
    images: [],
    count: -50,
  })
})
