const notas = [10, 6, 8]

notas.push(7)
let media = 0;
for(let i in notas) {
    media += notas[i]
}

console.log(media = media / notas.length)