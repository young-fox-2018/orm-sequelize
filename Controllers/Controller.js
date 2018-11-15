const { Author } = require('../models/index')
const { Article } = require('../models/index')
const { Tag } = require('../models/index')
const View = require('../Views/View')


class Controller {
    static help() {
        View.help()
    }

}


module.exports = Controller