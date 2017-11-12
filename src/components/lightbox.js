/** @jsx createElement */

import store from "../store"
import { createElement } from "../html"
import { lightboxClosed } from "../actions"

export default function Lightbox({ image }) {
  return (
    <div class="card">
      <div class="card-body">
        <div class="card-title">
          <h4 class="card-title">Pup!</h4>
          <button onClick={() => store.dispatch(lightboxClosed)}>×</button>
        </div>
        <img src={image} alt="Pup!" />
      </div>
    </div>
  )
}
