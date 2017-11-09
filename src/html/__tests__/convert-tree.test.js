/** @jsx createElement */

import pretty from "pretty"
import { stripIndent } from "common-tags"
import createElement from "../create-element"
import convertTree from "../convert-tree"

function stringify(node) {
  const div = document.createElement("div")
  div.appendChild(node)
  return pretty(div.innerHTML)
}

test("no children", () => {
  const tree = <div></div>
  const node = convertTree(tree)
  expect(stringify(node)).toEqual("<div></div>")
})

test("a single text child", () => {
  const tree = <span>hello world</span>
  const node = convertTree(tree)
  expect(stringify(node)).toEqual("<span>hello world</span>")
})

test("a single number child", () => {
  const tree = <span>{666}</span>
  const node = convertTree(tree)
  expect(stringify(node)).toEqual("<span>666</span>")
})

test("a single DOM node child", () => {
  const tree = <ul><li id="first">one</li></ul>
  const node = convertTree(tree)
  expect(stringify(node)).toEqual(stripIndent`
    <ul>
      <li id="first">one</li>
    </ul>
  `)
})

test("multiple DOM node children", () => {
  const tree = (
    <ol>
      <li id="first">one</li>
      <li id="second">two</li>
    </ol>
  )
  const node = convertTree(tree)
  expect(stringify(node)).toEqual(stripIndent`
    <ol>
      <li id="first">one</li>
      <li id="second">two</li>
    </ol>
  `)
})

test("a single custom element child", () => {
  const Custom = ({ text }) => <span>{text}</span>
  const tree = <div><Custom text="foo" /></div>
  const node = convertTree(tree)
  expect(stringify(node)).toEqual("<div><span>foo</span></div>")
})

test("multiple custom element children", () => {
  const Custom = ({ text }) => <li className="item">{text}</li>
  const tree = (
    <ul>
      <Custom text="eins" />
      <Custom text="zwei" />
    </ul>
  )
  const node = convertTree(tree)
  expect(stringify(node)).toEqual(stripIndent`
    <ul>
      <li class="item">eins</li>
      <li class="item">zwei</li>
    </ul>
  `)
})

test("mixed DOM node and custom element children", () => {
  const First = ({ id }) => (
    <div className="section">
      <h1 id={id}>Stuff</h1>
      <div>wat</div>
    </div>
  )
  const Second = ({ className }) => <input className={className} />
  const tree = (
    <div>
      <First id="some-stuff" />
      <Second className="foobar" />
      <button>Click</button>
    </div>
  )
  const node = convertTree(tree)
  expect(stringify(node)).toEqual(stripIndent`
    <div>
      <div class="section">
        <h1 id="some-stuff">Stuff</h1>
        <div>wat</div>
      </div>
      <input class="foobar">
      <button>Click</button>
    </div>
  `)
})

test("children as a prop", () => {
  const Custom = ({ children }) => (
    <div>
      <h1>Title</h1>
      <div>
        {children}
      </div>
    </div>
  )
  const tree = <Custom><button>pizza</button></Custom>
  const node = convertTree(tree)
  expect(stringify(node)).toEqual(stripIndent`
    <div>
      <h1>Title</h1>
      <div>
        <button>pizza</button>
      </div>
    </div>
  `)
})
