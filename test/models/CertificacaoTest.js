var assert = require('assert');
var should = require('should');

var Certificacao = require('../../app/models/Certificacao.js');

describe('# Teste da classe Certificacao', function() {
  describe('## Construtores', function() {
      it('Certificacao VALIDO', function() {
      	var data = new Date();
      	var professor1 = new Professor('54147', 'juninho');
      	var professor2 = new Professor('21848', 'pedro');
      	var professor3 = new Professor('68713', 'mano');
      	var professores = [professor1, professor2, professor3];
        var certificacao = new Certificacao(aluno, disciplina, professores, data);
        certificacao.should.not.be.null;
      });
  });
});