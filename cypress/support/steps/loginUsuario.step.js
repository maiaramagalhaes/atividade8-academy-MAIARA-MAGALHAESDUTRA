
import {
  Given,
  When,
  Then,
  Before,
  After,
} from '@badeball/cypress-cucumber-preprocessor';

import { faker } from '@faker-js/faker';

import CadastroUsuarioPage  from '../pages/cadastroUsuario.page'
import LoginUsuarioPage  from '../pages/loginUsuario.page'

const paginaCadastroUsuario = new CadastroUsuarioPage();
const paginaLoginUsuario = new  LoginUsuarioPage();

let nomeUsuario =  faker.internet.userName();
let emailUsuario = faker.internet.email();
let senhaUsuario = '123456'



  Given('que acessei a pagina de login', function () {
    cy.visit('/login');
    });  
  
  When('preencho um email', function(){
    paginaLoginUsuario.digitarEmail('fulano635@raro.com')
  })

  When('preencho uma senha', function(){
    paginaLoginUsuario.digitarSenha('123456')
  })

  When('aciono a opção de efetuar login', function(){
    paginaLoginUsuario.clicarBotaoLogin();
  })

  Then('o usuario nao será autenticado',function(){
    paginaLoginUsuario.validarmensagemErroLogin();
  })


When('preencho um email não valido',function(){
  paginaLoginUsuario.digitarEmail('fulano635@rarocom')
})

When('prencho uma senha invalida', function(){
  paginaLoginUsuario.digitarSenha('senha')
})

When('não preencho um email',function(){
 
})

When('não preencho uma senha', function(){

})
Then('verei mensagem informando que o e-mail e a senha são de preenchimento obrigatorio',function(){
  paginaLoginUsuario.validarmensagemInformarEmail();
  paginaLoginUsuario.validarmensagemInformarSenha();
})

When('preencho um e-mail de um usuario cadastrado', function(){
  paginaCadastroUsuario.cadastrarUsuario(nomeUsuario,emailUsuario,senhaUsuario);
  paginaLoginUsuario.digitarEmail(emailUsuario);

})

When('preencho a senha deste usuario', function(){
  
  paginaLoginUsuario.digitarSenha(senhaUsuario);

})

Then('o usuario sera autetnicado',function(){
  paginaLoginUsuario.validarmensagemLoginSucesso();
  
})