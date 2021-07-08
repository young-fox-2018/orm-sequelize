

class View {
    static displaySuccess(message){
        console.log(message)
        process.exit()
    }

    static displayError(err){
        console.log(err)
        process.exit()
    }

    static displayHelp(){
        console.log(`
        === DOCUMENTATION ====
        [01] node index.js help
        [02] node index.js author add first_name last_name religion gender age
        [03] node index.js author read_one  <key> <_value>
        [04] node index.js author read_all 
        [05] node index.js author update  <key> <value> <id> <_id>
        [06] node index.js author erase id <_id>
        [07] node index.js tag add <name>
        [08] node index.js tag read_one <key> <_value>
        [09] node index.js tag read_all
        [10] node index.js tag update <key> <value> <id> <_id>
        [11] node index.js tag erase id <_id> 
        [12] node index.js article add title body authorID tagID
        [13] node index.js article read_one 
        [14] node index.js article read_all <key> <_value>
        [15] node index.js article update <key> <value> <id> <_id>
        [16] node index.js article erase erase id <_id>
        `)
    }

}

module.exports = View