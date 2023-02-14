const computedPropertyName = 'buaToi'

const buaAn = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    [computedPropertyName]: 'henxui'
}

const buaAnCuaJun = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    [computedPropertyName + 'CuaJun']: 'nhindoi'
}

const ten = 'Ten'

const me = {
    quocTich: 'VietNam',
    [`hoVa${ten}`]: 'Jun Nguyen'
}
console.log(me)

const myLove = {
    ...me,
    hoVaTen: 'Me Dont Know =))',
    tuoi: 26
}
console.log(myLove)