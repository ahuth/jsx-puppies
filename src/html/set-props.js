export default function setProps(target, props) {
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
