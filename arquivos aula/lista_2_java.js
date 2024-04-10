//num 4
/*
console.log("Entre com o valor 1: ");
var valor1 = prompt ();
console.log("Entre com o valor 2: ");
var valor2 = prompt ();

var soma = parseInt(valor1) + parseInt(valor2);

do
{
    console.log("Entre com mais um valor: ");
    var valor3 = prompt ();
    soma = parseInt(soma) + parseInt(valor3);
}while (soma <= 100)

console.log("A Soma final é =  " + soma);
*/

//num 5
/*
console.log("Entre com um valor entre 1 e 10: ");
var valor = prompt ();

console.log("Tabuada de " + valor + " é:");

for (var i=1; i<11; i++)
{
    console.log("--> " + valor + " x = " + i + "= " + (valor * i))
}
*/

//num 6
/*
console.log("Entre com um valor entre 1 e 10: ");
var valor = prompt ();

console.log("Tabuada de " + valor + " é:");
var multi = 0;

while (multi < 11)
{
    multi++;
    console.log("--> " + valor + " x = " + multi + "= " + (valor * multi))
}
*/

//num 8
/*
console.log("Entre com um valor entre 1 e 100: ");
var valor = prompt ();

while (valor < 1 || valor > 100)
{
    console.log("Valor fora dos limites. Entre com um novo valor: ");
    var valor = prompt ();
}

console.log("O valor digitado foi: " + valor);
*/

//num 9
/*
console.log("Quantos caracteres serão inseridos?: ");
var n = prompt();
var lista = [];

for (var i=0; i<n; i++)
{
    console.log("Insira o caracter: ");
    lista.push(prompt());
}

console.log("A sequência inserida foi: ");
console.log(lista);

for (var i=0; i<n; i++)
{
    if (lista[i] == "a")
    {
        lista[i] = "@";
    }
    else if (lista[i] == "e")
    {
        lista[i] = "&";
    }
    else if (lista[i] == "i")
    {
        lista[i] = "1";
    }
    else if (lista[i] == "o")
    {
        lista[i] = "0";
    }
    else
    {
        lista[i] = "+";
    }
}

console.log("A sequência alterada é: ");
console.log(lista);
*/

//num 10
/*
console.log("Entre com três palavras distintas: ");

var somarPares = 0;
var somarImpares = 0;

for (var i=0; i<3; i++)
{
    console.log("Entre com a palavra de nº: " + i);
    var n = prompt();
    var x = n.length;
    console.log(x);
    if (n.length%2==0)
    {
        somarPares = somarPares + n.length;
    }
    else
    {
        somarImpares = somarImpares + n.length;
    }
}

console.log("A soma dos caracteres das palavras pares é: " + somarPares);
console.log("A soma dos caracteres das palavras impares é: " + somarImpares);


//num 11

console.log("Entre com a palavra: ");
var palavra = prompt();
var frase = [];

for (var i=0; i<3; i++)
{
    console.log("Formule uma frase para a palavra de nº: " + i);
    frase[i] = prompt();
    while (frase[i].length <= 10)
    {
        console.log("Sua frase é muito pequena. Tente uma frase maior.");
        console.log("Formule uma nova frase:");
        var frase = prompt();
    }
    console.log("A frase de nº: " + i + " é: ");
    console.log(frase[i]);
}

console.log(frase);
*/

//criando objeto
let aluno = {
    nome: "Ana",
    idade: 19,
    disciplinas: [{nome: "js", ch: 10}, {nome: "js", ch: 10}, {nome: "js", ch: 10}]
};

console.log(aluno);

aluno.disciplinas[1].ch = 30;
console.log(aluno.disciplinas[1].ch);


