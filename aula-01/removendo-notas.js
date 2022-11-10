const notas = [10, 6, 8, 5.5, 10]

notas.pop()
let media = 0;
for(let i in notas) {
    media += notas[i]
}

console.log(notas)
console.log(media = media / notas.length)