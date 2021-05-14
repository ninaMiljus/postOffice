import Letter from './letter.js'
import Customer from './customer.js'
import Queue from './queue.js'

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
            setTimeout(() => {
                    if (!letter) {
                        reject('Nema pisma za slanje.')
                    } else if (JSON.stringify(letter.to) === JSON.stringify(letter.from)) { 
                        reject('Ne moze se poklapati ime i prezime posiljaoca i primaoca.')
                    } else if (Math.random() > CHANCE_OF_LOST_LETTER) {
                        resolve(letter.to.recieveLetter(letter))
                    } else {
                        reject('Nazalost, pismo je izgubljeno.')
                    }
            }, 3000)
        
            scheduleForSending (letter) {
            this.letters.enqueue(letter)
            }
      }
    }
  }

  let marko = new Customer('Marko', 'Markovic')
  let jovana = new Customer('Jovana', 'Jovanovic')

  let postOffice = new PostOffice()

  postOffice.scheduleForSending(new Letter(marko, jovana, 'Ovo je pismo 1'))
  postOffice.scheduleForSending(new Letter(jovana, marko, 'Ovo je pismo 2'))
  postOffice.scheduleForSending(new Letter(jovana, marko, 'Ovo je pismo 3'))
  postOffice.scheduleForSending(new Letter(jovana, jovana, 'Ovo je pismo 4'))
  postOffice.scheduleForSending(new Letter(marko, jovana, 'Ovo je pismo 5'))
  postOffice.scheduleForSending(new Letter(marko, marko, 'Ovo je pismo 6'))
  postOffice.scheduleForSending(new Letter(marko, jovana, 'Ovo je pismo 7'))
  postOffice.scheduleForSending(new Letter(marko, jovana, 'Ovo je pismo 8'))