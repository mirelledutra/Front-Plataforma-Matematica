# Plano de Teste

**Plataforma de matemática*

*versão 1.0*

## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
17/10/2023 |  1.0   | Release incial | Mirelle Dutra


## 1 - Introdução

O Projeto Plataforma de Matemática é uma aplicação web educacional que tem como objetivo oferecer funcionalidades de cadastro, login, acesso a cursos, visualização de vídeos, upload e visualização de exercícios em PDF, bem como recursos de administração para inserção de conteúdo, gerenciamento de cursos, disciplinas, aulas e usuários. Este plano de teste detalha a estratégia para garantir que a plataforma atenda às expectativas dos usuários e funcione de acordo com os requisitos definidos.


## 2 - Arquitetura

A plataforma foi desenvolvida utilizando JavaScript como linguagem de programção no lado do servidor (Node.js) e no lado do cliente, framework (React com Next.js). Para o armazenamento dos dados, foi utilizado o banco de dados MongoDB Atlas e a comunicação entre front-end e back-end é feita por meio de uma API RESTful. Funciona como uma imagem, em que o cliente (aplicação) envia uma requisição a uma URL(endpoint) para acessar os serviços da API, e tem como retornar um objeto na forma de um JSON.


## 3 - Categorização  dos  Requisitos  em  Funcionais  x  Não Funcionais

   Requisito Funcional    | Requisito Não Funcional |
-----------|--------|
RF001 – O sistema deve permitir o cadastro de usuários |  NF001 – O sistema deve ser devenvolvido em web   | 
RF002 – O sistema deve permitir que o usuário relalize login |  NF002 – O banco de dados utilizado deverá ser o MongoDB   | 
RF003 – O sistema deve permitir o cadastro de disciplina |  NF003 – O banco de dados utilizado deverá ser o MongoDB   |
RF004 – O sistema deve permitir o cadastro de curso  | NF004 – O sistema deve possuir um Design para mobile responsivo.  |
RF005 – O sistema deve permitir o cadastro de aula    | NF005 – O sistema deve ser acessível via Browser, como Google Chrome, Internet Explorer e Mozilla Firefox.   |
RF006 – O sistema deve permitir o acesso a cursos |   |
RF007 – O sistema deve permitir o acesso as aulas  |   |
RF008 – O sistema deve permitir a matrícula de um curso  |   |
RF009 – O sistema deve permitir visualizar vídeos de uma aula |   |
RF010 – O sistema deve permitir a inserir conteúdo pdf |   |
RF011 – O sistema deve permitir fazer upload do conteúdo.  |   |


### Casos de Teste

Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
<strong>Cadastro de Usuário</strong>| ● O usuário é cadastrado com sucesso e redirecionado para uma página de login.|<br>● O e-mail terá que ser um e-mail válido.<br>● Exibir uma mensagem de confirmação em caso positivo.<br>● Exibir mensagem de falha em caso do e-mail ou senha estejam incorretos.<br>● Exibir mensagem de falha no caso de campo obrigatório incompleto<br>● Senha min 8 caracteres.|<br> ● Ter acessibilidade no sistema <br>● Redimensionar a Tela
Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |

<strong>Login de Usuário</strong> | ● Usuário é autenticado e redirecionado para a página inicial.|<br>● Login no Sistema com sucesso. <br>● Usuario Inválido.|<br>● Ter acessibilidade no sistema<br>● Redimensionar a Tela
Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |

