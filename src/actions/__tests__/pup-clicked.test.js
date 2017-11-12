import pupsFetched from "../pup-clicked"

const currentState = {
  current: -1,
}

test("sets the current key", () => {
  const reducer = pupsFetched(666)
  const nextState = reducer(currentState)
  expect(nextState.current).toEqual(666)
})
