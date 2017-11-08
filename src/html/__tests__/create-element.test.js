import createElement from "../create-element"

test("a complete example with one child", () => {
  const element = createElement("span", { id: "some-span" }, "hello world")
  expect(element).toEqual({
    type: "span",
    props: {
      id: "some-span",
      children: "hello world",
    },
  })
})

test("a complete example with multiple children", () => {
  const element = createElement("span", { id: "some-span" }, "hello", "world")
  expect(element).toEqual({
    type: "span",
    props: {
      id: "some-span",
      children: [
        "hello",
        "world",
      ],
    },
  })
})

test("no props", () => {
  const element = createElement("div", null, "hi")
  expect(element).toEqual({
    type: "div",
    props: {
      children: "hi",
    },
  })
})

test("no children", () => {
  const element = createElement("div", { className: "wat" })
  expect(element).toEqual({
    type: "div",
    props: {
      className: "wat",
      children: [],
    },
  })
})

test("no props or children", () => {
  const element = createElement("input")
  expect(element).toEqual({
    type: "input",
    props: {
      children: [],
    },
  })
})
