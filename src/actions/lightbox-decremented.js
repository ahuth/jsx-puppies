export default function lightboxDecremented(state) {
  const nextIndex = state.current - 1
  return {
    ...state,
    current: nextIndex >=0 ? nextIndex : 4,
  }
}
