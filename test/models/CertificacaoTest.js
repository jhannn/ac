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
      var dataCriacao = new Date();
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, new Date(dataCriacao));
      var dataPublicacao = new Date(dataCriacao.setDate(dataCriacao.getDate() + 5));
      var publicarAvaliacao= certificacao.publicarAvaliacao(dataPublicacao, prova);
      publicarAvaliacao.should.be.eql(true);
    });

    it('Publicar Avaliacao Invalido', function() {
      var dataCriacao = new Date();
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, new Date(dataCriacao));
      var dataPublicacao = new Date(dataCriacao.setDate(dataCriacao.getDate() + 10));
      var publicarAvaliacao= certificacao.publicarAvaliacao(dataPublicacao, prova);
      publicarAvaliacao.should.be.eql(false);
    });

    it('Notificar Aluno VALIDO', function() {
      var dataCriacao = new Date();
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, new Date(dataCriacao));
      var dataPublicacao = new Date(dataCriacao.setDate(dataCriacao.getDate() + 5));
      certificacao.dataPublicacaoAvaliacao=new Date(dataPublicacao);
      var dataNotificacao = new Date(dataPublicacao.setDate(dataPublicacao.getDate() + 5));
      var notificarAluno = certificacao.notificarAluno(dataNotificacao);
      notificarAluno.should.be.eql(true);
    });

    it('Notificar Aluno Invalido', function() {
      var dataCriacao = new Date();
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, new Date(dataCriacao));
      var dataPublicacao = new Date(dataCriacao.setDate(dataCriacao.getDate() + 5));
      certificacao.dataPublicacaoAvaliacao=new Date(dataPublicacao);
      var dataNotificacao = new Date(dataPublicacao.setDate(dataPublicacao.getDate() + 8));
      var notificarAluno = certificacao.notificarAluno(dataNotificacao);
      notificarAluno.should.be.eql(false);
    });

    it('Publicar Resultado VALIDO', function() {
      var dataCriacao = new Date();
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, new Date(dataCriacao));
      var dataRealizacao = new Date(dataCriacao.setDate(dataCriacao.getDate() + 5));
      var realizacaoAvaliacao = certificacao.definirDataAvaliacao(dataRealizacao);
      var dataResultado = new Date(dataRealizacao.setDate(dataRealizacao.getDate() + 5));
      var resultadoAvaliacao = certificacao.publicarResultado(dataResultado);
      resultadoAvaliacao.should.be.eql(true);
    });

    it('Publicar Resultado Invalido', function() {
      var dataCriacao = new Date();
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, new Date(dataCriacao));
      var dataRealizacao = new Date(dataCriacao.setDate(dataCriacao.getDate() + 5));
      var realizacaoAvaliacao = certificacao.definirDataAvaliacao(dataRealizacao);
      var dataResultado = new Date(dataRealizacao.setDate(dataRealizacao.getDate() + 10));
      var resultadoAvaliacao = certificacao.publicarResultado(dataResultado);
      resultadoAvaliacao.should.be.eql(false);
    });

    it('Fechar Certificacao VALIDO', function() {
      var dataCriacao = new Date();
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, new Date(dataCriacao));
      certificacao.resultado="10";
      var certificacaoFechada=certificacao.fecharCertificacao();
      certificacaoFechada.should.be.eql(true);
    });

    it('Fechar Certificacao Invalido', function() {
      var dataCriacao = new Date();
      var aluno = new Aluno('20131014040048', 'Johann Guerra');
      var professor1 = new Professor('54147', 'juninho');
      var professor2 = new Professor('21848', 'pedro');
      var professor3 = new Professor('68713', 'mano');
      var professores = [professor1, professor2, professor3];
      var curso = new Curso('Tads', 2160);
      var ementa = new Anexo('Ementa', 'Conteudo');
      var prova = new Anexo('Prova', 'Conteudo');
      var disciplina = new Disciplina(2016, 'Bd1', 80, ementa, curso);
      var certificacao = new Certificacao(aluno, disciplina, professores, new Date(dataCriacao));
      var certificacaoFechada=certificacao.fecharCertificacao();
      certificacaoFechada.should.be.eql(false);
    });
  });
});
