# language: pt
Funcionalidade: Login de Usuario


Contexto: Antenticar Usuário
 Dado que acessei a pagina de login 

    
Cenário: Tentativa de login com usuario não cadastrado
  Quando preencho um email
  E preencho uma senha
  E aciono a opção de efetuar login
  Então o usuario nao será autenticado

Cenário: Tentativa de login com usuario invalido
  Quando preencho um email não valido  
  E preencho uma senha
  E aciono a opção de efetuar login
  Então o usuario nao será autenticado

Cenário: Tentativa de login com senha invalida
  Quando preencho um email  
  E prencho uma senha invalida
  E aciono a opção de efetuar login
  Então o usuario nao será autenticado

Cenário: Tentativa de login sem informar as credenciais
  Quando não preencho um email  
  E não preencho uma senha
  E aciono a opção de efetuar login
  Então verei mensagem informando que o e-mail e a senha são de preenchimento obrigatorio

Cenário: Autenticar Usuário
  Quando preencho um e-mail de um usuario cadastrado
  E preencho a senha deste usuario 
  E aciono a opção de efetuar login
  Então o usuario sera autetnicado