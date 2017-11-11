export default function pupsFetched(images) {
  const shuffled = images.sort(() => 0.5 - Math.random())

  return function (state) {
    return {
      ...state,
      loading: false,
      images: shuffled.slice(0, 5),
    }
  }
}
