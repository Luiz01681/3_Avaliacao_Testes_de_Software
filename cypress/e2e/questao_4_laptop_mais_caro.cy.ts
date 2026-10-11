describe('Questao 4 - Laptop Mais Caro', function () {
  it('extrai o laptop mais caro e valida o preco', function () {
    cy.intercept('POST', '**/bycat').as('carregarLaptops');

    cy.visit('https://www.demoblaze.com/');

    cy.contains('a', 'Laptops').click();

    cy.wait('@carregarLaptops');
    cy.wait(1000);

    let maiorPreco = 0;
    let nomeMaisCaro = '';

    cy.get('#tbodyid .card')
      .should('have.length.at.least', 1)
      .each(function ($card) {
        const nome = $card.find('.card-title').text().trim();
        const textoPreco = $card.find('h5').text().trim();
        const preco = parseFloat(textoPreco.replace(/[^0-9.]/g, ''));

        if (preco > maiorPreco) {
          maiorPreco = preco;
          nomeMaisCaro = nome;
        }
      })
      .then(function () {
        cy.log(`Laptop mais caro: ${nomeMaisCaro} - $${maiorPreco}`);
        expect(maiorPreco).to.be.greaterThan(0);
        expect(nomeMaisCaro).to.not.be.empty;
      });
  });
});
