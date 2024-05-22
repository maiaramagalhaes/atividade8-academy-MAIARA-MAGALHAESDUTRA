export default class CadastroUsuarioPage{

inputNome = '[placeholder="Nome"]'
inputEmail = '[placeholder="E-mail"]'
inputSenha = '[placeholder="Senha"]'
inputConfirmarSenha = '[placeholder="Confirmar senha"]'

buttonCadastrar =  'button.account-save-button'
buttonOk = '#root > div > main > div > div.modal-overlay > div > div.modal-actions > button'
mensagemInformarNome = '#root > div > main > div > form > div:nth-child(1) > span'
mensagemInformarEmail = '#root > div > main > div > form > div:nth-child(2) > span'
mensagemErroCadastro = 'p class="error-message"'
mensagemInformarSenha = '#root > div > main > div > form > div:nth-child(3) > span'
mensagemSenhasIguais = '#root > div > main > div > form > div:nth-child(4) > span'
mensagemSenhaInvalida = '#root > div > main > div > form > div:nth-child(3) > span'

digitarNome(nome) {
    cy.get(this.inputNome).type(nome);
}

digitarEmail(email) {
    cy.get(this.inputEmail).type(email);
}

digitarSenha(senha) {
    cy.get(this.inputSenha).type(senha);
}

confirmarSenha(senha) {
    cy.get(this.inputConfirmarSenha).type(senha);
}

clicarBotaoCadastrar() {
    cy.get(this.buttonCadastrar).click();
}

validarMensagem(){
  cy.on('window:alert', mensagem =>{
    expect(mensagem).to.equal('Cadastro realizado!')
     });
    cy.get(this.buttonOk).click();   
}
validarmensagemInformarNome(){
    cy.contains(this.mensagemInformarNome, 'Informe o nome').should('be.visible');
  }

validarmensagemInformarEmail(){
    cy.contains(this.mensagemInformarEmail, 'Informe o e-mail').should('be.visible');
  }  
validarmensagemErroCadastro(){
    cy.on('window:alert', mensagem =>{
        expect(mensagem).to.equal('Não foi possível cadastar o usuário')
         });
        cy.get(this.buttonOk).click();  
}
validarmensagemInformarSenha(){
    cy.contains(this.mensagemInformarSenha, 'Informe a senha').should('be.visible'); 
}
validarmensagemSenhasIguais(){
    cy.contains(this.mensagemSenhasIguais, 'As senhas devem ser iguais').should('be.visible');
}
validarmensagemSenhaInvalida(){
    cy.contains(this.mensagemSenhaInvalida, 'A senha deve ter pelo menos 6 dígitos').should('be.visible');
}
cadastrarUsuario(nome, email, senha){
    cy.request('POST', 'https://raromdb-3c39614e42d4.herokuapp.com/api/users', {
        name: nome,
        email: email,
        password: senha
    }).then(function (response) {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(nome)
        expect(response.body.email).to.equal(email)
    })
}
}
