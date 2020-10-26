const moduleB = require('./moduleB')

moduleB.exports = {
    run: () => {
        moduleB.log()
    }
}