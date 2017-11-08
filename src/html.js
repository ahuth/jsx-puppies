export function el(type, ...children) {
  return { type, children }
}

export function render(component, domNode) {
  const element = createElement(component)
  domNode.innerHTML == ""
  domNode.appendChild(element)
}

// Convert a virtual DOM tree into actual DOM nodes.
function createElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node)
  } else if (typeof node.type === "function") {
    return createElement(node.type())
  }
  const element = document.createElement(node.type)
  node.children.map(createElement).forEach(element.appendChild.bind(element))
  return element
}
