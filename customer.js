class Customer {
    constructor (firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }

    recieveLetter (letter) {
      const { from: { firstName }, content } = letter
      console.log(`${firstName} salje: '${content}''`)
    }
  }

  export default Customer;