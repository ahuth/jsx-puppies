import { el } from "./html"

export default function App() {
  return el(
    "div",
    null,
    el("h1", { id: "title" }, "Title"),
    el("span", { className: "message", onClick: () => { alert("Message!") } }, "hello world"),
  )
}
