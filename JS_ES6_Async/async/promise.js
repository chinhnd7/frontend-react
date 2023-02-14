// Xin so dt
// const xinSoDt = () => {
//     console.log('Goi dien cho thang ban, cho tao xin so thang Nam.')
//     console.log('Dang tim...')

//     const thaoTacTimKiem = new Promise((resolve, reject) => {
//         let daTimThay

//         setTimeout(() => {
//             daTimThay = true

//             if (daTimThay) {
//                 soDt = 123456
//                 console.log(`Day roi. So cua no la ${soDt}`)
//                 resolve(soDt)
//             } else {
//                 reject('Tao k co so thang Nam')
//             }
//         }, 1000)
//     })
//     return thaoTacTimKiem
// }

// xinSoDt()
//     .then(soDt => {
//         console.log(`Da xin duoc so thang Nam: ${soDt}`)
//     })
//     .catch(err => console.log(err))

// xin so dt xong roi sac pin.
const xinSoDt = () => {
    console.log('Goi dien cho thang ban, cho tao xin so thang Nam.')
    console.log('Dang tim...')

    const thaoTacTimKiem = new Promise((resolve, reject) => {
        let daTimThay

        setTimeout(() => {
            daTimThay = true

            if (daTimThay) {
                soDt = 123456
                console.log(`Day roi. So cua no la ${soDt}`)
                resolve(soDt)
            } else {
                reject('Tao k co so thang Nam')
            }
        }, 1000)
    })
    return thaoTacTimKiem
}

const sacPin = soDt => {
    console.log('Doi ti sac pin da.')
    let chayPin

    const thaoTacSacPin = new Promise((resolve, reject) => {
        setTimeout(() => {
            chayPin = false

            if (!chayPin) {
                console.log('Sac pin day. Bat dau goi cho Nam')
                resolve(soDt)
            } else {
                reject('Chay pin roi k goi duoc')
            }
        }, 1500)
    })
    return thaoTacSacPin
}

// Goi cho Nam
const goiChoNam = soDt =>
    console.log(`Dang noi chuyen voi Nam tai so: ${soDt}`)

// Thuc hien toan bo thao tac
xinSoDt()
    .then(soDt => {
        sacPin(soDt)
            .then((soDt) => goiChoNam(soDt))
            .catch((err) => console.log(err))
    })
    .catch(err => console.log(err))

