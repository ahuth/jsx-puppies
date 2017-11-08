/** @jsx createElement */

import { createElement } from "./html"

export default function App() {
  return (
    <div>
      <h1 id="title">Title</h1>
      <span className="message" onClick={() => alert("Message!")}>hello world!</span>
    </div>
  )
}
