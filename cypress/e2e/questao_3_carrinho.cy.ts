describe('Questao 3 - Carrinho de Compras', () => {
  it('adiciona tres produtos, remove um e valida o contador do carrinho', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.get('button[data-test^="add-to-cart"]').first().click();
    cy.get('button[data-test^="add-to-cart"]').first().click();
    cy.get('button[data-test^="add-to-cart"]').first().click();

    cy.get('button[data-test^="remove"]').first().click();

    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', '2');
  });
});
