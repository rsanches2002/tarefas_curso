
//generalizar o codigo interno do metodo;
//parametrizar a lista de dados;

document.getElementById("salvar").addEventListener (
"click", function ()
{
  var input = document.querySelector("#nome");
  nomes.push(input.value);
  var paragrafo = document.querySelectorAll(".paragrafo")[0];
  renderListaNomes(nomes, paragrafo);
}
); 

document.getElementById("salvarProduto").addEventListener (
  "click", function ()
  {
    var input = document.querySelector("#produto");
    produtos.push(input.value);
    var paragrafo = document.querySelectorAll(".paragrafo")[1];
    renderListaNomes(produtos, paragrafo);
  }
);

var produtos = [];
var nomes = [];

function renderListaNomes (nomes, elemento)
{
  var lista = document.createElement("ul");

  var itens = [];

  for (var i=0; i<nomes.length; i++)
  {
    itens[i] = document.createElement("li");
    itens[i].setAttribute("class", "tipo-pessoa");
    itens[i].textContent = nomes[i];
    lista.appendChild(itens[i]);
  }
  var titulo = elemento.firstChild;
  elemento.innerHTML = "";
  elemento.appendChild(titulo);
  console.log(elemento);
  elemento.appendChild(lista);
}

//parametrizar dados
//parametrizar elemento a ser renderizado

var nomesInner = ["chico", "diogo"];

//renderListaPorInnerHtml(nomesInner);

function renderListaPorInnerHtml (nomesInner)
{
  var paragrafo = document.querySelector(".paragrafo");

  paragrafo.innerHTML =`<ul> `

  for (var i=0; i<nomesInner.length;i++)
  {
    paragrafo.innerHTML += 
    `<li class="tipo-pessoa"> ${nomesInner[i]} </li>`
  }
  paragrafo.innerHTML +=`</ul> `;
};
