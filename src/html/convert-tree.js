import setProps from "./set-props"

// Convert our virtual DOM representation into actual DOM nodes.
export default function convertTree(node) {
  if (typeof node === "string") {
    return document.createTextNode(node)
  } else if (typeof node.type === "function") {
    return convertTree(node.type(node.props))
  }

  const element = document.createElement(node.type)
  setProps(element, node.props)

  // Children can either be a single child or an array of children. I would love to clean this up.
  // However, forcing children to be always be an array has its own downsides - for instance, we
  // would have to check at the top of this function whether or not the node itself is an array.
  if (Array.isArray(node.props.children)) {
    node.props.children.map(convertTree).forEach((child) => element.appendChild(child))
  } else {
    const convertedChild = convertTree(node.props.children)
    element.appendChild(convertedChild)
  }

  return element
}
