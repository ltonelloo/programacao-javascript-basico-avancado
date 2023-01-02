var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Original: ' + numeros);

function filtrar_pares(n) {
    return n % 2 == 0;
}

function filtrar_impares(n) {
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n) {
    return n % 5 == 0;
}

var ret = numeros.filter(filtrar_pares);
console.log(ret);

var ret = numeros.filter(filtrar_impares);
console.log(ret);

var ret = numeros.filter(filtrar_multiplos_5);
console.log(ret);

var alunos = [
    { nome: 'Pedro', nota: 8.5 },
    { nome: 'Ana', nota: 10 },
    { nome: 'João', nota: 9.2 },
    { nome: 'Ricardo', nota: 7.3 }
];
console.log(alunos);

function filtrar_notas_maiores_que_8(aluno) {
    return aluno.nota > 8;
}

var ret = alunos.filter(filtrar_notas_maiores_que_8);
console.log(ret);
