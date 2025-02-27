
const estudante = {
    nome: 'Matheus Rodrigues',
    idade: 27,
    cpf: '1234567891011',
    turma: 'JavaScript'
};

console.log(estudante.nome);
console.log(`o nome de estudante é ${estudante.nome}`);
console.log(`os três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}`);