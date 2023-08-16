// função em js é first-class object (citizens)
//higher-order fuction pode ser tratada como um dado.

//criar função de forma literal

function fun1(){ 
}

//armazer uma função em uma variavel

const fun2= function (){}

// armazenar em um array

const array= [function(a,b){return a+b},fun1,fun2]

console.log(array[0](2,3))

// armazenar em um atributo de objeto

const obj={}
obj.falar= function(){return 'olá'}
console.log(obj.falar())

//passar função como parametro

function run(fun){
    fun()
}
run(function(){console.log('executando...')})


