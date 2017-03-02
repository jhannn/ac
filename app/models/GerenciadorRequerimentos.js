var Certificacao = require('./Certificacao.js');

var GerenciadorRequerimentos = function(requerimentos, professores) {
	this.requerimentos=requerimentos || [];
	this.professores=professores || [];
	this.certificacoes=[];
};

var gerenciadorRequerimentos= new GerenciadorRequerimentos();

GerenciadorRequerimentos.prototype.verificarRequisitoTipoSemestre=function(aluno, data){
	var aux=[];
	var arrayAux=this.requerimentos;
	if(arrayAux.length!=0){
		for (i = 0; i < this.requerimentos.length; i++) { 
			if(arrayAux[i].aluno==aluno && arrayAux[i].data.getTime()>(data.setMonth(data.getMonth() - 6)))
				aux.push(arrayAux[i]);
		}
		if(aux.length>3){
			return false;
		}
	}
	return true;
};

GerenciadorRequerimentos.prototype.listarRequerimentosEmAberto = function() {
	var aux=[];
	var arrayAux=this.requerimentos;
	if(arrayAux.length!=0){
		for (i = 0; i < arrayAux.length; i++) { 
			if(arrayAux[i].situacao=='aberto')
				aux.push(arrayAux[i]);
		}
	}
	return aux;
};

GerenciadorRequerimentos.prototype.aceitarRequerimento = function(requerimento, data, prof1, prof2, prof3) {
	requerimento.situacao='Em andamento';
	var certificacao = new Certificacao(requerimento.aluno, requerimento.disciplina, this.escolherProfessores(prof1, prof2, prof3), data);
	return this.certificacoes.push(certificacao);
};

GerenciadorRequerimentos.prototype.escolherProfessores = function(prof1, prof2, prof3) {
	var aux=[];
	var arrayAux=this.professores;
	if(arrayAux.length!=0){
		for (i = 0; i < arrayAux.length; i++) { 
			if(arrayAux[i].matricula==prof1 || arrayAux[i].matricula==prof2 || arrayAux[i].matricula==prof3)
				aux.push(arrayAux[i]);
		}
	}
	return aux;
};

module.exports = GerenciadorRequerimentos;