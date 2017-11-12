export default function lightboxClosed(state) {
  return {
    ...state,
    current: -1,
  }
}
