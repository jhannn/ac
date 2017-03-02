var assert = require('assert');
var should = require('should');

var Aluno = require('../../app/models/Aluno.js');
var Curso = require('../../app/models/Curso.js');
var AlunoDisciplina = require('../../app/models/AlunoDisciplina.js');
var Disciplina = require('../../app/models/Disciplina.js');
var HistoricoAluno = require('../../app/models/HistoricoAluno.js');
var Anexo = require('../../app/models/Anexo.js');

describe('# Teste da classe Aluno', function() {
  describe('## Construtores', function() {
      it('Aluno VALIDO', function() {
      	var curso = new Curso('Tads', 2160);
        var anexo = new Anexo('Ementa', 'Conteudo');
        var disciplinas=[];
        disciplinas.push(new Disciplina(2016, 'Bd1', 80, anexo, curso));
        disciplinas.push(new Disciplina(2016, 'Bd2', 80, anexo, curso));
        disciplinas.push(new Disciplina(2016, 'Prog', 80, anexo, curso));
        var alunoDisciplinas = [];
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[0], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[1], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[2], 'aprovado'));
      	var historico = new HistoricoAluno(alunoDisciplinas);
      	var aluno = new Aluno('20131014040048', 'Johann Guerra', curso, historico);
		aluno.should.not.be.null;
      });
  });
});