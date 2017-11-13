/** @jsx createElement */

import Lightbox from "./lightbox"
import List from "./list"
import Loading from "./loading"
import Nav from "./nav"
import { createElement } from "../html"

export default function App({ current, loading, images }) {
  return (
    <div>
      <Nav />
      <div className="section">
        {loading
          ? <Loading />
          : <List images={images} />
        }
        {current >= 0 &&
          <Lightbox image={images[current]} />
        }
      </div>
    </div>
  )
}
