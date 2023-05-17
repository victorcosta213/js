let valor
console.log(valor) //quando a variavel não iniciada, ela fica indefinida
//console.log(valor.preco)- erro!
valor=null
console.log(valor)

let produto={}
console.log(produto)
produto.preco= 3.5

console.log(produto.preco)
produto.preco= undefined //evitar o undefined
console.log(produto.preco)

console.log(!!produto.preco)



