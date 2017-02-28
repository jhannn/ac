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
});