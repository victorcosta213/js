// Quando utilizamos o var, ocorre o hoisting, ou seja, a variavel é jogada pra cima mesmo sendo declarada depois o decodificador entende q ela existe. 
console.log(a)
var a= 10
console.log(a)

/*não ocorre com let
console.log(b)
let b=12
console.log(b)*/

//Na função ocorre a msm coisa
function teste(){
    console.log(c)
    var c = 22
    console.log(c)
}

teste()



