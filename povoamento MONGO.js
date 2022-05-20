
// Almoxarifado:

db.almoxarifado.insertOne( 

    { 

        funcionando: true, 

        itens: [ 

            { NomeItem: "Canetas", Quantidade: 63 }, 

            { NomeItem: "resma de papel", Quantidade: 21 }, 

            { NomeItem: "vassoura", Quantidade: 4 }, 

            { NomeItem: "kit de limpeza", Quantidade: 12 }, 

            { NomeItem: "pergaminho", Quantidade: 35 }, 

            { NomeItem: "pincel de restauracao", Quantidade: 8 } 

        ] 

    } 

) 

// Clientes:

db.clientes.insertMany([
    {
        nome:"Aaron",
        idade: 15,
        contato: {
            email:"Aaron@email.com",
            telefone:81988888889
        },
        livroAlugado: false,
        socio: true,
        locados: []
    },
    {
        nome:"Abel",
        idade: 35,
        contato: {
            email:"Abel@email.com",
            telefone:81988888888
        },
        livroAlugado: false,
        socio: true,
        locados: []
    },
    {
        nome:"yuri",
        idade: 23,
        contato: {
            email:"yuri@email.com",
            telefone:81988888887
        },
        livroAlugado: false,
        socio: true,
        locados: []
    },
    {
        nome:"Yumi",
        idade: 27,
        contato: {
            email:"Yumi@email.com",
            telefone:81988888886
        },
        livroAlugado: false,
        socio: false,
        locados: []
    },
    {
        nome:"Adam",
        idade: 33,
        contato: {
            email:"Adam@email.com",
            telefone:81988888885
        },
        livroAlugado: true,
        socio:false,
        locados: ["O Bandolina do Capitão Corellino"]
    },
    {
        nome:"Damian",
        idade: 29,
        contato: {
            email:"Damian@email.com",
            telefone:81988888884
        },
        livroAlugado: false,
        socio: false,
        locados: []
    },
    {
        nome:"Agatha",
        idade: 22,
        contato: {
            email:"Agatha@email.com",
            telefone:81988888883
        },
        livroAlugado: true,
        socio: false,
        locados: ["Dona Casmurra"]
    },
    {
        nome:"Alan",
        idade: 23,
        contato: {
            email:"Alan@email.com",
            telefone:81988888882
        },
        livroAlugado: true,
        socio: false,
        locados:["O bonde de Monte Crista"]
    },
    {
        nome:"Alana",
        idade: 14,
        contato: {
            email:"Alana@email.com",
            telefone:81988888881
        },
        livroAlugado: false,
        socio: false,
        locados: []
    },
    {
        nome:"Alexa",
        idade:25,
        contato: {
            email:"Alexa@email.com",
            telefone:81988888819
        },
        livroAlugado: true,
        socio: false,
        locados: ["El rocesso"]
    },
    {
        nome:"Gerson",
        idade: 34,
        contato: {
            email:"Gerson@email.com",
            telefone:81988888829
        },
        livroAlugado: true,
        socio: false,
        locados: ["Orgulhos e Preconceitos"]
    },
    {
        nome:"Giovanna",
        idade: 42,
        contato: {
            email:"Giovanna@email.com",
            telefone:81988888839
        },
        livroAlugado: false,
        socio: false,
        locados: []
    },
    {
        nome:"Boris",
        idade:63,
        contato: {
            email:"Boris@email.com",
            telefone:81988888849
        },
        livroAlugado: false,
        socio: true,
        locados: []
    },
    {
        nome:"Katarina",
        idade: 48,
        contato: {
            email:"Katarina@email.com",
            telefone:81988888859
        },
        livroAlugado: false,
        socio: true,
        locados: []
    },
    {
        nome:"sonia",
        idade: 50,
        contato: {
            email:"sonia@email.com",
            telefone:81988888869
        },
        livroAlugado: true,
        socio: true,
        locados: ["Georger Orwelle","Sem Ano de Solidoes"]
    }
]);

// Funcionarios
db.funcionarios.insertMany([
    {
        nome:"alice",
        idade: 33,
        funcao:"recepcionista",
        salario: 2.342,
        emFerias: false
    },
    {
        nome:"fernando",
        idade: 27,
        funcao:"recepcionista",
        salario: 2.342,
        emFerias: false
    },
    {
        nome:"mario dias",
        idade: 31,
        funcao:"servicos gerais",
        salario: 1.612,
        emFerias: false
    },
    {
        nome:"joane ferreira",
        idade: 34,
        funcao:"servicos gerais",
        salario: 1.612,
        emFerias: false
    },
    {
        nome:"brenda otas",
        idade: 26,
        funcao:"bibliotecario",
        salario: 3.100,
        emFerias: false
    },
    {
        nome:"melissa monteiro",
        idade: 30,
        funcao:"bibliotecario",
        salario: 3.000,
        emFerias: false
    },
    {
        nome:"rute gomas",
        idade: 63, 
        funcao:"bibliotecario",
        salario: 4.320,
        emFerias: false
    },
    {
        nome:"marlene dinamo",
        idade: 42,
        funcao:"gerente",
        salario: 5.000,
        emFerias: false
    },
    {
        nome:"luane oliveira",
        idade: 28,
        funcao:"almoxarife",
        salario: 1.800,
        emFerias: false
    },
    {
        nome:"tiago morais",
        idade: 23,
        funcao:"auxiliar de almoxarifado",
        salario: 1.300,
        emFerias: false
    }
]);

