import { el } from "./html"

export default function App() {
  return el(
    "div",
    el("h1", "Title"),
    el("span", "hello world"),
  )
}
