const estudante = {
    nome: 'Matheus Rodrigues',
    idade: 27,
    cpf: '1234567891011',
    turma: 'JavaScript'
};

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));