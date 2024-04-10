
const estrutura =
  [
    ["bcdc9e1b-1774-4278-ac98-00d14afda244",
      [[100, "mg", "magnésio", "dimalato"], [2000, "ui", "colecalciferol", "Vit. D3"]],
      ["Dr.Angeline S. Orchid", "Rafael Santos"],
      55.78,
      [60, "caps. vegetais"]
    ],

    ["ca885e3e-e26f-4071-95ec-6b0672170b4a",
      [[1000, "mcg", "cobre", "quelato"], [15, "mg", "zinco", "quelato"], [150, "mg", "ácid. ascórbico", "Vit. C"], [80, "mcg", "selênio", "quelato"]],
      ["Dr.Angeline S. Orchid", "Adriane de Oliveira"],
      135.22,
      [180, "caps. vegetais"]
    ],

    ["d91348e6-a475-41a6-8771-33e904b7b1c9",
      null,
      null,
      130.00,
      [60, "caps. vegetais"]
    ],

    [

    ],

    ["f8a2b8c1-a273-4477-a8e3-0fa08352535a",
      [[100, "mcg", "metilcobalamina", "Vit. B12"], [4000, "ui", "colecalciferol", "Vit. D3"], [1000, "ui", "acet. retinol", "Vit. A"], [300, "mg", "ácid. ascórbico", "Vit. C"], [250, "mg", "silício org.", "exsynutriment"], [100, "mcg", "selênio", "quelato"]],
      ["Dr.Angeline S. Orchid", "Rodrigo D. Kaito"],
      270.00,
      [160, "caps. vegetais"]
    ]

  ]

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