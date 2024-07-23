//import dataBaseCopy from "./dataBaseCopy.js";

function salvarRespostas (idQuestionario, idRespondente, dataBaseCopy){
  document.getElementsByClassName("salvar")[0].addEventListener("click", function (e) {
  
    var Inputs = document.querySelectorAll('.answerOption input[type="radio"]:checked, .answerOption input[type="text"]');
    
    var valoresSelecionados = [];
  
    for (var i = 0; i < Inputs.length; i++) {
      valoresSelecionados.push(Inputs[i].value || Inputs[i]);
    };

    let novasRespostas = [];

    for (let i=0; i<valoresSelecionados.length;i++){
      let novaResposta = {
        interviewdId: idRespondente,
        //answer:Number(valoresSelecionados[i])
        answer: valoresSelecionados[i]
      }
      novasRespostas.push(novaResposta);
    }

    for (let i=0; i<dataBaseCopy.length; i++){
      if (dataBaseCopy[i].surveyId == idQuestionario){
        for(let j=0; j<dataBaseCopy[i].questions.length; j++){
          dataBaseCopy[i].questions[j].answers.push(novasRespostas[j]);
        }
      }
    }

    console.log(novasRespostas);
    console.log(dataBaseCopy);
    //salvar as questoes abertas
    //console.log(dataBaseCopy);
  })
}

export default salvarRespostas;

