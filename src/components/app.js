/** @jsx createElement */

import List from "./list"
import Loading from "./loading"
import { createElement } from "../html"

export default function App({ loading, images }) {
  if (loading) {
    return <Loading />
  } else {
    return <List images={images} />
  }
}
