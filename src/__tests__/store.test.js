import store from "../store"

test("initial state", () => {
  expect(store.getState()).toEqual({
    count: 0,
  })
})

test("subscribing", () => {
  const callback = jest.fn()
  store.subscribe(callback)
  store.dispatch(state => state)
  expect(callback.mock.calls.length).toEqual(1)
  expect(callback.mock.calls[0][0]).toEqual({
    count: 0,
  })
})

test("dispatching", () => {
  const reducer = prevState => ({ ...prevState, count: -50 })
  store.dispatch(reducer)
  expect(store.getState()).toEqual({
    count: -50,
  })
})