// Livros:

db.livros.insertMany([
    {
        titulo:"Georger Orwelle",
        lancamento: "30-02-1985",
        editora: "letras",
        enredo: "Em um país controlado por um regime totalitário, um homem vai se rebelar contra o sistema. Mas cada ação e até cada pensamento dele está sendo vigiado",
        genero:["Ficção científica", "Ficção distópica", "Ficção Científica Social"],
        avaliacaoLeitores: 9.7,
        avaliacaoEspecialistas: 8.0,
        locador: "sonia"
    },
    {
        titulo:"Dons Quixote de la Marcha",
        lancamento: "14-08-1986",
        editora: "montes",
        enredo: "Um dos maiores clássicos da literatura espanhola, Dom Quixote conta a história de um cavaleiro que leu demasiados romances e enlouqueceu. ",
        genero:["Romance", "Literatura infantil"],
        avaliacaoLeitores: 6.8,
        avaliacaoEspecialistas: 9.8
    },
    {
        titulo:"El Pequena Príncipa",
        lancamento: "30-11-1974",
        editora: "autencia",
        enredo: "Esse livro vale tanto pelas palavras quanto pelas ilustrações. Embora seja (oficialmente) um livro infantil, O Pequeno Príncipe analisa questões profundas sobre a vida humana.",
        genero:["Conto de fadas", "Fábula"],
        avaliacaoLeitores:8.2,
        avaliacaoEspecialistas: 5.4
    },
    {
        titulo:"Dona Casmurra",
        lancamento: "25-07-1949",
        editora: "atir",
        enredo: "Existem muitos livros que exploram o ciúme no casamento, mas poucos o fazem tão bem como Dom Casmurro. ",
        genero:["Romance", "Ficção", "Memórias"],
        avaliacaoLeitores: 5.1,
        avaliacaoEspecialistas: 7.0,
        locador: "Agatha"
    },
    {
        titulo:"O Bandolina do Capitão Corellino",
        lancamento: "20-01-1990",
        editora: "folha",
        enredo: "Com um estilo e uma linguagem muito distintos, O Bandolim do Capitão Corelli conta a história do amor entre duas pessoas em lados opostos da 2ª Guerra Mundial. ",
        genero:["Romance", "Ficção histórica"],
        avaliacaoLeitores: 7.0,
        avaliacaoEspecialistas: 7.6,
        locador: "Adam"
    },
    {
        titulo:"O bonde de Monte Crista",
        lancamento: "29-05-1990",
        editora: "lebook",
        enredo: "Amor, vingança, traição e tesouro! Edmond Dantès perde tudo quando é traído por um companheiro invejoso.",
        genero:["Mistério", "Ficção de aventura"],
        avaliacaoLeitores: 7.8,
        avaliacaoEspecialistas: 9.6,
        locador: "Alan"
    },
    {
        titulo:"Uma Estuda de Vermelho",
        lancamento: "07-07-1984",
        editora: "zar",
        enredo: "A primeira história do famoso detetive Sherlock Holmes e seu fiel companheiro, John Watson. ",
        genero:["Suspense", "Mistério", "Ficção policial"],
        avaliacaoLeitores: 7.0,
        avaliacaoEspecialistas: 7.2
    },
    {
        titulo:"El rocesso",
        lancamento: "29-02-1896",
        editora: "bolso",
        enredo: "Uma crítica à burocracia, O Processo conta a história de Joseph K., preso e julgado por um crime que desconhece.",
        genero:["Ficção Absurdista", "Ficção distópica"],
        avaliacaoLeitores: 7.0,
        avaliacaoEspecialistas: 3.8,
        locador: "Alexa"
    },
    {
        titulo:"Sem Ano de Solidoes",
        lancamento: "13-08-1852",
        editora: "recorde",
        enredo: "Nessa obra-prima de Gabriel García Márquez encontramos o retrato de 7 gerações de uma família colombiana. ",
        genero:["Ficção épica", "Realismo mágico"],
        avaliacaoLeitores: 6.0,
        avaliacaoEspecialistas: 7.8,
        locador: "sonia"
    }

    {
        titulo:"Orgulhos e Preconceitos",
        lancamento: "10-05-1975",
        editora: "claret",
        enredo: "Elizabeth Bennet vive com sua mãe, pai e irmãs no campo, na Inglaterra. Por ser uma das filhas mais velhas, ela enfrenta uma crescente pressão de seus pais para se casar.",
        genero:[ "satira", "romance", "ficcao cientifica"],
        avaliacaoLeitores: 8.5,
        avaliacaoEspecialistas: 8.1,
        locador: "Gerson"
    }
]);