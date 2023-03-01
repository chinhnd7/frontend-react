/* FUNCTION SIGNATURE */
/* Function signature là bạn chỉ khai báo function đó tên gì, nhận vào biến kiểu gì, trả về giá trị KIỂU gì.
Còn Function thì bạn hẳn hoi là bên trong {} của hàm đó bạn LÀM cái gì,
sao cho nó trả về giá trị đúng cái KIỂU bạn khai báo bên trên trong Function Signature.
*/
// => ít khi dùng, thường hay dùng trong những file .d.ts để cung cấp type

// let greet: Function // chu ki
// greet = () => console.log('hello') // that su khoi tao

// -----------------------------------------------------------------------

let greet: (a: string, b: string) => void // chu ki
greet = (name: string, greeting: string) =>
    console.log(`${name} says ${greeting}`)
// khoi tao

greet('Jun', 'hello')

// -----------------------------------------------------------------------

let calculate: (a: number, b: number, c: string) => number
calculate = (numOne: number, numTwo: number, action: string) =>
    action === 'add' ? numOne + numTwo : numOne - numTwo
console.log(calculate(5, 4, 'add'))

// -----------------------------------------------------------------------

type Student = {
    name: string,
    age: number
}

let printStudent: (student: Student) => void
printStudent = ({ name, age }) => {
    console.log(`${name} is ${age}`)
}

printStudent({ name: 'jun', age: 26 })

let zet = {
    name: 'Zet',
    age: 25
}

printStudent(zet)