it('error message when creating new board', () => {

  cy
    .intercept('POST', '/api/boards', {
      forceNetworkError: true
    })
    .as('boardCreate')

  cy
    .visit('/');

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('new garden')

  cy
    .contains('Save')
    .click()

  cy
    .get('#errorMessage')
    .should('be.visible')

  cy
    .get('#errorMessage')
    .should('not.be.visible')

})