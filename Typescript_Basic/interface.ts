interface Person {
    name: string
    age: number
    speak(lang: string): void
    spend(amount: number): number
}

const jun: Person = {
    name: 'henry',
    age: 30,
    speak(lang: string): void {
        console.log(lang)
    },
    spend(amt: number) {
        return amt
    }
}

console.log(`Jun spends ${jun.spend(5000000)} VND`)