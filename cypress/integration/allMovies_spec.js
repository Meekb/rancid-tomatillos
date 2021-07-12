describe('All movies Main', () => {

  it('Should be able to visit the page and render all movies', () => {
    cy.visit('http://localhost:3000/')
      .contains('Putrid Physalis Philadelphica')
      .get('main').should('be.visible')
  });

});