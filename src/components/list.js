/** @jsx createElement */

import Item from "./item"
import { createElement } from "../html"

export default function List({ images }) {
  return (
    <div className="columns">
      {images.map((image, index) => (
        <div className="column">
          <Item image={image} index={index} />
        </div>
      ))}
    </div>
  )
}
