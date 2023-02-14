const buaAn = {
    buaSang: 'Xoi',
    buaTrua: 'Pho',
    buaToi: 'Com',
}

const traiCay = ['cam', 'quyt', 'mit']

/* template literals
console.log(`Sang nay an mon: ${buaAn.buaSang}`)
console.log(`Qua so 0 la ${traiCay[0]}`)
*/

// destructure
const { buaSang, buaTrua, buaToi } = buaAn
console.log(`Sang nay toi an ${buaSang}`)

const [cam, quyt, mit] = traiCay
console.log(`Qua so 0 la: ${cam}`)

const sinhVien = {
    ten: 'Jun',
    tuoi: '18'
}

const { ten, tuoi } = sinhVien
console.log(`Toi la ${ten} - ${tuoi} tuoi`)