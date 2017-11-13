/** @jsx createElement */

import store from "../store"
import { createElement } from "../html"
import { pupClicked } from "../actions"

export default function Item({ image, index }) {
  return (
    <div className="card" style="cursor: pointer">
      <div className="card-image" onClick={() => store.dispatch(pupClicked(index))}>
        <figure className="image">
          <img src={image} alt="Dog picture" />
        </figure>
      </div>
    </div>
  )
}
