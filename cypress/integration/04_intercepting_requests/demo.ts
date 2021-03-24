it('Intercepting requests', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 0)

});