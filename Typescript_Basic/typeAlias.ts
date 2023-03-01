/* Type Alias */
// Tạo 1 type mới từ những type có sẵn
type StringOrNumber = string | number
type Student = {
    name: string
    id: StringOrNumber
}

const studentDetail = (id: StringOrNumber, studentName: string): void => {
    console.log(`Student ${studentName} has id: ${id}`)
}
studentDetail(123, 'hendry')

const student1 = {
    name: 'Jun',
    id: '456'
}
const greet = (user: Student): void => {
    console.log(`Student ${user.name} with id: ${user.id} says hello`)
}

greet(student1)