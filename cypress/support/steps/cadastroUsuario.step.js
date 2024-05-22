import {
    Given,
    When,
    Then,
    Before,
    After,
  } from '@badeball/cypress-cucumber-preprocessor';

  import CadastroUsuarioPage  from '../pages/cadastroUsuario.page'

  import { faker } from '@faker-js/faker';
 
  const paginaCadastroUsuario = new CadastroUsuarioPage();



Given('que acessei a pagina de registo de usuario', function () {
    cy.visit('/register');
    });  
  
When('informar um novo nome', function () {
  var nome = faker.person.fullName();
  paginaCadastroUsuario.digitarNome(nome)
 });
When('informar um novo email', function () {
  var email = faker.internet.email().toLowerCase();
  paginaCadastroUsuario.digitarEmail(email)
});
When('informar uma nova senha', function () {
  paginaCadastroUsuario.digitarSenha(123456)
});
When('confirmar a senha', function () {
  paginaCadastroUsuario.confirmarSenha(123456)
});
When('confirmar a operação', function () {
  paginaCadastroUsuario.clicarBotaoCadastrar();
});
Then('o usuário será cadastrado', function () {
  paginaCadastroUsuario.validarMensagem();
});

When('informar um novo nome contendo letras e caractere especial', function (){
paginaCadastroUsuario.digitarNome('Banana @#$')
});

When('informar um novo nome contendo caractere especial', function (){ 
  paginaCadastroUsuario.digitarNome('@#$')
});

When('informar um novo nome contendo números', function (){
  paginaCadastroUsuario.digitarNome('123 456')
}); 

When('informar um novo nome contendo letras e números', function (){
  paginaCadastroUsuario.digitarNome('Francisco 13')
});

When('informar um novo nome contendo caractere especial e números', function (){
  paginaCadastroUsuario.digitarNome('&* 789')
});

When('não informar um novo nome', function (){
});
Then('a mensagem Informe o nome deverá ser vizualizada', function () {
  paginaCadastroUsuario.validarmensagemInformarNome()
});

When('não informar um novo email', function (){
});
Then('a mensagem Informe o e-mail deverá ser vizualizada', function () {
  paginaCadastroUsuario.validarmensagemInformarEmail()
});

When('informar um novo email inválido', function (){
  paginaCadastroUsuario.digitarEmail('franciscodilva@.com')
});
Then('a mensagem Não foi possível cadastar o usuário deverá ser vizualizada', function () {
  paginaCadastroUsuario.validarmensagemErroCadastro()
});

When('nao informar uma nova senha', function (){
});
Then('a mensagem Informe a senha deverá ser vizualizada', function () {
  paginaCadastroUsuario.validarmensagemInformarSenha()
});

When('confirmar a senha com uma senha diferente', function (){
  paginaCadastroUsuario.confirmarSenha(456789)
});
Then('a mensagem As senhas devem ser iguais deverá ser vizualizada', function () {
  paginaCadastroUsuario.validarmensagemSenhasIguais()
});

When('informar uma nova senha com 5 caracteres', function (){
  paginaCadastroUsuario.digitarSenha(45678)
});
Then('a mensagem A senha deve ter pelo menos 6 dígitos deverá ser vizualizada', function () {
  paginaCadastroUsuario.validarmensagemSenhaInvalida()
});

When('informar uma nova senha com 7 caracteres', function (){
  paginaCadastroUsuario.digitarSenha(1234567)
});
When('confirmar a senha com 7 caracteres', function (){
  paginaCadastroUsuario.confirmarSenha(1234567)
});

