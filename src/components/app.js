/** @jsx createElement */

import Lightbox from "./lightbox"
import List from "./list"
import Loading from "./loading"
import { createElement } from "../html"

export default function App({ current, loading, images }) {
  return (
    <div>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://www.slack.com">
            Slack 🐶
          </a>
        </div>
      </nav>
      <div className="section">
        {loading
          ? <Loading />
          : <List images={images} />
        }
        {current >= 0 &&
          <Lightbox image={images[current]} />
        }
      </div>
    </div>
  )
}
