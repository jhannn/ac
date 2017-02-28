var assert = require('assert');
var should = require('should');

var GerenciadorRequerimentos = require('../../app/models/GerenciadorRequerimentos.js');

describe('# Teste da classe GerenciadorRequerimentos', function() {
  describe('## Construtores', function() {
      it('Gerenciador de Requerimentos VALIDO', function() {
        var gerenciadorRequerimentos = new GerenciadorRequerimentos();
		gerenciadorRequerimentos.should.not.be.null;
      });
  });
});