
class View {
    static help() {
        let table = ['author', 'tag', 'article'],
            commands = ['add', 'read_one', 'read_all', 'update', 'delete']
        console.log(`============================documentation============================`)
        for (let i = 0; i < table.length; i++) {
            let view = ''
            for (let j = 0; j < commands.length; j++) {
                if (table[i] === 'author') {
                    if (commands[j] === 'add') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "data yang ingin dimasukan"`
                    } else if (commands[j] === 'read_one') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "masukan id outhor"`
                    } else if (commands[j] === 'read_all') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]}`
                    } else if (commands[j] === 'update') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "masukan data yang ingin diupdate dan idnya"`
                    } else if (commands[j] === 'delete') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "masukan id author"`
                    }
                } else if (table[i] === 'tag') {
                    if (commands[j] === 'add') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "data yang ingin dimasukan"`
                    } else if (commands[j] === 'read_one') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "masukan id outhor"`
                    } else if (commands[j] === 'read_all') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]}`
                    } else if (commands[j] === 'update') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "masukan data yang ingin diupdate dan idnya"`
                    } else if (commands[j] === 'delete') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "masukan id author"`
                    }
                } else if (table[i] === 'article') {
                    if (commands[j] === 'add') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "data yang ingin dimasukan"`
                    } else if (commands[j] === 'read_one') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "masukan id article"`
                    } else if (commands[j] === 'read_all') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]}`
                    } else if (commands[j] === 'update') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "masukan data yang ingin diupdate dan idnya"`
                    } else if (commands[j] === 'delete') {
                        view = `${table[i]} ${commands[j]} -> ${commands[j]} "masukan id article"`
                    }

                }
                console.log(view)

            }

        }
        console.log(`======================================================================`)
    }

    static showError(err) {
        console.log(err)
    }
    static showData(input) {
        console.log(input)
    }

}

module.exports = View