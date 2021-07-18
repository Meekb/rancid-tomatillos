import posterDetails from '../fixtures/posterDetails.json';

const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';

Cypress.Commands.add('stubMoviePoster', () => {
  cy.intercept(url, posterDetails)
    .visit('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401')
})