class Queue {
    constructor () {
      this.items = []
    }

    enqueue (item) {
      this.items.push(item)
    }

    dequeue () {
      if (!this.isEmpty()) {
        return this.items[0]
      }
    }

    front () {
      if (!this.isEmpty()) {
        return this.items.shift()
      }
    }

    isEmpty () {
      return !this.items.length
    }
  }

  export default Queue;