

var pessoa = {
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function() {
      console.log(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade 
      + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' 
      + this.interesses[1] + '.');
    },
    saudacao: function () {
      console.log('Oi! Eu sou ' + this.nome[0] + " " + this.nome[1]+ '.');
    }
  };

  
//pessoa.nome
//pessoa.nome[0]
console.log(pessoa.nome[0] + ' tem ' + pessoa.idade +' anos')
//pessoa.interesses[1]

pessoa.bio()
pessoa.saudacao()