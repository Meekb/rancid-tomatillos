describe('Single movie poster view', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[alt="Mulan"]').click()
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401' )
  });

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