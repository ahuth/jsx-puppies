import lightboxDecremented from "../lightbox-decremented"

test("increments the current index", () => {
  const nextState = lightboxDecremented({ current: 4 })
  expect(nextState.current).toEqual(3)
})

test("wraps around", () => {
  const nextState = lightboxDecremented({ current: 0 })
  expect(nextState.current).toEqual(4)
})
