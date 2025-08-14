
line = "teste de uma frase"
word = "palavra"

console.log("linha: " + line)
console.log("palavra: " + word)

console.log (line.trimStart()[0]) //remove espaco em branco do inicio
console.log(word[0].toUpperCase() + word.slice(1).toLowerCase())

const trimmed = line.trim();
console.log(trimmed[trimmed.length - 1])

const formatted = word[0].toUpperCase() + word.slice(1).toLowerCase();
console.log(`${formatted}, please`)

console.log(word + ", please")
console.log(`${word}, please`) //template literals
