const printResult = function (grade) {
    switch (Math.floor(grade)) {
        case 10:
        case 9:
            console.log('Quadro de Honra!');
            break;
        case 8:
        case 7:
            console.log('Aprovado');
            break;
        case 6:
        case 5:
        case 4:
            console.log('Recuperação'); 3
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota  inválida!');
    }
}
printResult(10);
printResult(8.9);
printResult(6);
printResult(3);
printResult(-1);