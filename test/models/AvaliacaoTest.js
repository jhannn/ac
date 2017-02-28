var assert = require('assert');
var should = require('should');

var Avaliacao = require('../../app/models/Avaliacao.js');
var Curso = require('../../app/models/Curso.js');
var Disciplina = require('../../app/models/Disciplina.js');
var Anexo = require('../../app/models/Anexo.js');

describe('# Teste da classe Avaliacao', function() {
  describe('## Construtores', function() {
      it('Avaliacao VALIDO', function() {
      	var data = new Date();
      	var curso = new Curso('Tads');
      	var ementa = new Anexo('Ementa', 'Conteudo');
        var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
        var avaliacao = new Avaliacao(disciplina, data);
        avaliacao.should.not.be.null;
      });
  });
});