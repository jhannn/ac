var HistoricoAluno = function(alunoDisciplina) {
	this.alunoDisciplina=alunoDisciplina || [];
};

HistoricoAluno.prototype.verificarRequisitoCH=function(){
	if(this.aluno.curso.cargaHoraria>this.getCH()){
		return true;
	}
	return false;
};

HistoricoAluno.prototype.getCH=function(){
	var totalCH=0;
	for (var i in this.alunoDisciplina){
		totalCH=totalCH+i.disciplina.cargaHoraria;
	}
	return totalCH;
};

HistoricoAluno.prototype.verificarRequisitoDisciplina=function(disciplina){
	for (var i in this.alunoDisciplina){
		if(i.disciplina==disciplina)
			return false;
	}
	return true;
};

module.exports = HistoricoAluno;
