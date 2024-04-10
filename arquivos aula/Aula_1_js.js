/*
console.log("hello");

var nome = "Ana";
var cpf = "00055566632";
var escola = "estadual";

var textofinal = `Eu ${nome} do cpf ${cpf} declaro para a escola ${escola} ...`;

console.log(textofinal);

//criar metodos com letra minuscula

var fruta = prompt ()

console.log(fruta);

var a = 10;

if(a > 10)
{
    console.log("maior");
}
else if(a < 10)
{
    console.log("menor");
}
else
{
    console.log("teste");
}

a = 1;

switch(a)
{
    case 1:
        console.log('correto');
        break;
    case 2:
        console.log("teste");
        break;
    default:
        break;
}

for(var i = 0; i<2; i++)
{
    console.log(i)
}


var i = 5
while(i > 0)
{
    console.log(i)
    i--;
}

//console.log('10' === 10);

*/
/*
var array1 = new Array();
var array1 = [];

array1.push(1);
array1.push(true);
array1.push("true");
array1.push("a");

array1.slice(1);

console.log(array1);
*/

console.log(soma(1,1,1));

function soma (x, y, z)
{
    return x + y + z;
}

var array1 = [1, 2, 3];

array1.forEach(function(item)
{
    console.log(item)
})

for (var item of array1)
{
    console.log(item)
}

let livro = []; //objeto vazio

let livro2 = {
    nome: "a arvore que dava dinheiro",
    preco: 50,
    figuras: ["fig1", "fig2", "fig3"]
};

let livro3 = {
    nome: "a arvore que dava dinheiro"
};

let livros = [];
livros.push(livro, livro2);

for(let i = 0; i<livros.length; i++)
{
    console.log(livros);
}

let arr = [1,5,20,3];

arr.splice(1,1);

console.log(arr)

let arr2 = [1,5,20,3];

arr2.pop();

console.log(arr2)