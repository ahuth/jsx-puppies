export function el(type, props, ...children) {
  return { type, props: props || {}, children }
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
  setProps(element, node.props)
  node.children.map(createElement).forEach(element.appendChild.bind(element))
  return element
}

function setProps(target, props) {
  Object.keys(props).forEach(name => {
    if (name === "className") {
      target.setAttribute("class", props[name])
    } else {
      target.setAttribute(name, props[name])
    }
  })
}
