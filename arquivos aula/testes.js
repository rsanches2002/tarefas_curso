document.getElementById("salvar").addEventListener("click", function (e) {
  e.preventDefault();

  var radioInputs = document.querySelectorAll('input[type="radio"]:checked');

  var valoresSelecionados = [];

  var valuesP = [];
  var valuesD = [];
  var valuesC = [];
  var valuesA = [];

  for (var i = 0; i < radioInputs.length; i++) {
    valoresSelecionados.push(radioInputs[i].id.toString());

    if (radioInputs[i].id.toString().includes("p") == true) {
      valuesP[i] = radioInputs[i].value;
    } 
    
    else if (radioInputs[i].id.toString().includes("d") == true) {
      valuesD[i] = radioInputs[i].value;
    } 
    
    else if (radioInputs[i].id.toString().includes("c") == true) 
    {
        valuesC[i] = radioInputs[i].value;
    } 
    
    else if (radioInputs[i].id.toString().includes("a") == true) {
      valuesA[i] = radioInputs[i].value;
    }
  }

  var vsP = valuesP.filter(function(i)
  {
    return i;
  });

    var vsD = valuesD.filter(function(i)
  {
    return i;
  });

    var vsC = valuesC.filter(function(i)
  {
    return i;
  });

    var vsA = valuesA.filter(function(i)
  {
    return i;
  });

  
  var somaP = 0;
  for (var i = 0; i < vsP.length; i++) {
    somaP = parseInt(somaP) + parseInt(vsP[i]);
  }

  var somaD = 0;
  for (var i = 0; i < vsD.length; i++) {
    somaD = parseInt(somaD) + parseInt(vsD[i]);
  }

  var somaC = 0;
  for (var i = 0; i < vsC.length; i++) {
    somaC = parseInt(somaC) + parseInt(vsC[i]);
  }

  var somaA = 0;
  for (var i = 0; i < vsA.length; i++) {
    somaA = parseInt(somaA) + parseInt(vsA[i]);
  }

  console.log(somaP);
  console.log(somaD);
  console.log(somaC);
  console.log(somaA);

  console.log(somaP/vsP.length);
  console.log(somaD/vsD.length);
  console.log(somaC/vsC.length);
  console.log(somaA/vsA.length);

});
