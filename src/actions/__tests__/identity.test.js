import identity from "../identity"

const currentState = {
  loading: true,
  images: [],
}

test("does not change the state", () => {
  const nextState = identity(currentState)
  expect(nextState).toEqual(currentState)
})
