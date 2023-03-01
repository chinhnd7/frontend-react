/* OPTINAL AND NON NULL*/

// khai báo hàm có thể có 1 tham số, dùng ?
const add = (a: number, b?: number) => b ? a + b : a

console.log(add(1, 2))
console.log(add(4))

// dùng dấu ! để khai báo chắc chắn sẽ có truyền tham số b vào :))
const addNonNull = (a: number, b?: number) => a + b!

console.log(addNonNull(3, 4))

console.log(addNonNull(3))


