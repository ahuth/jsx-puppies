/** @jsx createElement */

import store from "./store"
import { createElement } from "./html"
import { increment } from "./actions"

export default function App({ loading, images }) {
  if (loading) {
    return <p>Please wait...</p>
  }
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
