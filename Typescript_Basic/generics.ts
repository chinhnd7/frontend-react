// GENERICS
// khác với any, generic type là cách đặt tên trước cho 1 loại type chưa biết trước

type stringArr = Array<string>
type numArr = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1]

const l1 = last([1, 2, 3, 4])
console.log(l1)

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]

const makeArr = (x: number) => [x]

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y]
const m = makeArrXY(5, 6)
const m1 = makeArrXY(true, 'asd')

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y]
const m2 = makeTuple('a', 5)
const detail = makeTuple<string, number>('g', 23)
const d2 = makeTuple<string | null, number>(null, 3)

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y]
const mT = makeTupleWithDefault<string | null>('a', 5)

// GENERICS EXTENDS

const makeFullNameConstraint = (obj: {
    firstname: string
    lastname: string
}) => ({
    ...obj,
    fullName: `${obj.firstname} ${obj.lastname}`
})

const n1 = makeFullNameConstraint({ firstname: 'jun', lastname: 'nguyen' })

// T bat buoc co firstname va lastname nhung van co the co them cac thuoc tinh khac
const makeFullNameConstraintWithGenerics = <
    T extends { firstname: string, lastname: string }
>(obj: T) => ({
    ...obj,
    fullName: `${obj.firstname} ${obj.lastname}`
})

const junInfor = makeFullNameConstraintWithGenerics({ firstname: 'jun', lastname: 'nguyen', age: 26, male: true })

console.log(junInfor)
/* => result: {
  firstname: 'jun',
  lastname: 'nguyen',
  age: 26,
  male: true,
  fullName: 'jun nguyen'
}
*/

const addNewEmployee = (employee: object) => {
    const uid = Math.floor(Math.random())
    return {
        ...employee,
        uid
    }
}

const empOne = addNewEmployee({ name: 'henry', age: 30 })

// khi này empOne có giá trị { name: 'henry', age: 30, uid: 0 }
// tuy nhiên không thể gọi được name, property 'name' does not exist
// const nameOfEmpOne = empOne.name
// Vì object truyền vào không biết là có những cái,
// nên hàm addNewEmployee mặc dù trả đủ data nhưng khi trỏ vào ta chỉ thấy giá trị trả về
// là 1 object có duy nhất property uid: number

// => dùng generic
const addNewEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const empTwo = addNewEmployeeT({ name: 'khanh linh', age: 30, male: true })
console.log(empTwo.name)

const addNewEmployeeTWithContraint = <T extends { name: string }>(
    employee: T
) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

// const empThree = addNewEmployeeTWithContraint({ age: 30, male: true })
// khong co name bao loi

// GENERICS in INTERFACE

interface Resource<T> {
    uid: number,
    name: string,
    data: T
}

type NumberResource = Resource<number[]>

const numberResources: NumberResource = {
    uid: 123,
    name: 'Numbers',
    data: [1, 2, 3]
}

const resourceOne: Resource<string> = {
    uid: 1,
    name: 'Person',
    data: 'hello'
}

const resourceTwo: Resource<object> = {
    uid: 2,
    name: 'Movie',
    data: { name: 'Avenger', country: 'Japan' }
}