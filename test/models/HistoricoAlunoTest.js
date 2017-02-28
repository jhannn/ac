var assert = require('assert');
var should = require('should');

var HistoricoAluno = require('../../app/models/HistoricoAluno.js');
var Aluno = require('../../app/models/Aluno.js');

describe('# Teste da classe Historico', function() {
  describe('## Construtores', function() {
      it('Historico VALIDO', function() {
      	var aluno = new Aluno('20131014040048', 'Johann Guerra');
      	var historico = new HistoricoAluno(aluno);
        historico.should.not.be.null;
      });
  });
});