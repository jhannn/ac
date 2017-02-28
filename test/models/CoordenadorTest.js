var assert = require('assert');
var should = require('should');

var Coordenador = require('../../app/models/Coordenador.js');
var Professor = require('../../app/models/Professor.js');
var Curso = require('../../app/models/Curso.js');

describe('# Teste da classe Coordenador', function() {
  describe('## Construtores', function() {
      it('Coordenador VALIDO', function() {
      	var curso = new Curso('Tads');
      	var professor = new Professor('54147', 'juninho');
        var coordenador = new Coordenador(professor, curso);
        coordenador.should.not.be.null;
      });
  });
});