var pessoa = {
    nome: "Gabrielli D'Marco",
    idade: 16,
    gastaMuito: true,
    produtos: ["eudira", "grasteze", "elaseve", "ceravê"],
    preços: {eudira: 200,
           grasteze: 1200,
           elaseve: 150,
           ceravê: 400},
    dinheiro: null,
    apresentacao: function(){
        return `Este é o arquivo de ${this.nome}, que tem ${this.idade} anos de idade. É conhecida por gastar muito (${this.gastaMuito}) com os produtos da ${this.produtos[0]}, ${this.produtos[1]}, ${this.produtos[2]} e ${this.produtos[3]}. Quantidade no banco é de ${this.dinheiro}, pois gastou tudo com os produtos.`
    }
}
console.log(pessoa.apresentacao())