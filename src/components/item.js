/** @jsx createElement */

import store from "../store"
import { createElement } from "../html"
import { pupClicked } from "../actions"

export default function Item({ image, index }) {
  return (
    <div onClick={() => store.dispatch(pupClicked(index))}>
      <img src={image} alt="Dog picture" />
    </div>
  )
}
