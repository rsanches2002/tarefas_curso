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

function renderEmails_modoEscuro (emails)
{
    var containerEmail = document.querySelector(".container-geral");
    var containerEmailRemetente = document.querySelector(".container-geral");

        containerEmail.innerHTML =`<div>`
        for (var i=0; i<emails.length;i++)
        {
          containerEmail.innerHTML += `
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
          containerEmailRemetente.innerHTML += `
          <div id="remetente"> 
            <div class="container-remetente"> 
                ${emails[i].remetente} 
            </div>
          </div>`;
        }
        containerEmail.classList.remove("format-email");
        containerEmail.innerHTML +=`</div>`;
};

renderEmails_modoEscuro (emails);

function renderEmails_modoClaro (emails)
{
    var containerEmail = document.querySelector(".container-geral");
    var containerEmailRemetente = document.querySelector(".container-geral");

    containerEmail.innerHTML =`<div>`
    for (var i=0; i<emails.length;i++)
    {
      containerEmail.innerHTML += `
      <div class="container-email claro">
        <div class="container-titulo claro"> 
            ${emails[i].titulo}
        </div>
        <div class="container-corpo claro"> 
            | ${emails[i].corpo}
        </div>
        <div class="container-hora claro"> 
            | ${emails[i].horario}
        </div>
      </div>
      `;
      containerEmailRemetente.innerHTML += `
      <div id="remetente"> 
        <div class="container-remetente"> 
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
            renderEmails_modoEscuro (emails);
            botao.value = 'Modo claro';
            botao.innerHTML = 'Modo claro'
        }

        else
        {
            renderEmails_modoClaro (emails);
            botao.value = 'Modo escuro';
            botao.innerHTML = 'Modo escuro'
        }
    })
};

mudarClaroEscuro_email(botao, emails);

