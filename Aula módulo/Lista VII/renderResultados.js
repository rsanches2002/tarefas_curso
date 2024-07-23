import dataBase from "./dataBaseCopy.js";

render (dataBase);

export function render (dataBase)
{
    var div = document.querySelector(".container");
        div.innerHTML =`<div>`
        for (var i=0; i<dataBase.length;i++)
        {
          div.innerHTML += `
          <div class="">
            <div class="">
                  Questionário Id: ${dataBase[i].surveyId}
            </div>
            <div class="">
                  Descrição: ${dataBase[i].description}
            </div>
            <div class=""> 
                 Autor: ${dataBase[i].author}
            </div>
            <div class=""> 
                 Ano: ${dataBase[i].year}
            </div>
            <div class=""> 
               ${renderQuestions(dataBase[i].questions)}
            </div>
          </div>
          <br>
          `
        }
        div.innerHTML +=`</div>`;
};

export function renderQuestions (questions)
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
        Tipo: ${questions[i].type}
        <br>
        Respostas: ${renderAnswers(questions[i].answers)}
        <br>
        `;
      }
      else if (questions[i].type == "open") {
        Questions += `
        <br>
        Questão ${[i+1]}:
        <br>
        Descrição: ${questions[i].description}
        <br>
        Tipo: ${questions[i].type}
        <br>
        Respostas: ${renderAnswers(questions[i].answers)}
        <br>
        `;
      }
      else{
        //adicionar codigo para tratar erro
      }
    }
  Questions += `</div>`;
  return Questions;
};

export function renderOptions (options)
{
  let Options = "";
  Options += `<div class="option"> Opções:`;
  for (var i=0; i<options.length; i++) {
    Options += `<div class="q"> <input type="radio"> ${options[i]} </div>`;
  }
  Options += `</div>`;
  return Options;
};

export function renderAnswers (answers)
{
  let asw = "";
  asw += `<div class="aswers">`;
    for (let i=0; i<answers.length; i++){
      asw += `
      <div class="CustonAnswer">
      Entrevistado: ${answers[i].InterviewdId} <br>
      Resposta: ${answers[i].answer}
      </div>
      `;
    }
    asw += `</div>`;
    return asw;
};

