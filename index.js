let Controller = require(`./Controllers/Controller`)

let args = process.argv.slice(2)
let options = args.slice(2)

Controller.execute(args, options)
