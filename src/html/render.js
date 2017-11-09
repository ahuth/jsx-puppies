import convertTree from "./convert-tree"

// Take our virtual representation of the DOM, convert it into actual DOM nodes, and insert into
// the specified node.
export default function render(component, domNode) {
  const element = convertTree(component)
  domNode.innerHTML = ""
  domNode.appendChild(element)
}
