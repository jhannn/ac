var assert = require('assert');
var should = require('should');

var GerenciadorRequerimentos = require('../../app/models/GerenciadorRequerimentos.js');
var Curso = require('../../app/models/Curso.js');
var Aluno = require('../../app/models/Aluno.js');
var Anexo = require('../../app/models/Anexo.js');
var Disciplina = require('../../app/models/Disciplina.js');
var Requerimento = require('../../app/models/Requerimento.js');

describe('# Teste da classe GerenciadorRequerimentos', function() {
  describe('## Construtores', function() {
      it('Gerenciador de Requerimentos VALIDO', function() {
      	var data = new Date();
      	var aluno = new Aluno('20131014040048', 'Johann Guerra');
      	var ementa = new Anexo('Ementa', 'Conteudo');
        var curso = new Curso('Tads', 2160);
      	var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
        var requerimento = new Requerimento(aluno, 'aproveitamento', disciplina, data);
        var gerenciadorRequerimentos = new GerenciadorRequerimentos(requerimento);
		gerenciadorRequerimentos.should.not.be.null;
      });
  });
});