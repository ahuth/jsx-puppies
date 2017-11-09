/** @jsx createElement */

import store from "./store"
import { createElement } from "./html"

const increment = () => store.dispatch((prevState) => {
  return { ...prevState, count: prevState.count + 1 }
})

export default function App({ count, dispatch }) {
  return (
    <div>
      <h1 id="title">Title</h1>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
