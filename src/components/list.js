/** @jsx createElement */

import { createElement } from "../html"

export default function List({ images }) {
  return (
    <ul>
      {images.map((image, index) => (
        <li>
          <img width="50" src={image} alt={`dog picture ${index + 1}`} />
        </li>
      ))}
    </ul>
  )
}
