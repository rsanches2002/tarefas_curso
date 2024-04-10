//num 01
/*
console.log("Entre com 6 números distintos: ");
var valores = [];

for (var i=0; i<6; i++)
{
    console.log("Entre com o elemento de nº: " + (i + 1));
    valores[i] = prompt();
}

function q1 (valores)
{
    var somarPares = 0;
    var somarImpares = 0;
    var soma_elementos_Impares = 0;
    var soma_elementos_pares = 0;
    
    for (var i=0; i<valores.length; i++)
    {
        if (valores[i] % 2 == 0)
        {
            somarPares = parseInt(somarPares) + parseInt(valores[i]);
            soma_elementos_pares = parseInt(soma_elementos_pares) + parseInt(1);
        }
        else
        {
            somarImpares = parseInt(somarImpares) + parseInt(valores[i]);
            soma_elementos_Impares = parseInt(soma_elementos_Impares) + parseInt(1);
        }
        console.log("soma impares: " + somarImpares);
        console.log("soma pares: " + somarPares);
    }
    
    console.log("A quantidade de elementos pares é: " + soma_elementos_pares);
    console.log("A quantidade de elementos impares é: " + soma_elementos_Impares);
    console.log("A média dos elementos pares é: " + somarPares/soma_elementos_pares);
    console.log("A média dos elementos impares é: " + somarImpares/soma_elementos_Impares);
}

//q1(valores);
*/

//num 03
/*
var v1 = [];

console.log("Informe a qtidade de elementos do vetor V1: ");
elementos1 = prompt();

console.log("Entre com os elementos do vetor V1: ");
for (var i=0; i<elementos1; i++)
{
  v1[i] = prompt();
}

console.log(v1);

var v2 = [];

console.log("Informe a qtidade de elementos do vetor V2: ");
elementos2 = prompt();

console.log("Entre com os elementos do vetor V2: ");
for (var i=0; i<elementos2; i++)
{
  v2[i] = prompt();
}

console.log(v2);

var v4 = [];

for (var i=0; i<elementos1 - 1; i++)
{
  v4[i] = v1[i];
}

console.log(v4);

var v3 = [];

for (var i=0; i<v4.length; i++)
{
  v3[i] = v2[i+1];
}

console.log(v3);

var sub = v1[0] - v2[elementos2 - 1];

console.log(sub);
*/

//num 04
/*
var v1 = [];

console.log("Informe a qtidade de elementos do vetor V1: ");
elementos1 = prompt();

console.log("Entre com os elementos do vetor V1: ");
for (var i=0; i<elementos1; i++)
{
  v1[i] = prompt();
}

var v2 = [];

console.log("Informe a qtidade de elementos do vetor V2: ");
elementos2 = prompt();

console.log("Entre com os elementos do vetor V2: ");
for (var i=0; i<elementos2; i++)
{
  v2[i] = prompt();
}

var v3 = [];

console.log("Informe a qtidade de elementos do vetor V3: ");
elementos3 = prompt();

console.log("Entre com os elementos do vetor V3: ");
for (var i=0; i<elementos3; i++)
{
  v3[i] = prompt();
}

var R = [];

R.push(v1);
R.push(v2);
R.push(v3);

console.log("Os elementos do vetor V1 são:");
console.log(v1);
console.log("------------------------------");
console.log("Os elementos do vetor V2 são:");
console.log(v2);
console.log("------------------------------");
console.log("Os elementos do vetor V3 são:");
console.log(v3);
console.log("------------------------------");
console.log("Os elementos do vetor R são: ");

var c = [];

for (var i = 0; i < R.length; i++) 
{
  for (var j = 0; j < R[i].length; j++) 
  {
    debugger;
    console.log(R [i][j]);
  }
}
*/

//num 07 - NÃO CONSEGUI FAZER A DIVISÃO
/*
var arr1 = [10, 5, 2];

function q7(arr1) {
  var arr2 = [];
  var soma = 0;
  var sub = 0;
  var multi = 1;
  var div = 1;

  for (var i = 0; i < arr1.length; i++) {
    soma = arr1[i] + soma;
  }

  arr2.push(soma);

  for (var i = 0; i < arr1.length; i++) {
    sub = arr1[i] - sub;
  }

  arr2.push(sub);

  for (var i = 0; i < arr1.length; i++) {
    multi = arr1[i] * multi;
  }

  arr2.push(multi);

  for (var i = 0; i < arr1.length; i++) {
    div = arr1[i] / div;
  }

  arr2.push(div);

  return arr2;
}

console.log(q7(arr1));
*/

//num 09 - FINALIZADO
/*
var arrA = [];

console.log("Entre com o nº de elementos do conjunto A: ");

var elementos = prompt();
console.log(elementos);

console.log("Entre com os elementos do conjunto A: ");

for (var i=0; i<elementos; i++)
{
    arrA[i] = prompt();
    console.log(arrA[i]);
}

console.log("Entre com o valor V: ");

var v = prompt();

function q9 (arrA, v)
{
    var arrB = [];

    for (var i=0; i<arrA.length; i++)
    {
        if (arrA[i] == v)
        {
            arrB[i] = i;
        }
        else
        {
            arrB[i] = -1;
        }
    }
    
    return arrB;
}

console.log(arrA);
console.log(q9(arrA, v));
*/

//num 11 - FINALIZADO
/*
console.log("Entre com o valor de M: ");
    
var m = prompt();

console.log("Entre com o valor de N: ");

var n = prompt();

console.log("Entre com o valor de V: ");

var v = prompt();

function q11(m, n, v) 
{
    var arrA = [];
    var arrB = [];
    
    for (var i = 0; i < n; i++) {
      arrB.push(v);
    }
    
    for (var i = 0; i < m; i++) {
      arrA.push(arrB);
    }
    
    return arrA;
}

console.table(q11(m, n, v));
*/

const estrutura = 
[
    [
    "bcdc9e1b-1774-4278-ac98-00d14afda244", 
    [[100,"mg","magnésio","dimalato"],[2000,"ui","colecalciferol","Vit. D3"]],
    ["Dr.Angeline S. Orchid","Rafael Santos"],
    55.78,
    [60, "caps. vegetais"]
    ],

    [
    "ca885e3e-e26f-4071-95ec-6b0672170b4a", 
    [[1000,"mcg","cobre","quelato"],[15,"mg","zinco","quelato"],[150,"mg","ácid. ascórbico","Vit. C"],[80,"mcg","selênio","quelato"]],
    ["Dr.Angeline S. Orchid","Adriane de Oliveira"],
    135.22,
    [180, "caps. vegetais"]
    ],

    ["d91348e6-a475-41a6-8771-33e904b7b1c9", 
    null,
    130.00,
    [60, "caps. vegetais"]
    ],

    [],

    [
    "f8a2b8c1-a273-4477-a8e3-0fa08352535a", 
    [[100,"mcg","metilcobalamina","Vit. B12"], [4000,"ui","colecalciferol","Vit. D3"], [1000,"ui","acet. retinol","Vit. A"], [300,"mg","ácid. ascórbico","Vit. C"],[250,"mg","silício org.","exsynutriment"],[100,"mcg","selênio","quelato"]],
    ["Dr.Angeline S. Orchid","Rodrigo D. Kaito"],
    270.00,
    [160, "caps. vegetais"]
    ]				
]

console.log(estrutura);
