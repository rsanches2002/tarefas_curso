const pedidos = 
[
  {
    codigo: "bcdc9e1b-1774-4278-ac98-00d14afda244",
    formulas: 
    [
      {
        quantidade: 100,
        unidade: "mg",
        nome: "magnésio",
        observacao: "dimalato",
      },
      {
        quantidade: 2000,
        unidade: "ui",
        nome: "colecalciferol",
        observacao: "Vit. D3",
      },
    ],

    dadosPessoais:
    {
      nomeMedico: "Dr.Angeline S. Orchid",
      nomeCliente: "Rafael Santos",
    },

    preco: 55.78,

    capsula:
    {
      quantidade: 60,
      tipo: "caps. vegetais",
    },
  },

  {
    codigo: "bcdc9e1b-1774-4278-ac98-00d14afda244",
    formulas: 
    [
      {
        quantidade: 100,
        unidade: "mg",
        nome: "magnésio",
        observacao: "dimalato",
      },
      {
        quantidade: 2000,
        unidade: "ui",
        nome: "colecalciferol",
        observacao: "Vit. D3",
      },
    ],

    dadosPessoais: 
    {
      nomeMedico: "Dr.Angeline S. Orchid",
      nomeCliente: "Rafael Santos",
    },

    preco: 55.78,

    capsula: 
    {
      quantidade: 60,
      tipo: "caps. vegetais",
    },
  },
];

const formulacoes = [
  [
    "bcdc9e1b-1774-4278-ac98-00d14afda244",
    [
      [100, "mg", "magnésio", "dimalato"],
      [2000, "ui", "colecalciferol", "Vit. D3"],
    ],
    ["Dr.Angeline S. Orchid", "Rafael Santos"],
    55.78,
    [60, "caps. vegetais"],
  ],

  [
    "ca885e3e-e26f-4071-95ec-6b0672170b4a",
    [
      [1000, "mcg", "cobre", "quelato"],
      [15, "mg", "zinco", "quelato"],
      [150, "mg", "ácid. ascórbico", "Vit. C"],
      [80, "mcg", "selênio", "quelato"],
    ],
    ["Dr.Angeline S. Orchid", "Adriane de Oliveira"],
    135.22,
    [180, "caps. vegetais"],
  ],

  [
    "d91348e6-a475-41a6-8771-33e904b7b1c9",
    null,
    null,
    130.0,
    [60, "caps. vegetais"],
  ],

  [],

  [
    "f8a2b8c1-a273-4477-a8e3-0fa08352535a",
    [
      [100, "mcg", "metilcobalamina", "Vit. B12"],
      [4000, "ui", "colecalciferol", "Vit. D3"],
      [1000, "ui", "acet. retinol", "Vit. A"],
      [300, "mg", "ácid. ascórbico", "Vit. C"],
      [250, "mg", "silício org.", "exsynutriment"],
      [100, "mcg", "selênio", "quelato"],
    ],
    ["Dr.Angeline S. Orchid", "Rodrigo D. Kaito"],
    270.0,
    [160, "caps. vegetais"],
  ],
];

