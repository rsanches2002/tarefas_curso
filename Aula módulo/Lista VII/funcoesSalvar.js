class Questionario {
  constructor(){
    this.id = 1
    this.arrayQuestionary = [];
  }

  salvar(){
    let questionary = this.readDatas();

    if(this.validarCampos(questionary)){
      this.adicionar(questionary);
    }
    this.listaTabela();
    console.log(this.arrayQuestionary)
  }

  listaTabela(){
    let tbody = document.getElementById("tbody")
    tbody.innerText="";

    for (let i=0;i<this.arrayQuestionary.length;i++){
      let tr = tbody.insertRow();

      let td_questionary = tr.insertCell();
      let td_question = tr.insertCell();
      let td_answer = tr.insertCell();

      td_questionary.innerText = this.arrayQuestionary[i].questionary;
      td_question.innerText = this.arrayQuestionary[i].question;
      td_answer.innerText = this.arrayQuestionary[i].answer;
    }
  }

  adicionar(questionary){
    this.arrayQuestionary.push(questionary)
    this.id++;
  }

  cancelar(){

  }

  readDatas(){
    let questionaryList = {}

    questionaryList.id = this.id;
    questionaryList.questionary = document.getElementById("questionary").value;
    questionaryList.question = document.getElementById("question").value;
    questionaryList.answer = document.getElementById("answer").value;

    return questionaryList;
  }

  validarCampos(questionaryList){
    let msg = "";

    if(questionaryList.questionary == ""){
      msg += "Informe o questionário \n";
    }

    if(questionaryList.question == ""){
      msg += "Informe a questão \n";
    }

    if(questionaryList.answer == ""){
      msg += "Informe a resposta \n";
    }

    if(msg != ""){
      alert(msg);
      return false
    }

    return true;
  }
}

var questionary = new Questionario();