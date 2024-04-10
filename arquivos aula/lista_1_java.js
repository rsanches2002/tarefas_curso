//exercicio 1

var nome = "Rafael";
var sobrenome = "Augusto de Oliveira Sanches";
var escola = "estadual";

var nomeCompleto = "Meu nome completo é " + nome + " " + sobrenome;

console.log(nomeCompleto);

//exercicio 2

var v1 = "Brasil";
var v2 = "economia";
var v3 = "sustentável";
var v4 = "preservação";
var v5 = 2023;

var frase1 = "O " + v1 + " é uma " + v2 + " " + v3 + " e investe na " + v4 + " em " + v5;
var frase2 = "Em " + v5 + ", o " + v1 + " avança em direção a uma " + v2 + " " + v3 + " priorizando a " + v4;
var frase3 = "O ano de " + v5 + " traz desafios e oportunidades para o  " + v1 + " consciliar o crescimento da " + v2 + " com práticas de " + v4 + " " + v3;

console.log(frase1);
console.log(frase2);
console.log(frase3);

//exercicio 3

console.log("Entre com o valor 1: ");
var valor1 = prompt ();
console.log("Entre com o valor 2: ");
var valor2 = prompt ();

var soma = parseInt(valor1) + parseInt(valor2);
var subtracao = valor1 - valor2;
var multiplica = valor1 * valor2;
var dividi = valor1 / valor2;

console.log("Soma é =  " + soma);
console.log("Substração é = " + subtracao);
console.log("Multiplicação é = " + multiplica);
console.log("Divisão é = " + dividi);

//exercicio 4

console.log("A _____ tem casca amarela e é doce, enquanto o _____ é vermelho e azedinho. No sacolão o KG de _____ custa reais e a bandejinha de 350g de _____ custa _____ reais. Foi comprado 4/7 KG de _____ e 3 bandejinhas de _____. Assim, o preço final foi de _____ reais para ______ KG de comida.");

console.log("Entre com o nome da fruta: ");
var p1 = prompt ();
console.log("Entre com o nome da fruta: ");
var p2 = prompt ();
console.log("Entre com o nome da fruta: ");
var p3 = prompt ();
console.log("Entre com o VALOR da fruta: ");
let p4 = prompt ();
console.log("Entre com o nome da fruta: ");
var p5 = prompt ();
console.log("Entre com o VALOR da fruta: ");
let p6 = prompt ();
console.log("Entre com o VALOR da fruta: ");
var p7 = prompt ();
console.log("Entre com o VALOR da fruta: ");
var p8 = prompt ();

let preco_final = parseInt(p4) + parseInt(p6);
var peso_final = 3 * 0.350 + 0.570;

console.log("A " + p1 + " tem casca amarela e é doce, enquanto o " + p2 + 
" é vermelho e azedinho. No sacolão o KG de " + p3 + " custa " + p4 + 
" reais e a bandejinha de 350g de " + p5 + " custa " + p6 + " reais. Foi comprado 4/7 KG de " + p7 +
" e 3 bandeijinhas de " + p8 + " . Assim, o preço final foi de " + preco_final + " reais para " 
+ peso_final + " KG de comida.");

//exercicio 5

console.log("Entre com o valor de A: ");
var a = prompt ();
console.log("Entre com o valor de B: ");
var b = prompt ();

let lado1 = ((parseInt(a) + parseInt(b)) * (a - b));
let lado2 = (((parseInt(a) + parseInt(b)) * (parseInt(a) + parseInt(b))) - 2*(a * b));

console.log("Resultado: " + lado1 * lado2);

//exercicio 6

console.log("Entre com a letra 1: ");
var a = prompt ();
console.log("Entre com a letra 2: ");
var b = prompt ();
console.log("Entre com a letra 3: ");
var c = prompt ();

var letra = [a, b, c];

for(var i=2; i>=0; i--)
{
    console.log(letra[i])
}

//exercicio 7

console.log("Entre com A: ");
var a = prompt ();
console.log("Entre com B: ");
var b = prompt ();

var a = b;
var b = a;

console.log("Variável A :" + b1)
console.log("Variável B :" + a1)

//exercicio 8

console.log("Entre com o nome do cliente: ");
var nome = prompt ();
console.log("Entre com o nome do livro: ");
var livro = prompt ();
console.log("Entre com a data de devolução: ");
var data = prompt ();
console.log("Entre com o preço do aluguel: ");
var valor_aluguel = prompt ();
console.log("Entre com a quantidade de dias de atraso: ");
var dias_atraso = prompt ();

if(dias_atraso > 0)
{
    var valor_multa = parseInt(valor_aluguel) + parseFloat(dias_atraso * (valor_aluguel * 0.025));
}
else
{
    var valor_multa = "Não há multa por atraso.";
}

console.log("Nome do cliente: " + nome);
console.log("Nome do livro: " + livro);
console.log("Nome do data da devolução: " + data);
console.log("Preço do aluguel: " + valor_aluguel);
console.log("Dias de atraso: " + dias_atraso);
console.log("Multa por atraso: " + valor_multa);

//exercicio 11

console.log("Entre com seu peso: ");
var massa = prompt ();
console.log("Entre com sua altura: ");
var altura = prompt ();

var imc = massa / (altura * altura);

if(imc < 18.5)
{
    var classifica = "Abaixo do peso normal."
}
else if (imc > 18.5 && imc < 24.9)
{
    var classifica = "Peso normal."
}
else if (imc > 25 && imc < 29.9)
{
    var classifica = "Excesso de peso."
}
else if (imc > 30 && imc < 34.9)
{
    var classifica = "Obesidade classe I."
}
else if (imc > 35 && imc < 39.9)
{
    var classifica = "Obesidade classe II."
}
else if (imc > 40)
{
    var classifica = "Obesidade classe III."
}

console.log("Seu IMC é de: " + imc);
console.log("Sua classificação é: " + classifica);

//exercicio 12

console.log("Entre com o valor do colesterol TOTAL: ");
var total = prompt ();
console.log("Entre com o valor do colesterol LDL: ");
var ldl = prompt ();
console.log("Entre com o valor do colesterol HDL: ");
var hdl = prompt ();
console.log("Entre com seu gênero - h para Homem/ m para Mulher: ");
var genero = prompt ();

if(genero == "h" || genero == "m" && hdl >= 60 && total <= 200 && ldl <= 100)
{
    var classifica = "Saudável.";
}
else if (genero == "m" && total > 200 && total <= 239 && ldl > 100 && ldl <= 159 && hdl > 50 && hdl <= 59)
{
    var classifica = "Em risco.";
}
else if (genero == "h" && total > 200 && total <= 239 && ldl > 100 && ldl <= 159 && hdl > 40 && hdl <= 59)
{
    var classifica = "Em risco.";
}
else if (genero == "h" && total > 240 && ldl > 160 && hdl > 50)
{
    var classifica = "Perigoso.";
}
else if (genero == "m" && total > 240 && ldl > 160 && hdl > 40)
{
    var classifica = "Perigoso.";
}

console.log("Sua classificação é: " + classifica);