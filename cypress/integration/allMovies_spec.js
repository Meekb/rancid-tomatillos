describe('All movies Main', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to visit the page and render all movies', () => {
      cy.contains('Putrid Physalis Philadelphica')
      .get('main').should('be.visible')
  });

  it('Should show all movies underneath the logo and search bar', () => {
    cy.get('.all-movies section').should('be.visible')
  });

});