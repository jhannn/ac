var assert = require('assert');
var should = require('should');

var Aluno = require('../../app/models/Aluno.js');

describe('# Teste da classe Aluno', function() {
  describe('## Construtores', function() {
      it('Aluno VALIDO', function() {
        var aluno = new Aluno('20131014040048', 'Johann Guerra');

        aluno.should.not.be.null;
      });
  });

  describe('## Getter and Setter', function() {
      it('Set Matricula', function() {
        var aluno = new Aluno('20131014040048', 'Johann Guerra');
        aluno.setMatricula('20131014040050');
        aluno.should.have.property('matricula').be.eql('20131014040050');
      });
  });
});