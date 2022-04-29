//imita evento do nav

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('durante')
})
console.log('before')

eventEmitter.emit('start') //chama o evento

console.log('after')
