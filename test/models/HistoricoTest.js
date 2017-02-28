var assert = require('assert');
var should = require('should');

var Historico = require('../../app/models/Historico.js');

describe('# Teste da classe Historico', function() {
  describe('## Construtores', function() {
      it('Historico VALIDO', function() {
	    	var aluno = new Aluno('20131014040048', 'Johann Guerra');
		    var curso = new Curso('Tads');
      	var professor = new Professor('54147', 'juninho');
        var disciplina = new Disciplina('Bd1', 80, professor, curso);
        var alunoDisciplina = new AlunoDisciplina(aluno, disciplina, 'aprovado');
        var historico = new Historico(alunoDisciplina);
        historico.should.not.be.null;
      });
  });
});