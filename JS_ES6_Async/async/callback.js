// --- 1 callback function ---
// const xinSoDt = (hamGoiLai) => {
//     let soDt

//     console.log('Goi dien cho thang ban: Xin so thang Nam ho t')

//     console.log('Thang ban dang tim so thang Nam')

//     setTimeout(() => {
//         soDt = 123456
//         console.log('Da xin duoc so thang Nam')
//         hamGoiLai(soDt)
//     }, 1000)
// }

// const sauKhiNhanDuocSoDt = soDtDaNhan =>
//     console.log(`Day la so dt thang Nam: ${soDtDaNhan}`)

// xinSoDt(sauKhiNhanDuocSoDt)


// --- 2 callback functions ---
const xinSoDt = (hamGoiLaiSauKhiTimRa) => {
    let soDt

    console.log('Goi dien cho thang ban: Xin so thang Nam ho t')

    console.log('Thang ban dang tim so thang Nam')

    setTimeout(() => {
        soDt = 123456
        console.log('Da xin duoc so thang Nam')
        hamGoiLaiSauKhiTimRa(soDt, goiChoNam)
    }, 1000)
}

const sacPin = (soDt, hamGoiLaiSauKhiSacPin) => {
    console.log('Doi ti, sac pin da.')

    setTimeout(() => {
        console.log('Sac pin xong. Bat dau goi cho Nam')
        hamGoiLaiSauKhiSacPin(soDt)
    }, 2000)
}

const goiChoNam = soDt => console.log(`Dang noi chuyen voi Nam sau khi goi vao so ${soDt}`)

// Tien Hanh Toan Bo Qua Trinh
xinSoDt(sacPin)