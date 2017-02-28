var assert = require('assert');
var should = require('should');

var Anexo = require('../../app/models/Anexo.js');

describe('# Teste da classe Anexo', function() {
  describe('## Construtores', function() {
      it('Anexo VALIDO', function() {
		var anexo = new Anexo('Prova', 'Conteudo');
        anexo.should.not.be.null;
      });
  });
});