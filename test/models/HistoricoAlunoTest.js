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
        var alunoDisciplinas = [];
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[0], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[1], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[2], 'aprovado'));
      	var historico = new HistoricoAluno(alunoDisciplinas);
        historico.should.not.be.null;
      });
  });

  describe('## Funcoes', function() {
      it('Verificar Requisito CH VALIDO', function() {
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
        var requisitoCH=historico.verificarRequisitoCH();
        requisitoCH.should.be.eql(true);
      });

      it('Verificar Requisito CH Invalida', function() {
        var curso = new Curso('Tads', 2160);
        var anexo = new Anexo('Ementa', 'Conteudo');
        var disciplinas=[];
        disciplinas.push(new Disciplina(2016, 'Bd1', 2000, anexo, curso));
        disciplinas.push(new Disciplina(2016, 'Bd2', 1000, anexo, curso));
        disciplinas.push(new Disciplina(2016, 'Prog', 80, anexo, curso));
        var alunoDisciplinas = [];
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[0], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[1], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[2], 'aprovado'));
        var historico = new HistoricoAluno(alunoDisciplinas);
        var requisitoCH=historico.verificarRequisitoCH();
        requisitoCH.should.be.eql(false);
      });

      it('Verificar Total CH', function() {
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
        var totalCH=historico.getCH();
        totalCH.should.be.eql(240);
      });

      it('Verificar Requisito Disciplina Valida', function() {
        var curso = new Curso('Tads', 2160);
        var anexo = new Anexo('Ementa', 'Conteudo');
        var disciplinas=[];
        disciplinas.push(new Disciplina(2016, 'Bd1', 80, anexo, curso));
        disciplinas.push(new Disciplina(2016, 'Bd2', 80, anexo, curso));
        disciplinas.push(new Disciplina(2016, 'Prog', 80, anexo, curso));
        disciplinaASerTestada=new Disciplina(2016, 'Log', 80, anexo, curso);
        var alunoDisciplinas = [];
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[0], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[1], 'aprovado'));
        alunoDisciplinas.push(new AlunoDisciplina( disciplinas[2], 'aprovado'));
        var historico = new HistoricoAluno(alunoDisciplinas);
        var requisitoDisc=historico.verificarRequisitoDisciplina(disciplinaASerTestada);
        requisitoDisc.should.be.eql(true);
      });

      it('Verificar Requisito Disciplina Invalida', function() {
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
        var requisitoDisc=historico.verificarRequisitoDisciplina(disciplinas[0]);
        requisitoDisc.should.be.eql(false);
      });
  });
});