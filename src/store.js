const initialState = {
  loading: true,
  images: [],
}

class Store {
  constructor() {
    this.state = initialState
    this.subscriptions = []
  }

  subscribe(callback) {
    this.subscriptions.push(callback)
  }

  getState() {
    return this.state
  }

  dispatch(reducer) {
    this.state = reducer(this.state)
    this.subscriptions.forEach(subscription => subscription(this.state))
  }
}

export default new Store()
