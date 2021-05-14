import Letter from './letter.js'
import Customer from './customer.js'

class Queue {
    constructor () {
      this.letters = []
    }

    enqueue (letter) {
      this.letters.push(letter)
    }

    dequeue () {
      if (!this.isEmpty()) {
        return this.letters.shift()
      }
    }

    front () {
      if (!this.isEmpty()) {
        return this.letters[0]
      }
    }

    isEmpty () {
      return !this.letters.length
    }
  }

  const CHANCE_OF_LOST_LETTER = 0.1

  class PostOffice {
    constructor () {
      this.letters = new Queue()

      setInterval (async () => {
        try {
          await this.sendALetter()
        } catch (error) {
          console.error(error)
        }
      }, 10000)
    }

    sendALetter () {
      let letter = this.letters.dequeue()

      return new Promise((resolve, reject) => {
        if (!letter) {
          reject('Nema pisma za slanje.')
        } else if (JSON.stringify(letter.to) === JSON.stringify(letter.from)) { 
          reject('Ne moze se poklapati ime i prezime posiljaoca i primaoca.')
        } else if (Math.random() > CHANCE_OF_LOST_LETTER) {
          setTimeout(() => {
            resolve(letter.to.recieveLetter(letter))
          }, 3000)
        } else {
          reject('Nazalost, pismo je izgubljeno.')
        }
      })
    }

    scheduleForSending (letter) {
      this.letters.enqueue(letter)
    }
  }

  

  let jane = new Customer('Marko', 'Markovic')
  let john = new Customer('Jovana', 'Jovanovic')

  let postOffice = new PostOffice()

  postOffice.scheduleForSending(new Letter(Marko, Jovana, 'Ovo je pismo 1'))
  postOffice.scheduleForSending(new Letter(Jovana, Marko, 'Ovo je pismo 2'))
  postOffice.scheduleForSending(new Letter(Jovana, Marko, 'Ovo je pismo 3'))
  postOffice.scheduleForSending(new Letter(Jovana, Jovana, 'Ovo je pismo 4'))
  postOffice.scheduleForSending(new Letter(Marko, Jovana, 'Ovo je pismo 5'))
  postOffice.scheduleForSending(new Letter(Marko, Marko, 'Ovo je pismo 6'))
  postOffice.scheduleForSending(new Letter(Marko, Jovana, 'Ovo je pismo 7'))
  postOffice.scheduleForSending(new Letter(Marko, Jovana, 'Ovo je pismo 8'))