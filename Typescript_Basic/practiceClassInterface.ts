import { hasPrint } from './interfaceForClass'
import { Invoice, Payment } from './classImplementsInterface'

const documentOne: hasPrint = new Invoice('Vinamilk', 'Holand Milk', 5000)
const documentTwo: hasPrint = new Payment('Vietnam Airline', 'fly', 2500)

const allDocument: hasPrint[] = []
allDocument.push(documentOne)
allDocument.push(documentTwo)

allDocument.map(doc => {
    console.log(doc.print())
})