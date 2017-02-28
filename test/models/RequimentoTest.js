var assert = require('assert');
var should = require('should');

var Requerimento = require('../../app/models/Requerimento.js');

describe('# Teste da classe Requerimento', function() {
  describe('## Construtores', function() {
      it('Requerimento VALIDO', function() {
      	var data = new Date();
      	var aluno = new Aluno('20131014040048', 'Johann Guerra');
      	var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
        var requerimento = new Requerimento(aluno, 'aproveitamento', disciplina, data);
        requerimento.should.not.be.null;
      });
  });
});