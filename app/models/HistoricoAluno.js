var HistoricoAluno = function(alunoDisciplina) {
	this.alunoDisciplina=alunoDisciplina || [];
};

HistoricoAluno.prototype.verificarRequisitoCH=function(){
	if(this.alunoDisciplina.length!=0){
		if((this.alunoDisciplina[0].disciplina.curso.cargaHoraria)/2>=this.getCH()){
			return true;
		}
	}else{
		return true;
	}
	return false;
};

HistoricoAluno.prototype.getCH=function(){
	var totalCH=0;
	var aux=this.alunoDisciplina;
	for (i = 0; i < this.alunoDisciplina.length; i++) { 
   		totalCH+=aux[i].disciplina.cargaHoraria;
	};
	return totalCH;
};

HistoricoAluno.prototype.verificarRequisitoDisciplina=function(disciplina){
	var aux=this.alunoDisciplina;
	for (i = 0; i < this.alunoDisciplina.length; i++) { 
   		if(aux[i].disciplina==disciplina)
   			return false;
	};
	return true;
};

module.exports = HistoricoAluno;
