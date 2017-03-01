var GerenciadorRequerimentos = function(requerimentos) {
	this.requerimentos=this.requerimentos || [];
};

var gerenciadorRequerimentos= new GerenciadorRequerimentos();

GerenciadorRequerimentos.prototype.verificarRequisitoTipoSemestre=function(aluno, data){
	var aux=[];
	for (var i in this.requerimentos){
		if(i.aluno==aluno && i.data.getTime()>(data.setMonth(data.getMonth() - 6)))
			aux.push(i);
	}
	if(aux.length()>3){
		return false;
	}
	return true;
};

module.exports = GerenciadorRequerimentos;