/** @jsx createElement */

import List from "./list"
import Loading from "./loading"
import { createElement } from "../html"

export default function App({ loading, images }) {
  return (
    <div className="container">
      {loading
        ? <Loading />
        : <List images={images} />
      }
    </div>
  )
}
