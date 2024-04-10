import dataBase from "./dataBase.js";

render (dataBase);

function render (dataBase)
{
    var div = document.querySelector(".container");
        div.innerHTML =`<div>`
        for (var i=0; i<dataBase.length;i++)
        {
          div.innerHTML += `
          <div class="">
            <div class=""> 
                  Id: ${dataBase[i].surveyId}
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
              Questão ${[i+1]}: ${renderQuestions(dataBase[i].questions)}
            </div>
          </div>
          <br>
          `
        }
        div.innerHTML +=`</div>`;
};

function renderQuestions (questions)
{
  let Questions = "";
  let qOpt = options;
  Questions += `<div class="question">`;
  debugger;
  if (qOpt != null){
    for (var i = 0; i <questions.length; i++) {
      Questions += `
      Descrição: ${questions[i].description}
      ${renderOptions(questions[i].options)}
      ${renderType(questions[i].type)}
      `;
    }
  }
  else{
    Questions += `
    Descrição: ${questions[i].description}
    ${renderOptions(questions[i].options)}
    `;
  }
  Questions += `</div>`;
  return Questions;
};

function renderOptions (options)
{
  let Options = "";
  Options += `<div class="option">`;
  for (var i = 0; i <options.length; i++) {
    Options += `
    <div class="">
    ${options[i]}
    </div>
    `;
  }
  Options += `</div>`;
  return Options;
};

function renderType (type)
{
  let Type = "";
  Type += `<div class="type">`;
  for (var i = 0; i <type.length; i++) {
    type += `
    <div class="">
    ${type[i]}
    </div>
    `;
  }
  Type += `</div>`;
  return Type;
};