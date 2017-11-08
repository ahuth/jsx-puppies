import createElement from "../create-element"
import convertTree from "../convert-tree"

function stringify(node) {
  const div = document.createElement("div")
  div.appendChild(node)
  return div.innerHTML
}

test("no children", () => {
  const tree = createElement("div")
  const node = convertTree(tree)
  expect(stringify(node)).toEqual("<div></div>")
})

test("a single text child", () => {
  const tree = createElement("span", null, "hello world")
  const node = convertTree(tree)
  expect(stringify(node)).toEqual("<span>hello world</span>")
})

test("a single DOM node child", () => {
  const tree = createElement(
    "ul",
    null,
    createElement("li", { id: "first" }, "one")
  )
  const node = convertTree(tree)
  expect(stringify(node)).toEqual('<ul><li id="first">one</li></ul>')
})

test("multiple DOM node children", () => {
  const tree = createElement(
    "ol",
    null,
    createElement("li", { id: "first" }, "one"),
    createElement("li", { id: "second" }, "two"),
  )
  const node = convertTree(tree)
  expect(stringify(node)).toEqual('<ol><li id="first">one</li><li id="second">two</li></ol>')
})

test("a single custom element child", () => {
  const custom = ({ text }) => createElement("span", null, text)
  const tree = createElement("div", null, createElement(custom, { text: "foo" }))
  const node = convertTree(tree)
  expect(stringify(node)).toEqual("<div><span>foo</span></div>")
})

test("multiple custom element children", () => {
  const custom = ({ text }) => createElement("li", { className: "item" }, text)
  const tree = createElement(
    "ul",
    null,
    createElement(custom, { text: "eins" }),
    createElement(custom, { text: "zwei" }),
  )
  const node = convertTree(tree)
  expect(stringify(node)).toEqual('<ul><li class="item">eins</li><li class="item">zwei</li></ul>')
})

test("mixed DOM node and custom element children", () => {
  const first = ({ id }) => createElement(
    "div",
    { className: "section" },
    createElement("h1", { id }, "Stuff"),
    createElement("div", null, "wat"),
  )
  const second = () => createElement("input", { className: "foobar" })
  const tree = createElement(
    "div",
    null,
    createElement(first, { id: "some-stuff" }),
    createElement(second, null),
    createElement("button", null, "Click"),
  )
  const node = convertTree(tree)
  expect(stringify(node)).toEqual('<div><div class="section"><h1 id="some-stuff">Stuff</h1><div>wat</div></div><input class="foobar"><button>Click</button></div>')
})

test("children as a prop", () => {
  const custom = ({ children }) => createElement(
    "div",
    null,
    createElement("span", null, ...children),
  )
  const tree = createElement(custom, null, createElement("button", null, "pizza"))
  const node = convertTree(tree)
  expect(stringify(node)).toEqual("<div><span><button>pizza</button></span></div>")
})
