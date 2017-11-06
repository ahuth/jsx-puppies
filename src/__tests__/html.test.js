import html from "../html"

test("parses a simple html element", () => {
  const node = html`<span>hello world</span>`
  expect(node.nodeName).toEqual("SPAN")
  expect(node.textContent.trim()).toEqual("hello world")
})

test("parses nested html", () => {
  const node = html`
    <div>
      <h1>Title</h1>
      <span>Content</h1>
    </div>
  `
  expect(node.nodeName).toEqual("DIV")
  expect(node.querySelector("h1").textContent.trim()).toEqual("Title")
  expect(node.querySelector("span").textContent.trim()).toEqual("Content")
})
