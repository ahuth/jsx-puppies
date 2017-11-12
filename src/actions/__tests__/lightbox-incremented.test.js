import lightboxIncremented from "../lightbox-incremented"

test("increments the current index", () => {
  const nextState = lightboxIncremented({ current: 0 })
  expect(nextState.current).toEqual(1)
})

test("wraps around", () => {
  const nextState = lightboxIncremented({ current: 4 })
  expect(nextState.current).toEqual(0)
})
