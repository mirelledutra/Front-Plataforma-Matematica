describe('Página Login - cenário correto', () => {
  it('Deve efetuar login do usuário', () => {
    cy.visit('http://localhost:3001/')
    cy.get('[href="/Login"]').click();
    cy.get('#nome').type("susbarb@gmail.com");
    cy.get('#senha').type("12345678");
    cy.wait(1000);
    cy.get('.styles_submitButton__QhWPH')
    cy.get('button[type="submit"]').click({force: true});

  })

  it('Deve efetuar login do usuário', () => {
    cy.visit('http://localhost:3001/')
    cy.get('[href="/Login"]').click();
    cy.get('#nome').type("susbarb@gmail.com");
    cy.get('#senha').type("123");
    cy.wait(1000);
    cy.get('.styles_submitButton__QhWPH')
    cy.get('button[type="submit"]').click({force: true});
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Aumente este texto para 8 caracteres ou mais. No momento, você está usando 6 caracteres');
    
  })
    cy.get('.styles_textrecovery__wj24S').click()

  })
 
})