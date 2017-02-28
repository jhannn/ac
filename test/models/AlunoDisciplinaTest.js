var assert = require('assert');
var should = require('should');

var AlunoDisciplina = require('../../app/models/AlunoDisciplina.js');

describe('# Teste da classe AlunoDisciplina', function() {
  describe('## Construtores', function() {
      it('AlunoDisciplina VALIDO', function() {
      	var curso = new Curso('Tads', 2160);
		var aluno = new Aluno('20131014040048', 'Johann Guerra');
        var ementa = new Anexo('Ementa', 'Conteudo');
        var disciplina = new Disciplina(2016, 'Bd1', 80, ementa curso);
        var alunoDisciplina = new AlunoDisciplina(aluno, disciplina, 'aprovado', 'certificado');
        alunoDisciplina.should.not.be.null;
      });
  });
});