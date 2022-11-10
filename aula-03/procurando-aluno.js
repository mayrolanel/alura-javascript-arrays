const lista_alunos = ["João", "Juliana", "Ana", "Caio"];
const lista_medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [lista_alunos, lista_medias]
const [alunos, medias] = listaAlunosMedias


function getAlunoWithName(aluno) {
    

    if(!alunos.includes(aluno)) {
        return `Atenção! ${aluno} não está cadastrado!`
    }

    return `Aluno ${aluno} cadastrado na posicao ${getPosicao(aluno)} \ncom a Média: ${getMediaAluno(getPosicao(aluno))}`
    
}

function getPosicao(aluno) {
    const indice = alunos.indexOf(aluno)

    return indice
}

function getMediaAluno(indice) {
    return medias[indice]
}

console.log(getAlunoWithName('Caio'))