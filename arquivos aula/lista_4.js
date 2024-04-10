let emails = 
[
    {
        nome:"Ana",
        remetente: "ana@email.com",
        titulo: "Agenda da reunião semana que vem",
        corpo: "Na ocasião vamos tratar dos principais temas...",
        horario: "4:20"
    },
    {
        nome: "Carlos",
        remetente: "carlos@email.com",
        titulo: "Confraternizacao de fim de ano - preparativos",
        corpo: "Anexa a lista com o orçamentos do buffet...",
        horario: "6:66"
    },
    {
        nome: "Rafael",
        remetente: "rafael@email.com",
        titulo: "Viagem para congresso...",
        corpo: "Lista de hoteis disponíveis...",
        horario: "8:55"
    },
];

//renderEmailsV1 (emails);

function renderEmailsV1 (emails)
{
    var div = document.querySelector(".div-entrada");
    var elementoUL = document.createElement("ul");
    
    var listaDeEmailsLI = [];
    for (var i = 0; i < emails.length; i++) 
    {
        listaDeEmailsLI[i] = document.createElement("li");
        listaDeEmailsLI[i].setAttribute("class", "email");

        var tituloElement = document.createElement("div")
        tituloElement.textContent = "Título: " + emails[i].titulo;
        listaDeEmailsLI[i].appendChild(tituloElement);

        var corpo = document.createElement("div")
        corpo.textContent = emails[i].corpo;
        listaDeEmailsLI[i].appendChild(corpo);

        var horario = document.createElement("div")
        horario.textContent = emails[i].horario;
        listaDeEmailsLI[i].appendChild(horario);
    
        var remetente = document.createElement("div")
        remetente.textContent = emails[i].remetente;
        listaDeEmailsLI[i].appendChild(remetente);

        listaDeEmailsLI[i].classList.add("arredondado");
        listaDeEmailsLI[i].style.backgroundColor = "black";

        elementoUL.appendChild(listaDeEmailsLI[i]);
    }

    div.appendChild(elementoUL);
}

renderEmailsV2 (emails);
//criar parametro extra
function renderEmailsV2 (emails)
{
    var div = document.querySelector(".div-entrada");
    var divRemetente = document.querySelector(".div-entrada");

        div.innerHTML =`<div>`
        for (var i=0; i<emails.length;i++)
        {
          div.innerHTML += `
          <div class="container-email">
            <div class="container-titulo"> 
                ${emails[i].titulo}
            </div>
            <div class="container-corpo"> 
                | ${emails[i].corpo}
            </div>
            <div class="container-hora"> 
                | ${emails[i].horario}
            </div>
          </div>
          `;
          divRemetente.innerHTML += `
          <div id="remetente"> 
            <div class="container-remetente"> 
                ${emails[i].remetente} 
            </div>
          </div>`;
        }
        div.classList.add("format-email");
        div.innerHTML +=`</div>`;
};

function changeMode ()
{
    //chamar funcao render
    //escolher um como padrão - claro ou escuro
}

var elementoQuadrado = document.querySelector(".quadrado.amarelo");
var elementoCirculo = document.querySelector(".circulo.amarelo");

apagarAcender_usando_elemento_usando_toggle (elementoQuadrado);
apagarAcender_usando_elemento_usando_toggle (elementoCirculo);

function apagarAcender_usando_classe (forma)
{
    var elementoApagarAcender = document.querySelector(`.${forma}.amarelo`);
    elementoApagarAcender.addEventListener("click", function ()
    {
        if (elementoApagarAcender.classList == `${forma} amarelo`)
        {
            elementoApagarAcender.classList.remove("amarelo");
        }
        else if (elementoApagarAcender.classList == `${forma}`)
        {
            elementoApagarAcender.classList.add("amarelo");
        }
    })
};

function apagarAcender_usando_elemento (elementoForma)
{
    elementoForma.addEventListener("click", function ()
    {
        if (elementoForma.classList.contains("amarelo"))
        {
            elementoForma.classList.remove("amarelo");
        }
        else
        {
            elementoForma.classList.add("amarelo");
        }
    })
};

function apagarAcender_usando_elemento_usando_toggle (elementoForma)
{
    elementoForma.addEventListener("click", function ()
    {
        elementoForma.classList.toggle("amarelo")
    })
};

/*
//inserir esse codigo em uma funcao
var btn = document.getElementById('alterar');
var element = document.querySelector(".claro.escuro");
btn.onclick = function(){
    if(btn.value === "Modo escuro")
    {
        element.classList = "escuro";
        btn.value = 'Modo claro';
        btn.innerHTML = 'Modo claro'
    }
    else
    {
        element.classList = "claro";
        btn.value = 'Modo escuro';
        btn.innerHTML = 'Modo escuro'
    }
}
*/