var Table = require('cli-table');

// instantiate
let arr = [{
    tai: "kucing",
    skidipapap: "swadikap"
}]

var table = new Table({
    chars: {
        'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
        , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
        , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
        , 'right': '║', 'right-mid': '╢', 'middle': '│'
    }
});

// table.push(
//     ['foo', 'bar', 'baz'],
//     ['frob', 'bar', 'quuz'],
//     ['TT', "W", "a"]
// );

//MAKE HEADER
let a = Object.keys(arr[0])
table.push(a)
for (let i = 0; i < arr.length; i++) {
    let arrTemp = []
    
    arrTemp.push(arr[i][`tai`])
    arrTemp.push(arr[i][`skidipapap`])
    table.push(arrTemp)
    arrTemp = []
}

console.log(table.toString());