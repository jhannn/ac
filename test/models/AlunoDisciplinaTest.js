var assert = require('assert');
var should = require('should');

var AlunoDisciplina = require('../../app/models/AlunoDisciplina.js');
var Curso = require('../../app/models/Curso.js');
var Disciplina = require('../../app/models/Disciplina.js');
var Anexo = require('../../app/models/Anexo.js');

describe('# Teste da classe AlunoDisciplina', function() {
  describe('## Construtores', function() {
      it('AlunoDisciplina VALIDO', function() {
      	var curso = new Curso('Tads', 2160);
        var anexo = new Anexo('Ementa', 'Conteudo');
        var disciplina = new Disciplina(2016, 'Bd1', 80, anexo, curso);
        var alunoDisciplina = new AlunoDisciplina( disciplina, 'aprovado');
        alunoDisciplina.should.not.be.null;
      });
  });
});