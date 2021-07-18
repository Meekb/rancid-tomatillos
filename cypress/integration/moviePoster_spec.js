// import posterDetails from './cypress/fixtures/posterDetails.json'

describe('Poster view flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('img').click()
    // cy.click('img')
    cy.stubMoviePoster()
  });

  it('Should render the movie poster for Mulan', () => {
    cy.get('poster-title').contains('Mulan')
  })


})


