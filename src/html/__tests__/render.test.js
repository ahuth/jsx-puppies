import createElement from "../create-element"
import render from "../render"

describe("render", () => {
  let root

  beforeEach(() => {
    root = document.createElement("div")
  })

  test("rendering a component", () => {
    const component = createElement("span", null, "hello world")
    expect(root.childElementCount).toEqual(0)
    render(component, root)
    expect(root.childElementCount).toEqual(1)
  })

  test("rendering multiple times", () => {
    const component = createElement("span", null, "hello world")
    expect(root.childElementCount).toEqual(0)
    render(component, root)
    expect(root.childElementCount).toEqual(1)
    render(component, root)
    expect(root.childElementCount).toEqual(1)
  })
})
