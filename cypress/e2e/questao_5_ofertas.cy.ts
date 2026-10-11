describe('Questao 5 - Rastreio de Ofertas', function () {
  it('filtra e exibe produtos com preco menor que 20 dolares', function () {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    const ofertas: { nome: string; preco: number }[] = [];

    cy.get('[data-test="inventory-item"]')
      .each(function ($item) {
        const nome = $item.find('[data-test="inventory-item-name"]').text().trim();
        const textoPreco = $item.find('[data-test="inventory-item-price"]').text().trim();
        const preco = parseFloat(textoPreco.replace(/[^0-9.]/g, ''));

        if (preco < 20.0) {
          ofertas.push({ nome, preco });
        }
      })
      .then(function () {
        ofertas.forEach(function (item) {
          cy.log(`Oferta encontrada: ${item.nome} - $${item.preco}`);
          console.log(`Oferta encontrada: ${item.nome} - $${item.preco}`);
        });

        expect(ofertas.length).to.be.greaterThan(0);
      });
  });
});
