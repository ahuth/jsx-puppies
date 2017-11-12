import lightboxClosed from "../lightbox-closed"

const currentState = {
  current: 12,
}

test("unsets the current key", () => {
  const nextState = lightboxClosed(currentState)
  expect(nextState.current).toEqual(-1)
})
