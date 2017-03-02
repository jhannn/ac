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
		console.log(new Date(data));
		this.dataPublicacaoAvaliacao = new Date(data);
		return this.avaliacao=avaliacao;
	}
	return null;
};

Certificacao.prototype.notificarAluno = function(data) {
	if(this.dataPublicacaoAvaliacao.setDate(this.dataPublicacaoAvaliacao.getDate() + 7)>data){
		return this.alunoNotificado = new Date(data);
	}
	return null;
};

Certificacao.prototype.definirDataAvaliacao = function(data) {
	return this.dataRealizacaoAvaliacao = new Date(data);
};

Certificacao.prototype.publicarResultado = function(data, resultado) {
	if(this.dataRealizacaoAvaliacao.setDate(this.dataRealizacaoAvaliacao.getDate() + 7)>data){
		return this.resultado=resultado;
	}
	return null;
};

module.exports = Certificacao;