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

function renderEmails (emails, modo)
{
    var containerEmail = document.querySelector(".container-geral");

    containerEmail.innerHTML =`<div>`
    for (var i=0; i<emails.length;i++)
    {
      containerEmail.innerHTML += `
      <div class="container-email ${modo}">
        <div class="container-titulo ${modo}"> 
            ${emails[i].titulo}
        </div>
        <div class="container-corpo ${modo}"> 
            | ${emails[i].corpo}
        </div>
        <div class="container-hora ${modo}"> 
            | ${emails[i].horario}
        </div>
      </div>
      `;
      containerEmail.innerHTML += `
      <div id="remetente"> 
        <div class="container-remetente ${modo}"> 
            ${emails[i].remetente} 
        </div>
      </div>`;
    }
    containerEmail.classList.add("format-email");
    containerEmail.innerHTML +=`</div>`;
};


var botao = document.querySelector(".alterar");

function mudarClaroEscuro_email (botao, emails)
{
    botao.addEventListener("click", function ()
    {
        if (botao.value == "Modo escuro")
        {
            var modo = "escuro";
            renderEmails (emails, modo);
            botao.value = 'Modo claro';
            botao.innerHTML = 'Modo claro'
        }

        else
        {
            var modo = "claro";
            renderEmails (emails, modo);
            botao.value = 'Modo escuro';
            botao.innerHTML = 'Modo escuro'
        }
    })
};

mudarClaroEscuro_email(botao, emails);

