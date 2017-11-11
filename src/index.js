/** @jsx createElement */

import "./polyfills"
import App from "./app"
import fetchPups from "./fetch-pups"
import store from "./store"
import { createElement, render } from "./html"
import { identity, pupsFetched } from "./actions"

store.subscribe((state) => {
  render(<App loading={state.loading} images={state.images} />, document.getElementById("root"))
})

fetchPups("labrador").then((images) => {
  store.dispatch(pupsFetched(images))
})

// Trigger rendering by dispatching an event that doesn't change the state.
store.dispatch(identity)
