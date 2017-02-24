var Aluno = function(matricula, nome) {
  this.matricula = matricula;
  this.nome = nome;
};

Aluno.prototype.setMatricula = function(matricula) {
	this.matricula=matricula;
};

module.exports = Aluno;