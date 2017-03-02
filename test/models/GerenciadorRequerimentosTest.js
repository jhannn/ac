var assert = require('assert');
var should = require('should');

var GerenciadorRequerimentos = require('../../app/models/GerenciadorRequerimentos.js');
var Curso = require('../../app/models/Curso.js');
var Aluno = require('../../app/models/Aluno.js');
var Anexo = require('../../app/models/Anexo.js');
var Disciplina = require('../../app/models/Disciplina.js');
var Requerimento = require('../../app/models/Requerimento.js');
var AlunoDisciplina = require('../../app/models/AlunoDisciplina.js');
var HistoricoAluno = require('../../app/models/HistoricoAluno.js');

describe('# Teste da classe GerenciadorRequerimentos', function() {
  describe('## Construtores', function() {
      it('Gerenciador de Requerimentos VALIDO', function() {
        var data = new Date();
        var ementa = new Anexo('Ementa', 'Conteudo');
        var curso = new Curso('Tads', 2160);
        var disciplinas=[];
        disciplinas.push(new Disciplina(2016, 'Bd1', 80, ementa, curso));
        var alunoDisciplinas = [];
        alunoDisciplinas.push(new AlunoDisciplina(disciplinas[0], 'aprovado'));
        var historico = new HistoricoAluno(alunoDisciplinas);
        var aluno = new Aluno('20131014040048', 'Johann Guerra', curso, historico);
        var disciplinaParaRequerimento = new Disciplina(2016, 'Bd1', 80, ementa, curso);
        var requerimentos = [];
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        var gerenciadorRequerimentos = new GerenciadorRequerimentos(requerimentos);
		    gerenciadorRequerimentos.should.not.be.null;
      });
  });

  describe('## Funcoes', function() {
      it('Verificar Requisito Tipo Semestre VALIDO', function() {
        var data = new Date();
        var ementa = new Anexo('Ementa', 'Conteudo');
        var curso = new Curso('Tads', 2160);
        var disciplinas=[];
        disciplinas.push(new Disciplina(2016, 'Bd1', 80, ementa, curso));
        var alunoDisciplinas = [];
        alunoDisciplinas.push(new AlunoDisciplina(disciplinas[0], 'aprovado'));
        var historico = new HistoricoAluno(alunoDisciplinas);
        var aluno = new Aluno('20131014040048', 'Johann Guerra', curso, historico);
        var disciplinaParaRequerimento = new Disciplina(2016, 'Bd1', 80, ementa, curso);
        var requerimentos = [];
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        var gerenciadorRequerimentos = new GerenciadorRequerimentos(requerimentos);
        var requisitoSemestre=gerenciadorRequerimentos.verificarRequisitoTipoSemestre(aluno, data);
        requisitoSemestre.should.be.eql(true);
      });

      it('Verificar Requisito Tipo Semestre Invalida', function() {
        var data = new Date();
        var ementa = new Anexo('Ementa', 'Conteudo');
        var curso = new Curso('Tads', 2160);
        var disciplinas=[];
        disciplinas.push(new Disciplina(2016, 'Bd1', 80, ementa, curso));
        var alunoDisciplinas = [];
        alunoDisciplinas.push(new AlunoDisciplina(disciplinas[0], 'aprovado'));
        var historico = new HistoricoAluno(alunoDisciplinas);
        var aluno = new Aluno('20131014040048', 'Johann Guerra', curso, historico);
        var disciplinaParaRequerimento = new Disciplina(2016, 'Bd1', 80, ementa, curso);
        var requerimentos = [];
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        var gerenciadorRequerimentos = new GerenciadorRequerimentos(requerimentos);
        var requisitoSemestre=gerenciadorRequerimentos.verificarRequisitoTipoSemestre(aluno, data);
        requisitoSemestre.should.be.eql(false);
      });

      it('Verificar Listar Requerimentos em Aberto', function() {
        var data = new Date();
        var ementa = new Anexo('Ementa', 'Conteudo');
        var curso = new Curso('Tads', 2160);
        var disciplinas=[];
        disciplinas.push(new Disciplina(2016, 'Bd1', 80, ementa, curso));
        var alunoDisciplinas = [];
        alunoDisciplinas.push(new AlunoDisciplina(disciplinas[0], 'aprovado'));
        var historico = new HistoricoAluno(alunoDisciplinas);
        var aluno = new Aluno('20131014040048', 'Johann Guerra', curso, historico);
        var disciplinaParaRequerimento = new Disciplina(2016, 'Bd1', 80, ementa, curso);
        var requerimentos = [];
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        requerimentos.push(new Requerimento(aluno, 'aproveitamento', disciplinaParaRequerimento, data, 'aberto'));
        var gerenciadorRequerimentos = new GerenciadorRequerimentos(requerimentos);
        var listaDeRequisiscoesEmAberto=gerenciadorRequerimentos.listarRequerimentosEmAberto().length;
        listaDeRequisiscoesEmAberto.should.be.eql(4);
      });
  });
});