/** @jsx createElement */

import { createElement } from "../html"

export default function List({ images }) {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-sm">
          <div className="card hand">
            <img className="card-img-top" src={image} alt={`dog picture ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  )
}
