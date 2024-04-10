let dataBase =
    [
        {
            surveyId: 1,
            title: "Hábitos alimentares",
            description: "café da manhã, doces",
            author: "Rafael",
            year: 2020,
            questions: [
                {
                    description: "Você toma café da manhã?",
                    options: ["Sim","Não"],
                    type: "close",
                    answer: 0
                },
                {
                    description: "Qual a intensidade da sua fome pela manhã?",
                    options: ["Muito","Médio","Pouco"],
                    type: "close",
                    answer: 0
                },
                {
                    description: "Qual a intensidade da sua fome pela manhã?",
                    type: "close",
                    answer: 0
                }   
            ]
        },
        {
            surveyId: 2,
            title: "Hábitos noturnos",
            description: "dorme cedo, horas de sono",
            author: "Paulo",
            year: 2022,
            questions: [
                {
                    description: "Descreva a qualidade do seu sono:",
                    answer: "testando resposta aberta",
                    type: "open",
                },
                {
                    description: "O quanto você dorme?",
                    options: ["Muito","Médio", "Pouco"],
                    type: "close",
                    answer: 0
                }   
            ]
        }
    ];


export default dataBase;
