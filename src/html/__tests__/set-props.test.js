import setProps from "../set-props"

describe("setProps", () => {
  let target;

  beforeEach(() => {
    target = document.createElement("div")
  })

  test("class names", () => {
    setProps(target, { className: "foo" })
    expect(target.className).toEqual("foo")
  })

  test("event handlers", () => {
    const callback = jest.fn()
    setProps(target, { onClick: callback })
    target.click()
    expect(callback.mock.calls.length).toEqual(1)
  })

  test("anything else", () => {
    setProps(target, { id: "hello" })
    expect(target.id).toEqual("hello")
  })

  test("combinations", () => {
    setProps(target, { className: "some-class", id: "some-id" })
    expect(target.className).toEqual("some-class")
    expect(target.id).toEqual("some-id")
  })

  test("ignoring children props", () => {
    setProps(target, { className: "some-class", children: 666 })
    expect(target.className).toEqual("some-class")
    expect(target.getAttribute("children")).toBeNull()
  })
})
