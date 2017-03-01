var assert = require('assert');
var should = require('should');

var HistoricoAluno = require('../../app/models/HistoricoAluno.js');
var Aluno = require('../../app/models/Aluno.js');
var Curso = require('../../app/models/Curso.js');
var Anexo = require('../../app/models/Anexo.js');
var Disciplina = require('../../app/models/Disciplina.js');
var AlunoDisciplina = require('../../app/models/AlunoDisciplina.js');

describe('# Teste da classe Historico', function() {
  describe('## Construtores', function() {
      it('Historico VALIDO', function() {
      	var curso = new Curso('Tads', 2160);
        var anexo = new Anexo('Ementa', 'Conteudo');
        var disciplinas=[];
        disciplinas.push(new Disciplina(2016, 'Bd1', 80, anexo, curso));
        disciplinas.push(new Disciplina(2016, 'Bd2', 80, anexo, curso));
        disciplinas.push(new Disciplina(2016, 'Prog', 80, anexo, curso));
        console.log(disciplinas);
        var alunoDisciplinas = [];
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[0], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[1], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[2], 'aprovado'));
        console.log(alunoDisciplinas);
      	var historico = new HistoricoAluno(alunoDisciplinas);
        historico.should.not.be.null;
      });
  });
});