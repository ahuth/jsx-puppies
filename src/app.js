/** @jsx createElement */

import store from "./store"
import { createElement } from "./html"
import { increment } from "./actions"

export default function App({ count, dispatch }) {
  return (
    <div>
      <h1 id="title">Title</h1>
      <span>{count}</span>
      <button onClick={() => store.dispatch(increment)}>Increment</button>
    </div>
  )
}