/*
class formulacoes
{
  constructor()
  {
    this.codigo0="bcdc9e1b-1774-4278-ac98-00d14afda244",
    this.codigo1= "ca885e3e-e26f-4071-95ec-6b0672170b4a",
    
    this.formulas=
    {
      formula00:
      {
        Quantidade0: 100, 
        Unidade0: "mg", 
        Nome0: "magnésio",
        Observacao0: "dimalato",
      },
      formula01:
      {
        Quantidade1: 2000, 
        Unidade1: "ui", 
        Nome1: "colecalciferol",
        Observacao1: "Vit. D3",
      },
    },

    this.dados0=
    {
      Nome_medico0: "Dr.Angeline S. Orchid",
      Nome_cliente0: "Rafael Santos",
    },

    this.dados1=
    {
      Nome_medico1: "Dr.Angeline S. Orchid",
      Nome_cliente1: "Adriane de Oliveira",
    },
  
    this.preco0=55.78,
    this.preco1=135.22,

    this.capsulas0=
    {
      QuantidadeCaps0: 60,
      Tipo0: "caps. vegetais",
    },

    this.capsulas1=
    {
      QuantidadeCaps1: 180,
      Tipo1: "caps. vegetais",
    }
  }

  printFormulacao()
  {
    console.log("Código: " + this.codigo0);
    console.log("Fórmulas: ");
    console.log("Fórmula 1: ");
    console.log("Quantidade: " + this.formulas.formula00.Quantidade0); 
    console.log("Unidade: " + this.formulas.formula00.Unidade0);
    console.log("Nome: " + this.formulas.formula00.Nome0);
    console.log("Observação: " + this.formulas.formula00.Observacao0);
    console.log("Fórmula 1: ");
    console.log("Quantidade: " + this.formulas.formula01.Quantidade1); 
    console.log("Unidade: " + this.formulas.formula01.Unidade1);
    console.log("Nome: " + this.formulas.formula01.Nome1);
    console.log("Observação: " + this.formulas.formula01.Observacao1);
    console.log("Dados pessoais: ");
    console.log("Médico: " + this.dados0.Nome_medico0);
    console.log("Cliente: " + this.dados0.Nome_cliente0);
    console.log("Preço: " + this.preco0);
    console.log("Cápsulas: ");
    console.log("Quantidade: " + this.capsulas0.QuantidadeCaps0);
    console.log("Tipo: " + this.capsulas0.Tipo0);
  }
}
  
var f1 = new formulacoes();

f1.printFormulacao();


for (let i = 0; i < estrutura.length; i++) 
{

  if (estrutura[i] != null && estrutura[i].length > 0) 
  {
    console.log("codigo: " + estrutura[i][0]);
    console.log("preco: " + estrutura[i][3]);
    if (estrutura[i][1] != null && estrutura[i][1].length > 0) 
    {
      for (let z = 0; z < estrutura[i][1].length; z++) 
      {
        console.log("Formulação:" + (z + 1) + ":");

        if (estrutura[i][1][z] != null && estrutura[i][1][z].length > 0) 
        {
          console.log("Componentes da fórmula " + (z + 1) + ":");
          console.log("\tquantidade: " + estrutura[i][1][z][0]);
          console.log("\tunidade: " + estrutura[i][1][z][1]);
          console.log("\tNome: " + estrutura[i][1][z][2]);
          console.log("\tObservação: " + estrutura[i][1][z][3]);
          console.log("Dados pessoais:");
          console.log("\tNome do médico: " + estrutura[i][2][0]);
          console.log("\tNome paciente: " + estrutura[i][2][1]);
          console.log("Capsulas:");
          console.log("\tQuantidade: " + estrutura[i][4][0]);
          console.log("\tTipo: " + estrutura[i][4][1]);
        }
      }
    }
    console.log("------------------------------------------");
  }
}
*/

/*
    formulacao:
    {
  
    },
  
      formulacao:
    {
      codigo: "ca885e3e-e26f-4071-95ec-6b0672170b4a",
      formulas: 
      {
        formula:
        {
          Quantidade: 1000, 
          Unidade: "mcg", 
          Nome: "cobre",
          Observação: "quelato",
        },
  
        formula:
        {
          Quantidade: 15,
          Unidade: "mg",
          Nome: "zinco",
          Observação: "quelato",
        },
  
        formula:
        {
          Quantidade: 150,
          Unidade: "mg",
          Nome: "ácid. ascórbico",
          Observação: "Vit. C",
        },
  
        formula:
        {
          Quantidade: 80,
          Unidade: "mcg",
          Nome: "selênio",
          Observação: "quelato",
        },
        
      },
  
      dados_pessoais:
      {
        Nome_medico: "Dr.Angeline S. Orchid",
        Nome_cliente: "Adriane de Oliveira",
      },
  
      preco: 135.22,
  
      capsulas:
      {
        Quantidade: 180,
        Tipo: "caps. vegetais",
      },
    },
  
    formulacao:
    {
      codigo: "f8a2b8c1-a273-4477-a8e3-0fa08352535a",
      formulas: 
  
      {
        formula:
        {
          Quantidade: 100,
          Unidade: "mcg",
          Nome: "metilcobalamina",
          Observação: "Vit. B12",
        },
  
        formula:
        {
          Quantidade: 4000,
          Unidade: "ui",
          Nome: "colecalciferol",
          Observação: "Vit. D3",
        },
  
        formula:
        {
          Quantidade: 1000,
          Unidade: "ui",
          Nome: "acet. retinol",
          Observação: "Vit. A",
        },
  
        formula:
        {
          Quantidade: 300,
          Unidade: "mg",
          Nome: "ácid. ascórbico",
          Observação: "Vit. C",
        },
  
        formula:
        {
          Quantidade: 250,
          Unidade: "mg",
          Nome: "silício org.",
          Observação: "exsynutriment",
        },
  
        formula:
        {
          Quantidade: 100,
          Unidade: "mcg",
          Nome: "selênio",
          Observação: "quelato",
        },
      },
  
      dados_pessoais:
      {
        Nome_medico: "Dr.Angeline S. Orchid",
        Nome_cliente: "Rodrigo D. Kaito",
      },
  
      preco: 270.00,
  
      capsulas:
      {
        Quantidade: 160,
        Tipo: "caps. vegetais",
      },
    },

*/
