/** @jsx createElement */

import store from "../store"
import { createElement } from "../html"
import { lightboxClosed, lightboxDecremented, lightboxIncremented } from "../actions"

export default function Lightbox({ image }) {
  return (
    <div>
      <div>
        <h4>Pup!</h4>
        <button className="button" onClick={() => store.dispatch(lightboxClosed)}>×</button>
      </div>
      <button className="button" onClick={() => store.dispatch(lightboxDecremented)}>◁</button>
      <img src={image} alt="Pup!" />
      <button className="button" onClick={() => store.dispatch(lightboxIncremented)}>▷</button>
    </div>
  )
}
