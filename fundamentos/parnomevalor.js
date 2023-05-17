//Pode se declarar variaveis com o msm nome e ter dois valores diferentes pra elas se estiverem em escopos diferentes.

const saudacao = "olá"

function exe(){
    const saudacao= "falaa!"
    return saudacao
}

const cliente= {
    nome: "victor",
    idade: 20,
    peso: 140,
    endereço: {
        logradouro: "Rua belém de maria",
        número: 49
    }
}

console.log(saudacao)
console.log(exe())
console.log(cliente)