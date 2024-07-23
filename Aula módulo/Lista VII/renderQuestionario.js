import dataBaseCopy from "./dataBaseCopy.js";
import salvarRespostas from "./pushRespostas.js";
import renderRespostas from "./renderRespostas.js";

document.querySelector(".botao").addEventListener("click", function (){
  let idQuestionarioElement = document.querySelector("#questionary");
  let idRespondenteElement = document.querySelector("#respondenteID");
    for (var i=0; i<dataBaseCopy.length;i++) {
      if (dataBaseCopy[i].surveyId == idQuestionarioElement.value){
        renderQ(dataBaseCopy[i]);
      }
      else {
        // alert("Não encontrado.");
      }
    }
    salvarRespostas(idQuestionarioElement.value, idRespondenteElement.value, dataBaseCopy);
})

document.querySelector(".botaoExibir").addEventListener("click", function (){
  let idQuestionarioElement = document.querySelector("#questionary");
  let idRespondenteElement = document.querySelector("#respondenteID");
  renderRespostas(dataBaseCopy, idQuestionarioElement, idRespondenteElement);
})

function renderQ (questionario)
{
    var div = document.querySelector(".container");
        div.innerHTML =`<div>`
          div.innerHTML += `
          <div class="">
            <div class="">
                  Questionário Id: ${questionario.surveyId}
            </div>
            <div class="">
                  Descrição: ${questionario.description}
            </div>
            <div class=""> 
                 Autor: ${questionario.author}
            </div>
            <div class=""> 
                 Ano: ${questionario.year}
            </div>
            <div class=""> 
               ${renderQuestionsWithoutAnswers(questionario.questions)}
            </div>
          </div>
          <br>
          <button class="salvar">Salvar</button>
          `
          div.innerHTML +=`</div>`;
        }
      
function renderQuestionsWithoutAnswers (questions)
{
  let Questions = "";
  Questions += `<div class="question">`;
    for (var i = 0; i <questions.length; i++) {
      if (questions[i].type == "close") {
        Questions += `
        <br>
        Questão ${[i+1]}:
        <br>
        Descrição: ${questions[i].description}
        ${renderOptions(questions[i].options)}
        `;
      }
      else if (questions[i].type == "open") {
        Questions += `
        <br>
        Questão ${[i+1]}:
        <br>
        Descrição: ${questions[i].description}
        <div class="answerOption"> <input type="text"></div>
        `;
      }
    }
  Questions += `</div>`;
  return Questions;
}

function renderOptions (options)
{
  let Options = "";
  Options += `<div class="option"> Opções:`;
  for (var i=0; i<options.length; i++) {
    Options += `<div class="answerOption"> <input type="radio" value=${i}> ${options[i]} </div>`;
  }
  Options += `</div>`;
  return Options;
};