<strong>Acesso Usuário</strong>| ● Um novo usuário é cadastrado corretamente.|<br>● Exibe mensagem de confirmação em caso positivo.<br>● Exibe mensagem de falha em caso o usuário já esteja cadastrado.|● Ter acessibilidade no sistema.

Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
<strong>Acesso a Curso</strong>| ● O administrador clica no botão cadastrar curso e redirecionado a página de cadastro de curso.<br>● O administrador clica no botão cadastrar disciplina e redirecionado a página de cadastro de disciplina.<br>● O administrador clica no botão cadastrar aula e redirecionado a página de cadastro de aula.|<br>● Exibir mensagem de confirmação em caso positivo.<br>● Exibir mensagem de falha caso a disciplina esteja cadastrada|● Redimensionar a Tela
Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
<strong>Cadastro de Disciplina</strong>| ● A disciplina é cadastrada com sucesso.|<br>● Exibir mensagem de confirmação em caso positivo. <br>● Exibir mensagem de falha caso a disciplina esteja cadastrada|
Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
<strong>Cadastro de Curso</strong>| ● O curso é cadastrado com sucesso.|<br>● Exibir mensagem de confirmação em caso positivo.<br>● Exibir mensagem de falha caso a curso esteja cadastrada|
Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
<strong>Cadastro de Aula</strong>| ● A aula é cadastrada com sucesso.|<br>● Exibir mensagem de confirmação em caso positivo.<br>● Exibir mensagem de falha caso a curso esteja cadastrada|
Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
Acesso a Cursos     | ● O usuário será redirecionado para a disciplina e suas respectivas aulas <br> ● O usuário ao clicar em iniciar curso será redirecionado a visualizar a aula <br>● A aula é reproduzida corretamente.| ● Exibir mensagem de falha caso não tenha aula cadastrada.|
Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
Acesso a Meus Cursos| ● A lista de cursos concluídas será exibida. | ● Exibir mensagem de falha caso não tenha curso concluído. |
Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
Pesquisa            | ● Ao digitar um texto na barra de pesquisa deverão aparecer os conteúdos cadastrados ou correspondentes. | ● Pesquisa encontrou os resultados esperados <br> ● Pesquisa não encontrou resultados | Pesquisa


## 4 - Estratégia de Teste

●	Escopo de Testes

O plano de testes abrange todas as  funcionalidades descritas na tabela acima. Esse plano de testes exclui a funcionalidade de upload de fotos.

Serão executados testes em todos os níveis conforme a descrição abaixo.

Testes Unitários: o código terá uma cobertura de 60% de testes unitários, que são de responsabilidade dos desenvolvedores.
Testes de Integração: Serão executados testes de integração em todos os endpoints, e esses testes serão de responsabilidade do time de qualidade.
Testes Automatizados: Serão realizados testes end-to-end na funcionalidade de Login.
Testes Manuais: Todas as funcionalidades serão testadas manualmente pelo time de qualidade seguindo a documentação de Cenários de teste e destes TestPlan. 
Versão Beta: Será lançada uma versão beta para 20 usuários pré-cadastrados antes do release. 

●	Ambiente e Ferramentas

Os testes serão feitos do ambiente de homologação, e contém as mesmas configurações do ambiente de produção com uma massa de dados gerada previamente pelo time de qualidade.

As seguintes ferramentas serão utilizadas no teste:

Ferramenta | 	Time |	Descrição 
-----------|--------|--------
POSTMAN	| Qualidade|	Ferramenta para realização de testes de API
Supertest|	Desenvolvimento|Framework utilizada para testes unitários
Cypress  | Qualidade|	Ferramenta para realizar testes Front-end


## 5 - Classificação de Bugs

Os Bugs serão classificados com as seguintes severidades:

ID 	|Nivel de Severidade |	Descrição 
-----------|--------|--------
1	|Bloqueador |● Bug que bloqueia o teste de uma função ou recurso que causa travamento na aplicação <br>● O botão não funciona impedindo o uso completo da funcionalidade. <br>●	Bloqueia a entrega. 
2	|Cova |	● Funcionalidade não funciona como o esperado <br> ● Entrada incomum causa efeitos irreversíveis
3	|Moderada |	● A funcionalidade não atinge certos critérios de alcance, mas sua funcionalidade em geral não é afetada <br> ● Mensagem de erro ou sucesso não é exibida
4	|Pequena |	● Quase nenhum impacto na funcionalidade, porém atrapalhando a experiência <br> ● Erro ortográfico <br> ● Pequenos erros de UI


## 6 - Definição de Pronto

Será considerado pronto as funcionalidades que passarão pelas verificações e testes descritos nestes TestPlan, não apresentarão bugs com severidade acima de Minor, e passarão por uma validação de negócio de responsabilidade do tempo de produto.





