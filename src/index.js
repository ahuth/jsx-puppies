import "./polyfills"
import App from "./app"
import { createElement, render } from "./html"

render(createElement(App), document.getElementById("root"))
