function somador(a,b){
    console.log(a+b)
}

somador(3,7)
somador(2,4,6)
somador(1)
somador(2,-2)

function calculo(a,b=0){
    return (a+b)
}

console.log(calculo(2))
console.log(calculo(12,8))