/** @jsx createElement */

import { createElement } from "../html"

export default function Nav() {
  return (
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://www.slack.com">
          Slack 🐶
        </a>
      </div>
    </nav>
  )
}
