function somar (a, b){
    var A = a;
    var B = b;
    var soma = A + B;
    return soma;
}

var soma = somar (1, 3);

console.log(soma);

////////////////////////////

function somar2 (a, b){
    var A = a;
    var B = b;
    var soma2 = A + B;
    console.log(soma2);
}

somar2 (2, 3);

////////////////////////////

function somar3 (a, b){
    var A = a;
    var B = b;
    var soma = A + B;
    console.log(soma);
    return soma;
}

somar3 (2, 3);

//-------------------------------

var funcaoQsoma = function (a, b){
    return a + b;
}

var funcaoQsubtrai = function (c, d){
    return c - d;
}

var funcaoQmultiplica = function (e, f){
    return e * f;
}

//console.log(funcaoQsoma (5, 6));

dobrarCalculoEimprimir (function (a, b){
    return a + b;
}, 10, 11);

//sem usar variável/callbacks

dobrarCalculoEimprimir (funcaoQsubtrai, 10, 11);
dobrarCalculoEimprimir (funcaoQmultiplica, 10, 11);

///////////////////////////

function dobrarCalculoEimprimir (funcaoCalculo, a, b){
    let valorSomado = funcaoCalculo(a, b);
    console.log(2*valorSomado);
}