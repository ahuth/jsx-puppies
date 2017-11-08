export function createElement(type, props, ...children) {
  return { type, props: props || {}, children }
}

export function render(component, domNode) {
  const element = convertTree(component)
  domNode.innerHTML == ""
  domNode.appendChild(element)
}

// Convert a virtual DOM tree into actual DOM nodes.
function convertTree(node) {
  if (typeof node === "string") {
    return document.createTextNode(node)
  } else if (typeof node.type === "function") {
    return convertTree(node.type(node.props))
  }
  const element = document.createElement(node.type)
  setProps(element, node.props)
  node.children.map(convertTree).forEach((child) => element.appendChild(child))
  return element
}

function setProps(target, props) {
  Object.keys(props).forEach(name => {
    if (name === "className") {
      target.setAttribute("class", props[name])
    } else if (/^on/.test(name)) {
      const handlerName = name.slice(2).toLowerCase()
      target.addEventListener(handlerName, props[name])
    } else {
      target.setAttribute(name, props[name])
    }
  })
}
