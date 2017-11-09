export default function increment(prevState) {
  return { ...prevState, count: prevState.count + 1 }
}
