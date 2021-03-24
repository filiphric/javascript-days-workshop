it('copying id board id', () => {

  cy
    .visit('/board/23312666956')

  cy
    .get('[data-cy="board-options"]')
    .click();

  cy
    .get('[data-cy="copy-board-properties"]')
    .click()

});