// Use the DOMParser API to convert strings into DOM nodes, which has good support across browsers.
// There is some evidence that it is slower than setting `innerHTML` on an in-memory node. Should
// performance become an issue, I'll look at switching to that.
// See https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
const parser = new DOMParser()

// Create DOM nodes from a template string, including interpolated values.
export default function html(strings, ...values) {
  const string = strings.reduce((acc, string, index) => {
    const substitution = values[index - 1]
    return acc + substitution + string
  })

  return parser.parseFromString(string, 'text/html').body.firstChild
}
