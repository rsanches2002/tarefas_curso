import salvarRespostas from "./pushRespostas.js";

function renderRespostas (dataBaseCopy, IDquest, IDrespond) {
    var div = document.querySelector(".container");
    for (var i=0;i<dataBaseCopy.length;i++){
        if (dataBaseCopy.surveyId[i] == IDquest){
            for(let j=0; j<dataBaseCopy[i].questions.length; j++){
                console.log(dataBaseCopy[i].questions[j].answers);
            }
        }
    }
}

export default renderRespostas;

//reavaliar a utilização deste codigo
//1 - deve ser possivel recuperar as respostas de um determinado respondente de um determinado questionario
//2 - renderizar as respostas na tela

