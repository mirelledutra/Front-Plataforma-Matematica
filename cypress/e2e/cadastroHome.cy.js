describe('Cadastro Usuário', () => {
  it('Deve cadastrar usuário', () => {
    cy.visit('http://localhost:3001/')
    cy.get('[href="/Cadastrar"]').click();
    cy.get('#nome').type("Suellen Barbosa");
    cy.get('#email').type("susbarb@gmail.com");
    cy.get('#senha').type("12345678");
    cy.get('#confirmarSenha').type("12345678");
    cy.wait(1000);
    cy.get('.styles_submitButton__LVfbh')
    cy.get('button[type="submit"]').click({force: true});

  })
  it('Deve retornar as mensagem de senha inválida - cenário de insucesso', () => {
    cy.visit('http://localhost:3001/')
    cy.get('[href="/Cadastrar"]').click();
    cy.get('#nome').type("Suellen Barbosa");
    cy.get('#email').type("susbarb@gmail.com");
    cy.get('#senha').type("123456");
    cy.get('#confirmarSenha').type("123456");
    cy.wait(1000);
    cy.get('.styles_submitButton__LVfbh')
    cy.get('button[type="submit"]').click({force: true});
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Aumente este texto para 8 caracteres ou mais. No momento, você está usando 6 caracteres');

  })
})
 
})