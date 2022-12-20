/*
Array contendo 5 elementos. -> n = 5

ÍNDICE -> Posição do elemento no array.
[0][1][2][3][4]

VALORES de um array ->
[12]['Geek'][true][48][52]

Detalhes sobre arrays
- Possuem tamanho infinito.*
- Podemos colocar qualquer tipo de dado.
*/

// FORMA 1
var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
//var alunos = ['Cristina','Ricardo','Lucas','Maria','Sofia'];
console.log(alunos);

// FORMA 2
var notas = [1, 3, 5, 7, 9];
console.log(notas);

// Criar array vazio.
var dados = [];
console.log(dados);

// Acessando o valor de um índice.
console.log(notas[2]);

// Alterando o valor a partir do índice.
notas[2] = 12;
console.log(notas);

// Atenção ao acessar um valor com um índice que não existe.
notas[9] = 10;
console.log(notas);

if (notas[5] == undefined) {
    notas[5] = 54;
}

console.log(notas[5]); // 54
console.log(notas[6]); // undefined
console.log(notas[7]); // undefined
console.log(notas[8]); // undefined
console.log(notas[9]); // 10

console.log(notas[5] == undefined); // false

// INSERINDO elementos no FINAL do array.
console.log(alunos);

alunos.push('Paula'); // Insere o valor ao final do array.
console.log(alunos);

// REMOVENDO elemntos no FINAL do array.
alunos.pop();
console.log(alunos);

var ret = alunos.pop(); // Remove e retorna o último item do array.
console.log(alunos);
console.log(ret);

// Tamanho do array.
console.log(alunos.length); // 6

var tam = alunos.length;
console.log(tam); // 6

// Ordenar os dados de um array.
console.log(alunos);
alunos.sort();
console.log(alunos);

var precos = [12.43, 43.67, 12.65, 9, 10, 55, 23]; // ATENÇÃO -> Ordenação de FLOATS e NUMBERS não funciona com .sort().
console.log(precos);
precos.sort();
console.log(precos);

// Método correto para ordenação de numbers.
precos.sort(function (a, b) {
    return a - b;
});

console.log(precos);

// Deletando dados de um array.
delete precos[3];
console.log(precos);

precos[3] = 12;
console.log(precos);

precos.splice(3, 1); // A partir do índice 3, delete 1 elemento.
console.log(precos);

precos.splice(3, 0, 56, 89); // A partir do índice 3 delete 0 itens e adicione os itens 56 e 89.
console.log(precos);

precos.splice(3, 1, 23); // A partir do índice 3, delete 1 e adicione 23.
// precos[3] = 23;
console.log(precos);

// ITERAR um array.
for (var i = 0; i < precos.length; i++) {
    console.log(precos[i]);
}
