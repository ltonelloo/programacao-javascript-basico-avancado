var cursos = [
    'Programação para Leigos',
    'Algoritimos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Phyton',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
];

// console.log(cursos);
// console.log(cursos.length);

// Definir uma função.
// function imprimir(item, indice, array) {
//     console.log(indice + ' - ' + item);
//     console.log(array);
// }

// cursos.forEach(imprimir);

cursos.forEach(function (curso, indice) {
    console.log(`${indice} - ${curso}`);
});

for (let i = 0; cursos.length; i++) {
    console.log(i + -+cursos[i]);
}
