describe('Single movie poster view', () => {

  beforeEach(() => {
    cy.fixture('posterDetails')
    .then(movieDetails => {
      const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
      cy.intercept('GET', `${url}/337401`), {
        statusCode: 201,
        body: posterDetails
      }
    })
    cy.visit('http://localhost:3000/')
  }

  it('Should render the movie cover', () => {
    
  });

  // it('Should render an area that displays the movie details', () => {
    
  // });

  // it('Should render details unavailable for any category where details are unavailable', () => {

  // });

  // it('Should display the movie cover next to the movie details', () => {

  // });

  // it('Should render the movie relase date into a MM-DD-YYYY format', () => {

  // });


});