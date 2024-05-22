export default class GerenciarUsuarioPage{

inputNome = '#root > div > main > div > form > div:nth-child(1) > input'

inputSenha = '#root > div > main > div > form > div:nth-child(5) > input'

inputConfirmarSenha = '#root > div > main > div > form > div:nth-child(6) > input'

buttonAlterarSenha =  'button.account-password-button'
buttonCancelar = 'button.account-password-button-cancel"'
buttonSalvar = 'button.account-save-button'
buttonOk = '#root > div > main > div > div.modal-overlay > div > div.modal-actions > button'
linkPerfil = '[href="/profile"]'
linkGerenciarConta = '[href="/account"]'
mensagemNome = '#root > div > main > div > form > div:nth-child(1) > span'
mensagemSenhaIguais = '#root > div > main > div > form > div:nth-child(6) > span'
mensagemSenhaInvalida = '#root > div > main > div > form > div:nth-child(5) > span'


clicarBotaoAlterarSenha() {
    cy.get(this.buttonAlterarSenha).click();
}

clicarBotaoCancelar() {
    cy.get(this.buttonCancelar).click();
}

digitarNovoNome(nome){
    cy.get(this.inputNome).clear();
    cy.get(this.inputNome).type(nome)
}


digitarNovaSenha(senha){
    cy.get(this.inputSenha).type(senha)
}

confrmarNovaSenha(novaSenha){
    cy.get(this.inputConfirmarSenha).type(novaSenha)
}
clicarBotaoSalvar(){
cy.get(this.buttonSalvar).click();
}
validarmensagemInformacoesAtualizadas(){
    cy.on('window:alert', mensagem =>{
        expect(mensagem).to.equal('Informaçoes atualizadas!')
         });
        cy.get(this.buttonOk).click(); 
}
clicarlinkGerenciarConta(){
cy.get(this.linkGerenciarConta).click();    
}

clicarlinkPerfil(){
    cy.get(this.linkPerfil).click()
}
validarmensagemNome(){
    cy.contains(this.mensagemNome, 'Informe o nome').should('be.visible');
}
validarmensagemSenhaIguais(){
    cy.contains(this.mensagemSenhaIguais, 'As senhas devem ser iguais').should('be.visible');
}
validarmensagemSenhaInvalida(){
    cy.contains(this.mensagemSenhaInvalida, 'As senhas devem ser iguais').should('be.visible');
}
}