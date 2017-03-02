var Avaliacao = require('./Avaliacao.js');

var Certificacao = function(aluno, disciplina, professores, dataCriacao) {
  this.aluno = aluno;
  this.disciplina = disciplina;
  this.professores = professores;
  this.dataCriacao = dataCriacao;
  this.dataPublicacaoAvaliacao = null;
  this.alunoNotificado = null;
  this.dataRealizacaoAvaliacao = null;
  this.avaliacao = null;
  this.situcao = 'Em andamento';
  this.resultado = null;
};

Certificacao.prototype.publicarAvaliacao = function(data, prova) {
	if(this.dataCriacao.setDate(this.dataCriacao.getDate() + 7)>data){
		var avaliacao = new Avaliacao(this.disciplina, data, prova);
		this.dataPublicacaoAvaliacao=data;
		return this.avaliacao=avaliacao;
	}
	return null;
};

module.exports = Certificacao;