// ES5, for...in

const buaAn = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    buaToi: 'com'
}

const bangChuCai = ['a', 'b', 'c']

// for (let moiBuaAn in buaAn) console.log(moiBuaAn)
/* =>
*  buaSang
*  buaTrua
*  buaToi
*/

// for (let moiChuCai in bangChuCai) console.log(moiChuCai)


// ES6, for...of
for (let moiChuCai of bangChuCai) console.log(moiChuCai)
/* =>
*   a
*   b
*   c
*   for...of có thể dùng để đọc các giá trị của array (hoặc String). Kiểu iterable
*/

// String
const myName = 'Jun Nguyen'
for (let kyTu of myName) console.log(kyTu.toUpperCase())

// for (let moiBuaAn of buaAn) console.log(moiBuaAn)
// => nhưng object thì không, nó báo lỗi, có thể dùng thư viện
// hoặc dùng lại for...in như sau:
for (let moiBuaAn in buaAn) console.log(buaAn[moiBuaAn])



