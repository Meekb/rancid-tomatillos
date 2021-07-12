describe('All movies Main', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should render a main element to contain all content', () => {
    cy.get('main').should('be.visible')
  });

  it('Should render a nav element with containing the app title', () => {
    cy.get('nav').should('be.visible')
      .contains('Putrid Physalis Philadelphica')
      // .get('main').should('be.visible')
  });

  // will need to test for search bar component once built

  it('Should render all movies underneath the logo and search bar', () => {
    cy.get('.all-movies section').should('be.visible')
  });

  it('Should render a movie title underneath each movie', () => {
    cy.get('.all-movies section').contains('p')
  })



});