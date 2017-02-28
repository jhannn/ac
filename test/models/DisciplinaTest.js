var assert = require('assert');
var should = require('should');

var Disciplina = require('../../app/models/Disciplina.js');

describe('# Teste da classe Disciplina', function() {
  describe('## Construtores', function() {
      it('Disciplina VALIDO', function() {
        var curso = new Curso('Tads', 2160);
      	var ementa = new Anexo('Ementa', 'Conteudo');
        var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
        disciplina.should.not.be.null;
      });
  });
});