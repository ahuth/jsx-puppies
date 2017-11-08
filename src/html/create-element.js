// Create a virtual representation of the DOM that we want to construct.
export default function createElement(type, config, children) {
  // Because we want to use JSX syntax, `config` can be `null` here, which means we can't use a
  // default parameter like we would want to.
  const props = config || {}
  const childrenLength = arguments.length - 2

  // Because we want to use JSX syntax, the `children` argument can be either a single child or an
  // array of children, which complicates matters. Here we're detecting when there are multiple
  // children and getting them from the arguments manually.
  if (childrenLength > 0) {
    if (childrenLength === 1) {
      props.children = children
    } else {
      const childArray = Array(childrenLength)
      for (let i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2]
      }
      props.children = childArray
    }
  } else {
    props.children = []
  }

  return { type, props: props }
}
