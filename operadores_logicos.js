const notaFinal = 7;
const faltas = 3;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
    console.log('reprovado');
} else {
    console.log('não foi reprovado por falta');
}

if (faltas >= 2 && !advertencias) {
    console.log('recebeu bonus');
} else {
    console.log('nao recebeu bonus');
}
