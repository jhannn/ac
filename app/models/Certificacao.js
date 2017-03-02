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
  this.nota=null;
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
  var auxDate=new Date(this.dataPublicacaoAvaliacao);
	if(auxDate.setDate(auxDate.getDate() + 7)>data){
		this.alunoNotificado = new Date(data);
    return true;
	}
	return false;
};

Certificacao.prototype.definirDataAvaliacao = function(data) {
	this.dataRealizacaoAvaliacao = new Date(data);
  return true;
};

Certificacao.prototype.publicarResultado = function(data, resultado, nota) {
  var auxDate=new Date(this.dataRealizacaoAvaliacao);
	if(auxDate.setDate(auxDate.getDate() + 7)>data){
		this.resultado=resultado;
    this.nota=nota;
    return true;
	}
	return false;
};

Certificacao.prototype.fecharCertificacao = function() {
	if(this.resultado==null){
		return false;
	}
  this.situcao='Fechada';
  return true;
};

module.exports = Certificacao;
