export default function lightboxIncremented(state) {
  const nextIndex = state.current + 1
  return {
    ...state,
    current: nextIndex < 5 ? nextIndex : 0,
  }
}
