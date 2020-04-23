const Events = require('events')

module.exports = class Ais extends Events {
    constructor(window) {
        super()
        this.window = window
    }
}