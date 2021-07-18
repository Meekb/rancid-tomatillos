describe('All movies Main', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should render a main element to contain all content', () => {
    cy.get('main').should('be.visible')
  });

  it('Should render a nav element with containing the app title', () => {
    cy.get('nav').should('be.visible')
      .contains('Putrid Physalis Philadelphica')
  });

  it('Should render all movies underneath the logo and search bar', () => {
    cy.get('.all-movies').should('be.visible')
  });

  it('Should render each movie as an image of the movie cover', () => {
    cy.get('.each-movie').should('be.visible')
  })

});