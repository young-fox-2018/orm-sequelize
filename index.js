const argv = process.argv.slice(2)
const cmd = [argv[0], argv[1]]
const input = argv.slice(2)
const Controller = require('./Controllers/Controller')

Controller.execute(cmd, input)