describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {

    cy.viewport("iphone-6");

    cy.visit('https://donation.yahoo.co.jp/');

    cy.get('#search > form > div > input').type('領収書');

    cy.get('#search > form > div > button').click();

    cy.url().should('include', '/search');

    cy.get('#result > h1')
      .should('have.text', '検索結果')

    cy.screenshot('test', {capture:'fullPage'});
  })
})