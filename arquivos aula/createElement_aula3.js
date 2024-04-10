document.getElementById("salvar").addEventListener (
"click", function ()
{
  var input = document.querySelector("#nome");
  nomesInner.push(input.value);
  var paragrafo = document.querySelectorAll(".paragrafo")[0];
  renderListaPorInnerHtml(nomesInner, paragrafo);
}
);

document.getElementById("salvarProduto").addEventListener (
  "click", function ()
  {
    var input = document.querySelector("#produto");
    produtos.push(input.value);
    var paragrafo = document.querySelectorAll(".paragrafo")[1];
    renderListaPorInnerHtml(produtos, paragrafo);
  }
);

var nomesInner = [];
var produtos = [];
var elemento = document.querySelector(".paragrafo");

renderListaPorInnerHtml(nomesInner, elemento);

function renderListaPorInnerHtml (nomesInner, elemento)
{
  elemento.innerHTML =`<ul> `

  for (var i=0; i<nomesInner.length;i++)
  {
    elemento.innerHTML += 
    `<li class="tipo-pessoa"> ${nomesInner[i]} </li>`
  }
  elemento.innerHTML +=`</ul> `;
};
