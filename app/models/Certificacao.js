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
  var auxDate=new Date(this.dataCriacao);
	if(auxDate.setDate(auxDate.getDate() + 7)>data){
		var avaliacao = new Avaliacao(this.disciplina, data, prova);
		this.dataPublicacaoAvaliacao = new Date(data);
		this.avaliacao=avaliacao;
    return true;
	}
	return false;
};

Certificacao.prototype.notificarAluno = function(data) {
	if(this.dataPublicacaoAvaliacao.setDate(this.dataPublicacaoAvaliacao.getDate() + 7)>data){
		this.alunoNotificado = new Date(data);
    return true;
	}
	return false;
};

Certificacao.prototype.definirDataAvaliacao = function(data) {
	this.dataRealizacaoAvaliacao = new Date(data);
  return true;
};

Certificacao.prototype.publicarResultado = function(data, resultado) {
	if(this.dataRealizacaoAvaliacao.setDate(this.dataRealizacaoAvaliacao.getDate() + 7)>data){
		this.resultado=resultado;
    return true;
	}
	return false;
};

module.exports = Certificacao;
