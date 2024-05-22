import {
    Given,
    When,
    Then,
    Before,
    After,
  } from '@badeball/cypress-cucumber-preprocessor';

  import { faker } from '@faker-js/faker';

  import CadastroUsuarioPage  from '../pages/cadastroUsuario.page'
  import GerenciarUsuarioPage from '../pages/gerenciarUsuario.page'
  import LoginUsuarioPage from '../pages/loginUsuario.page'
  
  const paginaCadastroUsuario = new CadastroUsuarioPage();
  const paginaGerenciarUsuario = new GerenciarUsuarioPage();
  const paginaLoginUsuario = new  LoginUsuarioPage();

  let nomeUsuario =  faker.internet.userName();
  let emailUsuario = faker.internet.email();
  let senhaUsuario = '123456'


before( function (){
  paginaCadastroUsuario.cadastrarUsuario(nomeUsuario,emailUsuario,senhaUsuario);
})  

Given('que usuário está logado e acessou a página de gerenciar conta', function () {
  cy.visit('/login');
  paginaLoginUsuario.efetuarLogin(emailUsuario,senhaUsuario);
   paginaGerenciarUsuario.clicarlinkPerfil();
  paginaGerenciarUsuario.clicarlinkGerenciarConta();
}); 

When('altero o nome', function(){
  paginaGerenciarUsuario.digitarNovoNome('Francisco Jose')
});
When('clico no botão salvar',function (){
paginaGerenciarUsuario.clicarBotaoSalvar()
});
Then('o nome do usuário será atualizado', function(){
  paginaGerenciarUsuario.validarmensagemInformacoesAtualizadas()
});
When('altero o nome com caracter especial', function (){
  paginaGerenciarUsuario.digitarNovoNome('!@#')
});
When('altero o nome com caracter letra e caracter especial', function (){
  paginaGerenciarUsuario.digitarNovoNome('Joao $%')
});
When('altero o nome com caracter especial e números', function (){
  paginaGerenciarUsuario.digitarNovoNome('@13')
});
When('altero o nome com letras e números', function (){
  paginaGerenciarUsuario.digitarNovoNome('Ana 78')
});
When('clico no botão alterar senha', function (){
  paginaGerenciarUsuario.clicarBotaoAlterarSenha()
});
When('digito a nova senha', function (){
  paginaGerenciarUsuario.digitarNovaSenha('789456')
  senhaUsuario = '789456'
});
When('confirmo a nova senha', function (){
  paginaGerenciarUsuario.confrmarNovaSenha('789456')
  });
Then('a senha será atualizada', function (){
  paginaGerenciarUsuario.validarmensagemInformacoesAtualizadas()
});
When('digito a senha nova', function (){
  paginaGerenciarUsuario.digitarNovaSenha('123456')
});
When('confirmo a nova senha diferente', function (){
  paginaGerenciarUsuario.confrmarNovaSenha('789456')
});
Then('a mensagem As senhas devem ser iguais será visualizada', function (){
  paginaGerenciarUsuario.validarmensagemSenhaIguais()
});
When('digito a nova senha com 5 digitos', function (){
  paginaGerenciarUsuario.digitarNovaSenha('123456')
});
When('confirmo a nova senha com 5 digitos', function (){
  paginaGerenciarUsuario.confrmarNovaSenha('789456')
});
Then('a mensagem A senha deve ter pelo menos 6 dígitos será visualizada', function (){
  paginaGerenciarUsuario.validarmensagemSenhaIguais()
});