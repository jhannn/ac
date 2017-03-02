var assert = require('assert');
var should = require('should');

var Certificacao = require('../../app/models/Certificacao.js');
var Professor = require('../../app/models/Professor.js');
var Aluno = require('../../app/models/Aluno.js');
var Disciplina = require('../../app/models/Disciplina.js');
var Anexo = require('../../app/models/Anexo.js');
var Curso = require('../../app/models/Curso.js');


describe('# Teste da classe Certificacao', function() {
  describe('## Construtores', function() {
    it('Certificacao VALIDO', function() {
     var data = new Date();
     var aluno = new Aluno('20131014040048', 'Johann Guerra');
     var professor1 = new Professor('54147', 'juninho');
     var professor2 = new Professor('21848', 'pedro');
     var professor3 = new Professor('68713', 'mano');
     var professores = [professor1, professor2, professor3];
     var curso = new Curso('Tads', 2160);
     var ementa = new Anexo('Ementa', 'Conteudo');
     var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
     var certificacao = new Certificacao(aluno, disciplina, professores, data);
     certificacao.should.not.be.null;
   });
  });

  describe('## Funcoes', function() {
    it('Publicar Avaliacao VALIDO', function() {
      var data = new Date();
      var dataPublicacao = new Date(data.setDate(data.getDate() + 5));
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, data);
      var publicarAvaliacao= certificacao.publicarAvaliacao(dataPublicacao, prova);
      publicarAvaliacao.should.not.be.null;
    });

    it('Publicar Avaliacao Invalido', function() {
      var data = new Date();
      var dataPublicacao = new Date(data.setDate(data.getDate() + 8));
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, data);
      var publicarAvaliacao= certificacao.publicarAvaliacao(dataPublicacao, prova);
      publicarAvaliacao.should.be.null;
    });

    it('Notificar Aluno VALIDO', function() {
      var data = new Date();
      var dataPublicacao = new Date(data.setDate(data.getDate() + 5));
      var dataNotificacao = new Date(dataPublicacao.setDate(dataPublicacao.getDate() + 5));
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, data);
      var publicarAvaliacao = certificacao.publicarAvaliacao(dataPublicacao, prova);
      var notificarAluno = certificacao.notificarAluno(dataNotificacao);
      notificarAluno.should.not.be.null;
    });

    it('Notificar Aluno Invalido', function() {
      var data = new Date();
      var dataPublicacao = new Date(data.setDate(data.getDate() + 5));
      var dataNotificacao = new Date(dataPublicacao.setDate(dataPublicacao.getDate() + 8));
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, data);
      var publicarAvaliacao = certificacao.publicarAvaliacao(dataPublicacao, prova);
      var notificarAluno = certificacao.notificarAluno(dataNotificacao);
      notificarAluno.should.be.null;
    });

    it('Publicar Resultado VALIDO', function() {
      var data = new Date();
      var dataRealizacao = new Date(data.setDate(data.getDate() + 5));
      var dataResultado = new Date(dataRealizacao.setDate(dataRealizacao.getDate() + 5));
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, data);
      var realizacaoAvaliacao = certificacao.definirDataAvaliacao(dataRealizacao);
      var resultadoAvaliacao = certificacao.publicarResultado(dataResultado);
      resultadoAvaliacao.should.not.be.null;
    });

    it('Publicar Resultado Invalido', function() {
      var data = new Date();
      var dataRealizacao = new Date(data.setDate(data.getDate() + 5));
      var dataResultado = new Date(dataRealizacao.setDate(dataRealizacao.getDate() + 8));
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, data);
      var realizacaoAvaliacao= certificacao.definirDataAvaliacao(dataRealizacao, prova);
      var resultadoAvaliacao = certificacao.publicarResultado(dataResultado);
      resultadoAvaliacao.should.be.null;
    });
  });
});