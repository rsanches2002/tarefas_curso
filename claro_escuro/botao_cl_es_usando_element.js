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
    }
];

function renderEmailsElementos (emails)
{
    var containerEmail = document.querySelector("container-geral");
    var elementoUL = document.createElement("ul");
    elementoUL.setAttribute("class", "container-geral");
    
    var listaDeEmailsLI = [];
    for (var i = 0; i < emails.length; i++) 
    {
        listaDeEmailsLI[i] = document.createElement("li");
        listaDeEmailsLI[i].setAttribute("class", "container-email");

        var tituloElement = document.createElement("div")
        tituloElement.textContent = "Título: " + emails[i].titulo;
        tituloElement.setAttribute("class", "container-titulo");
        listaDeEmailsLI[i].appendChild(tituloElement);

        var corpo = document.createElement("div")
        corpo.textContent = "| Assunto: " + emails[i].corpo;
        corpo.setAttribute("class", "container-corpo");
        listaDeEmailsLI[i].appendChild(corpo);

        var horario = document.createElement("div")
        horario.textContent = emails[i].horario;
        horario.setAttribute("class", "container-hora");
        listaDeEmailsLI[i].appendChild(horario);
    
        var remetente = document.createElement("div")
        remetente.textContent = emails[i].remetente;
        remetente.setAttribute("class", "container-remetente");
        listaDeEmailsLI[i].appendChild(remetente);

        //listaDeEmailsLI[i].classList.add("arredondado");
        //listaDeEmailsLI[i].style.backgroundColor = "black";

        elementoUL.appendChild(listaDeEmailsLI[i]);
    }

    containerEmail.appendChild(elementoUL);
};

renderEmailsElementos (emails);

var botao = document.querySelector(".alterar");

function mudarClaroEscuro_email (botao, emails)
{
    botao.addEventListener("click", function ()
    {
        var tituloElement = document.querySelector(".container-titulo");

        if (botao.value == "Modo escuro")
        {
            for (var i = 0; i < emails.length; i++) 
            {
                tituloElement.setAttribute("class", "container-titulo");
                tituloElement.textContent = "Título: " + emails[i].titulo;
            }

            botao.value = 'Modo claro';
            botao.innerHTML = 'Modo claro'
        }

        else
        {
            for (var i = 0; i < emails.length; i++) 
            {
                tituloElement.setAttribute("class", "container-titulo claro");
                tituloElement.textContent = "Título: " + emails[i].titulo;
            }
            

            botao.value = 'Modo escuro';
            botao.innerHTML = 'Modo escuro'
        }
    })
};

mudarClaroEscuro_email(botao, emails);