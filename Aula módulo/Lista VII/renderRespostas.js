import salvarRespostas from "./pushRespostas.js";

function renderRespostas (dataBaseCopy, IDquest, IDrespond) {
    let aswe = document.querySelector(".container");
    aswe.innerHTML += `<div class="aswers">`
    for (let i=0;i<dataBaseCopy.length;i++){
        if (dataBaseCopy[i].surveyId == IDquest.value){
            for(let j=0; j<dataBaseCopy[i].questions.length; j++){
                for(let l=0; l<dataBaseCopy[i].questions[j].answers.length; l++){
                    if (dataBaseCopy[i].questions[j].answers[l].InterviewdId == IDrespond.value){
                        let posicao = dataBaseCopy[i].questions[j].answers[l].answer
                        aswe.innerHTML += `
                        <div class="CustonAnswer">
                        Entrevistado: ${IDrespond.value} <br>
                        Questionário: ${IDquest.value} <br>
                        Questão: ${dataBaseCopy[i].questions[j].description} <br>
                        Resposta: ${dataBaseCopy[i].questions[j].options[posicao]} <br>
                        </div>
                        `;
                    }
                }
            }
        }
    aswe.innerHTML += `</div>`;
    }
    return aswe;
}

export default renderRespostas;


