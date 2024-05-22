export default class LoginUsuarioPage{


inputEmail = '[placeholder="E-mail"]'
inputSenha = '[placeholder="Password"]'
buttonLogin =  'button.login-button'


msgEmailObrigatorio = '#root > div > main > div > form > div:nth-child(1) > span'
mgsSenhaObrigatoria =  '#root > div > main > div > form > div:nth-child(2) > span'
buttonOk = '#root > div > main > div > form > div.modal-overlay > div > div.modal-actions > button'

msghome = '#root > div > main > p'

digitarEmail(email) {
    cy.get(this.inputEmail).type(email);
}

digitarSenha(senha) {
    cy.get(this.inputSenha).type(senha);
}

clicarBotaoLogin() {
    cy.get(this.buttonLogin).click();
}



validarmensagemInformarEmail(){
    cy.contains(this.msgEmailObrigatorio, 'Informe o e-mail').should('be.visible');
  }  


  validarmensagemInformarSenha(){
    cy.contains(this.mgsSenhaObrigatoria, 'Informe a senha').should('be.visible'); 
}


validarmensagemErroLogin(){
    cy.on('window:alert', mensagem =>{
        expect(mensagem).to.equal('Falha ao autenticar.')
         });
        cy.get(this.buttonOk).click();  
}

validarmensagemLoginSucesso(){
    cy.contains(this.msghome, 'Ops! Parece que ainda não temos nenhum filme.').should('be.visible'); 
}
efetuarLogin(email,senha){
    this.digitarEmail(email);
    this.digitarSenha(senha);
    this.clicarBotaoLogin();

}

}