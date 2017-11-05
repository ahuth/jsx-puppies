// Polyfill the Fetch API.
import "whatwg-fetch"
// Polyfill promises.
import Promise from "promise-polyfill";
if (!window.Promise) {
  window.Promise = Promise;
}
