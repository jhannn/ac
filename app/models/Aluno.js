var Aluno = function(matricula, nome, curso, historico) {
  this.matricula = matricula;
  this.nome = nome;
  this.curso = curso;
  this.historico=historico;
};

module.exports = Aluno;