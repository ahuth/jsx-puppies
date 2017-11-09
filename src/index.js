/** @jsx createElement */

import "./polyfills"
import App from "./app"
import store from "./store"
import { createElement, render } from "./html"

store.subscribe((state) => {
  render(<App count={state.count} />, document.getElementById("root"))
})

store.dispatch(state => state)
