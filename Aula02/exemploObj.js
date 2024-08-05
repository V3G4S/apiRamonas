var personagem = 
    {
        nome: "Mercy",
        gênero: "Feminino",
        função: "Suporte",
        características: ["voar", "curar", "reviver aliados"],
        saudacao: function () {
            console.log(`Você escolheu ${this.nome} como personagem. Um personagem do gênero ${this.gênero} e sua função de ${this.função}, com suas características únicas de ${this.características[0]}, ${this.características[1]} e ${this.características[2]}.`)
        }
    }
console.log(personagem.saudacao())