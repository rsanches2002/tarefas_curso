import salvarRespostas from "./pushRespostas.js";

function renderRespostas (dataBaseCopy, IDquest, IDrespond) {

    // for (let i=0;i<dataBaseCopy.length;i++){
    //     if (dataBaseCopy[i].surveyId == IDquest.value){
    //         for(let j=0; j<dataBaseCopy[i].questions.length; j++){
    //             debugger
    //             console.log(dataBaseCopy[i].questions[j].answers);
    //         }
    //     }
    // }

    for (let i=0;i<dataBaseCopy.length;i++){
        if (dataBaseCopy[i].surveyId == IDquest.value){
            for(let j=0; j<dataBaseCopy[i].questions.length; j++){
                for(let l=0; l<dataBaseCopy[i].questions[j].answers.length; l++){
                    if (dataBaseCopy[i].questions[j].answers[l].InterviewdId == IDrespond.value){
                        console.log(dataBaseCopy[i].questions[j].answers[l].answer);
                    }
                }
            }
        }
        
    }
}

export default renderRespostas;

//reavaliar a utilização deste codigo
//1 - deve ser possivel recuperar as respostas de um determinado respondente de um determinado questionario
//2 - renderizar as respostas na tela

