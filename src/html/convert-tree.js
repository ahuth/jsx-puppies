import setProps from "./set-props"

export default function convertTree(node) {
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
