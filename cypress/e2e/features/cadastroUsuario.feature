# language: pt
Funcionalidade: Cadastro de usuário


Contexto: Usuário deve ter acessado o sistema
  Dado que acessei a pagina de registo de usuario

Cenário: Cadastrar um usuário com sucesso
  Quando informar um novo nome
  E informar um novo email
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então o usuário será cadastrado

Cenário: Cadastrar um usuário com letras e caractere especial
  Quando informar um novo nome contendo letras e caractere especial
  E informar um novo email
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então o usuário será cadastrado  

Cenário: Cadastrar um usuário com caractere especial
  Quando informar um novo nome contendo caractere especial
  E informar um novo email
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então o usuário será cadastrado

Cenário: Cadastrar um usuário com números
  Quando informar um novo nome contendo números
  E informar um novo email
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então o usuário será cadastrado  

Cenário: Cadastrar um usuário com letras e números
  Quando informar um novo nome contendo letras e números
  E informar um novo email
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então o usuário será cadastrado  

Cenário: Cadastrar um usuário com caractere especial e números
  Quando informar um novo nome contendo caractere especial e números
  E informar um novo email
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então o usuário será cadastrado

Cenário: Cadastrar um usuário sem sucesso, sem informar um nome
  Quando não informar um novo nome
  E informar um novo email
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então a mensagem Informe o nome deverá ser vizualizada  

Cenário: Cadastrar um usuário sem sucesso, sem informar um email
  Quando informar um novo nome
  E não informar um novo email
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então a mensagem Informe o e-mail deverá ser vizualizada

Cenário: Cadastrar um usuário sem sucesso, sem informar um email valido
  Quando informar um novo nome
  E informar um novo email inválido
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então a mensagem Não foi possível cadastar o usuário deverá ser vizualizada   

Cenário: Cadastrar um usuário sem sucesso, sem informar uma senha
  Quando informar um novo nome
  E informar um novo email
  E nao informar uma nova senha
  E confirmar a operação
  Então a mensagem Informe a senha deverá ser vizualizada  

Cenário: Tentar cadastar um usuário com senhas diferente
  Quando informar um novo nome
  E informar um novo email
  E informar uma nova senha
  E confirmar a senha com uma senha diferente
  E confirmar a operação
  Então a mensagem As senhas devem ser iguais deverá ser vizualizada   

Cenário: Tentar cadastrar um usuário com uma senha de 5 caracteres
  Quando informar um novo nome
  E informar um novo email
  E informar uma nova senha com 5 caracteres
  E confirmar a senha
  E confirmar a operação
  Então a mensagem A senha deve ter pelo menos 6 dígitos deverá ser vizualizada  

Cenário: Tentar cadastrar um usuário com senha de 7 caracteres
  Quando informar um novo nome
  E informar um novo email
  E informar uma nova senha com 7 caracteres
  E confirmar a senha com 7 caracteres
  E confirmar a operação
  Então o usuário será cadastrado  



