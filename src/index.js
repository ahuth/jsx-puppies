/** @jsx createElement */

import "./polyfills"
import App from "./app"
import { createElement, render } from "./html"

render(<App />, document.getElementById("root"))
