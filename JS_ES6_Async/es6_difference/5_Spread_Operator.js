const buaAn = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    buaToi: 'com'
}

const buaAn1 = { ...buaAn, buaChieu: 'che' }
const buaAn2 = { ...buaAn1, buaToi: 'nhin doi giam can' }

console.log(buaAn2)

const tapHopSo = [1, 2, 3]

const tapHopSo1 = [4, 5, 6, ...tapHopSo]
console.log(tapHopSo1)

sinhvien = { ten: 'Jun', nam: '1' }
sinhVienSapTN = { ...sinhvien, nam: 4, sapTotNghiep: true }
console.log(sinhVienSapTN)

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
console.log(obj[0]) // 1


const myFunction = (v, w, x, y, z) => x + y + z + v + w
const args = [0, 1];
// Nối 1 mảng với 1 mảng khác + thêm phần tử
console.log(myFunction(-1, ...args, ...[2, 3]));

const user = {
    name: 'Alex',
    address: '15th Park Avenue',
    age: 43
}

const { age, ...rest } = user;
console.log(age, rest);