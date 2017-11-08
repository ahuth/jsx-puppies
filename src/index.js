import "./polyfills"
import App from "./app"
import { el, render } from "./html"

render(el(App), document.getElementById("root"))
