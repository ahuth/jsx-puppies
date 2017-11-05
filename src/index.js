import "./polyfills"
import { setup } from "./app"

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  setup({form})
})
