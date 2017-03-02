var GerenciadorRequerimentos = function(requerimentos) {
	this.requerimentos=requerimentos || [];
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
			console.log(arrayAux[i]);
			if(arrayAux[i].situacao=='aberto')
				aux.push(arrayAux[i]);
		}
	}
	return aux;
};

module.exports = GerenciadorRequerimentos;