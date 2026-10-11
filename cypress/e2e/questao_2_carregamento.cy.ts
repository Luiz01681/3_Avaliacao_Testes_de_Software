describe('Questao 2 - Carregamento Dinamico', () => {
  it('aguarda loader desaparecer e valida texto', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
    cy.get('#start button').click();
    cy.get('#loading', { timeout: 10000 }).should('not.be.visible');
    cy.get('#finish h4')
      .should('be.visible')
      .and('have.text', 'Hello World!');
  });
});
