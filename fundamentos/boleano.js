let isative= true
console.log(isative)

isative=false
console.log(isative)

console.log ("formas para retonar o verdadeiro...")
console.log(!!1)
console.log(!!3)
console.log(!!{})
console.log(!![])
console.log(!!' ')
console.log(!!Infinity)
console.log(!!'texto')
console.log(!!(isative = true))

console.log("formas para retonar falso...")
console.log(!!"")
console.log(!!0)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!null)
console.log(!!(isative=false))

console.log("para finalizar...")
console.log(""||null||1||undefined)
console.log(!!(null||" "||undefined||0))

console.log("aplicação")

let nome= ""

console.log(nome||"desconhecido")
