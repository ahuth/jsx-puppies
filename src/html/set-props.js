// Take a "props" object and set each property/value as attributes on the provided DOM node, giving
// special consideration to event handlers and reserved keywords.
export default function setProps(target, props) {
  Object.keys(props).forEach(name => {
    if (name === "className") {
      target.setAttribute("class", props[name])
    } else if (name === "children") {
      // Do nothing
    } else if (/^on/.test(name)) {
      const handlerName = name.slice(2).toLowerCase()
      target.addEventListener(handlerName, props[name])
    } else {
      target.setAttribute(name, props[name])
    }
  })
}
