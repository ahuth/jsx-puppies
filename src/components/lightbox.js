/** @jsx createElement */

import store from "../store"
import { createElement } from "../html"
import { lightboxClosed, lightboxDecremented, lightboxIncremented } from "../actions"

export default function Lightbox({ image, index }) {
  return (
    <div className="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Dog picture {index + 1}</p>
          <button class="delete" aria-label="close" onClick={() => store.dispatch(lightboxClosed)}></button>
        </header>
        <section class="modal-card-body">
          <figure className="image">
            <img src={image} alt="Pup!" />
          </figure>
        </section>
        <footer class="modal-card-foot">
          <button className="button" onClick={() => store.dispatch(lightboxDecremented)}>←</button>
          <button className="button" onClick={() => store.dispatch(lightboxIncremented)}>→</button>
        </footer>
      </div>
    </div>
  )
}
