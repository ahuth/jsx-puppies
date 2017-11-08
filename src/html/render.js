import convertTree from "./convert-tree"

export default function render(component, domNode) {
  const element = convertTree(component)
  domNode.innerHTML == ""
  domNode.appendChild(element)
}
