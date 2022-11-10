const notas = [10, 6.5, 8, 7.5]
var media = 0

// for(var i = 0; i < notas.length; i++){
//     console.log(notas[i])
// }

// for(var i in notas) {
//     console.log(media += notas[i])
// }

notas.forEach(n => {
    media += n
})

media = media / notas.length
console.log("Média: "+media)