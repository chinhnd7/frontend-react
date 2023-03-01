/* CLASS */

class Employee {
    // public name: string
    // private age: number
    // readonly male: boolean

    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }

    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ) { }

    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
    }
}

const jun = new Employee('Jun', 30, true)
console.log(jun.name)
console.log(jun.male)

console.log(jun.print())