export default function pupClicked(index) {
  return function (state) {
    return {
      ...state,
      current: index,
    }
  }
}
