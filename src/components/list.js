/** @jsx createElement */

import store from "../store"
import { createElement } from "../html"
import { pupClicked } from "../actions"

export default function List({ images }) {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-sm">
          <div className="card hand" onClick={() => store.dispatch(pupClicked(index))}>
            <img className="card-img-top" src={image} alt={`dog picture ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  )
}
