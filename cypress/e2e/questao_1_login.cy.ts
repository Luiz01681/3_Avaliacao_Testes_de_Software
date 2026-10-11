describe('Questao 1 - Login', () => {
  it('valida mensagem de erro e classe css', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('button[type="submit"]').click();
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!')
      .and('have.class', 'error');
  });
});
