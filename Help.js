"use strict"

class Help {
    static printHelp() {
        console.log('author add => add<spaece> "data yang ingin diinginkan"')
        console.log('author read_one => read_one<space> "masukkan id author"')
        console.log('author read_all => read_all')
        console.log('author update => update<space> "masukkan data yang ingin di update dan idnya"')
        console.log('author delete => delete<space> "masukkan id author"')
        console.log('tag add => add<space> "data yang ingin diinginkan"')
        console.log('tag read_one => read_one<space> "masukkan id tag"')
        console.log('tag read_all => read_all')
        console.log('tag update => update<space> ""masukkan data yang ingin di update dan idnya"')
        console.log('tag delete => delete<space> "masukkan id author"')
        console.log('article add => delete<space> "data yg ingin dimasukkan"')
        console.log('article read_one => delete<space> "masukkan id article"')
        console.log('article read_all => read_all')
        console.log('article update => update<space> ""masukkan data yang ingin di update dan idnya"')
        console.log('article delete => delete<space> "masukkan id author"')
    }
}

module.exports = Help