/** @jsx createElement */

import store from "../store"
import { createElement } from "../html"
import { pupClicked } from "../actions"

export default function List({ images }) {
  return (
    <div className="columns">
      {images.map((image, index) => (
        <div className="column">
          <div onClick={() => store.dispatch(pupClicked(index))}>
            <img src={image} alt={`dog picture ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  )
}
