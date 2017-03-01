var GerenciadorRequerimentos = require('./GerenciadorRequerimentos.js');

var Requerimento = function(aluno, tipo, disciplina, data) {
	if(!verificarRequisitos){
		return null;
	}
	this.aluno=aluno;
	this.tipo=tipo;
	this.disciplina=disciplina;
	this.data=data;
};

function verificarRequisitos(aluno, tipo, disciplina, data){
	var historico = aluno.historico;
	if(historico.verificarRequisitoCH()){//Requisito de CargaHoraria
		if(historico.verificarRequisitoDisciplina(disciplina)){
			if(tipo=="certificacao"){
				if(gerenciadorRequerimentos.verificarRequisitoTipoSemestre(aluno, data)){
					return true;
				}
			}
			else {
				return true;
			}
		}
	}
	return false;
};

module.exports = Requerimento;