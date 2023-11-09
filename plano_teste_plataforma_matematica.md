
# Plano de Teste

**Plataforma de matemática*

*versão 1.0*

## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
17/10/2023 |  1.0   | Release incial | Claytion Santos


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
Cadastro de Usuário |   ● O usuário é cadastrado com sucesso e redirecionado para uma página de login.  <br> ● O e-mail terá que ser um e-mail válido. <br> ● Exibir uma mensagem de confirmação em caso positivo.<br> ● Exibir mensagem de falha em caso do e-mail ou senha estejam incorretos.<>
● Exibir mensagem de falha no caso de campo obrigatório incompleto
● Senha min 8 caracteres 
 | ●	Senha min 8 caracteres e no máximo 18 <br> ●	Todos os campos devem ser obrigatórios. <br>●	Exibir uma mensagem de confirmação em caso positivo. <br>●	Redirecionar o usuario para tela de login. <br>●	Exibir a mensagem de falha em caso de usuário existente.  <br>●	Exibir mensagem de falha em caso de confirmação de senha não ser igual <br>●	Exibir mensagem de falha no caso de campo obrigatório incompleto. | |

Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
Login |  ● Ao digitar seu usuário e senha corretamente o usuário irá logar na plataforma. <br>● Ao tentar se logar e falhar 3 vezes consecutivas o usuário terá que esperar 15 minutos para tentar logar novamente. <br>● O sistema deve aceitar usuários que já está logado em outro device se logar novamente. | ●	Login no Sistema com sucesso <br>●	Usuario Inválido <br>●	Usuário não preencher campo obrigatório <br>●	Senha Incorreta <br>●	Senha Incorreta 3 vezes | ●	Ter acessibilidade no sistema  <br>●	Redimensionar a Tela


Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
Lista de Fotos | Ao entrar na tela inicial o usuário irá ver uma lista com todas as fotos. <br> ● Deve ser exibido um ícone de coração no canto direito. <br>● Deve o ícone de coração deve exibir uma animação e trocar para a cor vermelha.<br> ● Deve ser exibido uma caixa de texto para o usuário escrever o comentário. | |

Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
Comentario em Fotos | Ao clicar nos detalhes das fotos o usuário poderá fazer um comentário. <br>Deve ser exibido uma caixa de texto para o usuário escrever o comentário. <br>Deve ser exibido o nome do usuário <br>Deve ser exibido o texto “Comentar” na barra de texto para orientar o usuário. <br> Deve ter limite de 140 por comentário | ●	Limite de 140 caracteres. <br>●	Nome do usuario. <br>●	Comentários anteriores.|

Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
Detalhes da fotos |	Serão exibidos os detalhes da foto: <br>- Foto <br>- Curtidas <br>- Comentarios  <br>- Opção de remoção da foto <br>Usuário deve conseguir curtir uma mensagem ao clicar no ícone de “coração”<br>O ícone de coração deve mudar de cor <br>Usuário que teve sua mensagem curtida deve receber uma notificação <br>Deve ser exibido uma caixa de texto para o usuário escrever o comentário. | ●	Número correto de curtidas e comentários. <br>●	Opção de remoção de fotos. <br>●	Possibilidade de curtir e comentar nas fotos. |

Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
Remover foto | ●Ao clicar no item em excluir a foto deverá ser removida <br> ●Deve aparecer uma caixa de confirmação perguntando se usuário deseja mesmo excluir o stories <br> ●O usuário deve ter a opção de cancelar exclusão <br> ● O usuário deve confirmar a exclusão. | ●	Exclusão da foto <br>●	Acessar a foto após a remoção. <br>●Mensagem de confirmação em caso positivo. <br>●	Mensagem de cancelamento.|

Funcionalidades   | Comportamento Esperado | Verificações |  Critérios de Aceite  |
-----------|--------|--------|--------| 
Pesquisa | ● Ao digitar um texto na barra de pesquisa deverá aparecer as fotos correspondentes. <br>● Devem ser exibidas sugestões ao clicar na caixa de texto e a medida que o usuário digita. <br> ● Deve ser exibida uma mensagem caso não haja fotos correspondentes a pesquisa do usuário.| ●	Pesquisa encontrou os resultados  esperados <br>●	Pesquisa não encontrou resultados <br>●	Sugestões de Pesquisa |







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
Jasmine|	Desenvolvimento |Framework utilizada para testes unitários
Selenium|	Qualidade|	Ferramenta para testes end-to-end


## 5 - Classificação de Bugs

Os Bugs serão classificados com as seguintes severidades:

ID 	|Nivel de Severidade |	Descrição 
-----------|--------|--------
1	|Blocker |	●	Bug que bloqueia o teste de uma função ou feature causa crash na aplicação. <br>●	Botão não funciona impedindo o uso completo da funcionalidade. <br>●	Bloqueia a entrega. 
2	|Grave |	●	Funcionalidade não funciona como o esperado <br>●	Input incomum causa efeitos irreversíveis
3	|Moderada |	●	Funcionalidade não atinge certos critérios de aceitação, mas sua funcionalidade em geral não é afetada <br>●	Mensagem de erro ou sucesso não é exibida
4	|Pequena |	●	Quase nenhum impacto na funcionalidade porém atrapalha a experiência  <br>●	Erro ortográfico<br>● Pequenos erros de UI


### 6 - 	Definição de Pronto 
Será considerada pronta as funcionalidades que passarem pelas verificações e testes descritas nestes TestPlan, não apresentarem bugs com a severidade acima de Minor, e passarem por uma validação de negócio de responsabilidade do time de produto.
