// ES5
// function congHaiSo(x, y) {
//     if (y === undefined) y = 2
//     return x + y
// }

// ES6
const congHaiSo = (x, y = 2) => x + y

const tong = congHaiSo(4)
console.log(tong)

const nhanHaiSo = (x, y = 5) => x * y
console.log(nhanHaiSo(4, 6))