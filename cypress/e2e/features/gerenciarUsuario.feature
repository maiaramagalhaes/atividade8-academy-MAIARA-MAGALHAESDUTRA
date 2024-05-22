# language: pt
Funcionalidade: Gerenciar usuário



Contexto: Gerenciar conta de usuário comum
 Dado que usuário está logado e acessou a página de gerenciar conta

  
  
Cenário: Atualizar o nome de usuário
  Quando altero o nome 
  E clico no botão salvar  
  Então o nome do usuário será atualizado

Cenário: Atualizar o nome de usuário com caracter especial
  Quando altero o nome com caracter especial 
  E clico no botão salvar 
  Então o nome do usuário será atualizado

Cenário: Atualizar o nome de usuário com letra e caracter especial 
  Quando altero o nome com caracter letra e caracter especial 
  E clico no botão salvar 
  Então o nome do usuário será atualizado   

Cenário: Atualizar o nome de usuário com caracter especial e números
  Quando altero o nome com caracter especial e números
  E clico no botão salvar 
  Então o nome do usuário será atualizado

Cenário: Atualizar o nome de usuário com letras e números
  Quando altero o nome com letras e números
  E clico no botão salvar 
  Então o nome do usuário será atualizado

Cenário: Alterar a senha de cadastro
  Quando clico no botão alterar senha 
  E digito a nova senha 
  E confirmo a nova senha  
  E clico no botão salvar
  Então a senha será atualizada

Cenário: Tentar alterar a senha de cadastro com senhas diferentes
  Quando clico no botão alterar senha 
  E digito a senha nova 
  E confirmo a nova senha diferente
  E clico no botão salvar
  Então a mensagem As senhas devem ser iguais será visualizada

Cenário: Tentar alterar a senha de cadastro com 5 digitos
  Quando clico no botão alterar senha 
  E digito a nova senha com 5 digitos
  E confirmo a nova senha com 5 digitos 
  E clico no botão salvar
  Então a mensagem A senha deve ter pelo menos 6 dígitos será visualizada 


   