import pupsFetched from "../pups-fetched"

const currentState = {
  loading: true,
  images: [],
}

const images = [
  "example.com/0.png",
  "example.com/1.png",
  "example.com/2.png",
  "example.com/3.png",
  "example.com/4.png",
  "example.com/5.png",
  "example.com/6.png",
  "example.com/7.png",
  "example.com/8.png",
  "example.com/9.png",
]

test("sets loading to false", () => {
  const reducer = pupsFetched(images)
  const nextState = reducer(currentState)
  expect(nextState.loading).toEqual(false)
})

test("selects 5 random images", () => {
  const reducer = pupsFetched(images)
  const nextState = reducer(currentState)
  expect(nextState.images.length).toEqual(5)
  nextState.images.forEach((image) => expect(images).toContain(image))
})
