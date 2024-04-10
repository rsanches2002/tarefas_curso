let emails =
    [
        {
            nome: "Ana",
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

/*
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
*/

renderEmailsV2(emails);

function renderEmailsV2(emails) 
{
    var btnAlterar = document.getElementById("#alterar");
    btnAlterar.addEventListener("click", function () 
    {
        var div = document.querySelector(".div-entrada");
        var divRemetente = document.querySelector(".div-entrada");
        if (btnAlterar.value == "Dark Model")
        {
            for (var i = 0; i < emails.length; i++) {
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
            div.innerHTML = `<div>`

            div.classList.add("format-email");

            div.innerHTML += `</div>`;
            
            btn.value = 'Light model';
            btn.innerHTML = 'Light model'
        }

    })
};

/*
renderEmailsV2 (emails);

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
*/

/*
var btn = document.getElementById('alterar');
var element = document.querySelector(".div-entrada");
btn.onclick = function(){
    if(btn.value === "Dark model")
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

        btn.value = 'Light model';
        btn.innerHTML = 'Light model'
    }
    else
    {
        var div = document.querySelector(".div-entrada");
        var divRemetente = document.querySelector(".div-entrada");
        
        div.innerHTML =`<div>`
        for (var i=0; i<emails.length;i++)
        {
          div.innerHTML += `
          <div class="container-email-claro">
            <div class="container-titulo-claro"> 
                ${emails[i].titulo}
            </div>
            <div class="container-corpo-claro"> 
                | ${emails[i].corpo}
            </div>
            <div class="container-hora-claro"> 
                | ${emails[i].horario}
            </div>
          </div>
          `;
          divRemetente.innerHTML += `
          <div id="remetente"> 
            <div class="container-remetente-claro"> 
                ${emails[i].remetente} 
            </div>
          </div>`;
        }
        div.classList.add("format-email-claro");
        div.innerHTML +=`</div>`;
        btn.value = 'Dark model';
        btn.innerHTML = 'Dark model'
    }
}
*/

