/** @jsx createElement */

import store from "../store"
import { createElement } from "../html"
import { lightboxClosed, lightboxDecremented, lightboxIncremented } from "../actions"

export default function Lightbox({ image }) {
  return (
    <div class="card">
      <div class="card-body">
        <div class="card-title">
          <h4 class="card-title">Pup!</h4>
          <button class="btn btn-primary" onClick={() => store.dispatch(lightboxClosed)}>×</button>
        </div>
        <button class="btn btn-primary" onClick={() => store.dispatch(lightboxDecremented)}>◁</button>
        <img src={image} alt="Pup!" />
        <button class="btn btn-primary" onClick={() => store.dispatch(lightboxIncremented)}>▷</button>
      </div>
    </div>
  )
}
