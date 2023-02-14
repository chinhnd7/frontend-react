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

const sacPin = () => {
    console.log('Doi ti sac pin da.')
    let chayPin

    const thaoTacSacPin = new Promise((resolve, reject) => {
        setTimeout(() => {
            chayPin = false

            if (!chayPin) {
                console.log('Sac pin day. Bat dau goi cho Nam')
                resolve()
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


// Hanh dong
const hanhDong = async () => {
    try {
        const soDt = await xinSoDt()
        await sacPin()
        goiChoNam(soDt)
    } catch (error) {
        console.log(error)
    }
}

hanhDong()