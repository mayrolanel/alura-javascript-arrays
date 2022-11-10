const numeros = [100, 200, 300, 400, 500, 600];

console.log('Loop crecente')
for(let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice])
}

console.log('Loop descrecente')
for(let indice = numeros.length -1 ; indice >= 0; indice--) {
    console.log(numeros[indice])
}