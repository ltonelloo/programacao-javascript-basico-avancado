var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

let sum = 0;
for (let i = 0; i < precos.length; i++) {
    sum += precos[i];
}
console.log(sum);

sum = 0;
precos.forEach(function (n) {
    sum += n;
});
console.log(sum);

function somar(anterior, atual) {
    return anterior + atual;
}

var ret = precos.reduce(somar);
console.log(ret);

/*
    Como funciona o reduce?
    [ 4.66, 3.78, 9.78, 1.34, 5.32 ]
    
    Primeira execução:
    
    - Pega os dois primeiros valores (índice O e índice 1), soma e retorna este valor;
    Nas demais execuções:
    
    - Pega o retorno da execução anterior e o próximo valor (índice 2...)
    
    1 = 4.66 + 3.78 -> 8.44
    2 = 8.44 + 9.78 -> 18.22
    3 = 18.22 + 1.34 -> 19.56
    4 = 19.56 + 5.32 -> 24.88
*/
// Executando map e reduce juntos.
function adicionar_taxa(valor) {
    return valor + 5;
}

ret = precos.map(adicionar_taxa).reduce(somar);
console.log(ret);

//Exemplo de filter/map/reduce.

function preco_maior_que_4(valor) {
    return valor > 4;
}

ret = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);
console.log(ret);
