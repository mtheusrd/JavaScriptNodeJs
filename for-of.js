const notas = [10, 6, 8, 7];

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);