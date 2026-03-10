let andre = {
    name: "André Esteves",
    age: 27,
    gender: "M",
}

let str = JSON.stringify(andre) // e bom para IPA, mas nao e bom para leitura humana

console.log(str)
console.log(andre)

let newstr = '{"name":"João Augusto","age":22,"gender":"M"}' // e bom para leitura humana, mas nao e bom para IPA

let joao = JSON.parse(newstr)

console.log(newstr)
console.log(joao)