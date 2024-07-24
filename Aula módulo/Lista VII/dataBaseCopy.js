let dataBaseCopy =
    [
        {
            surveyId: 1,
            title: "dados pessoais",
            description: "levantamento dos dados pessoais",
            author: "Rafael",
            year: 2020,
            questions: [
                {
                    description: "Faixa etária",
                    type: "close",
                    options: ["até 18 anos",
                        "entre 24 e 30 anos",
                        "entre 41 e 54 anos",
                        "acima de 55 anos"],
                    answers: [
                        {
                            InterviewdId: 3,
                            answer: 0
                        },
                        {
                            InterviewdId: 1,
                            answer: 1
                        }
                    ]
                },
                {
                    description: "Levantamento da escolaridade",
                    type: "close",
                    options: ["fundamental", "médio", "superior"],
                    answers: [
                        {
                            InterviewdId: 3,
                            answer: 2
                        }
                    ]
                },
                {
                    description: "Sexo",
                    type: "close",
                    options: ["feminino", "masculino"],
                    answers: [
                        {
                            InterviewdId: 1,
                            answer: 2
                        }
                    ]
                }   
            ]
        },
        {
            surveyId: 2,
            title: "Hábitos noturnos",
            description: "Levantamento dos hábitos do sono",
            author: "Paulo",
            year: 2022,
            questions: [
                {
                    description: "Descreva a qualidade do seu sono:",
                    type: "open",
                    answers: [
                        {
                            InterviewdId: 3,
                            answer: "testando resposta aberta"
                        }
                    ]
                },
                {
                    description: "O quanto você dorme?",
                    type: "close",
                    options: ["Muito","Médio", "Pouco"],
                    answers: [
                        {
                            InterviewdId: 3,
                            answer: 2
                        }
                    ]
                }   
            ]
        }
    ];


export default dataBaseCopy;
