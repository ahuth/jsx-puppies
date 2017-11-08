import { createElement } from "./html"

export default function App() {
  return createElement(
    "div",
    null,
    createElement("h1", { id: "title" }, "Title"),
    createElement("span", { className: "message", onClick: () => { alert("Message!") } }, "hello world"),
  )
}
