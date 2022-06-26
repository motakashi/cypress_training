describe('トップページのテスト', () => {
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

describe('Tポイントのテスト', () => {

  beforeEach(() => {
    cy.viewport("iphone-6");
    // 一度だけログインすることで、各テスト項目にsessionを引き継ぐことができる
    cy.login(Cypress.env('YID'), Cypress.env('PASSWORD'));
    cy.visit('https://donation.yahoo.co.jp/detail/1630001/point');
    cy.url().should('eq', 'https://donation.yahoo.co.jp/detail/1630001/point');
  })

  it('Tポイントの通常決済のシンプルなシナリオテスト', () => {
    const beforePointData = cy.get('#tabbox > section > h2 > span.number');
    const beforePoint = cy.log(beforePointData.invoke('text'));
    //beforePoint.should('have.text', '0');
    cy.get('#decision-money > li.inputarea > input').type(1);
    cy.get('#tpoint-checked').click();
    cy.get('#tabbox > section > form > ul:nth-child(4) > li.tabbox_btn_submit > input').click();

    cy.url().should('eq', 'https://donation.yahoo.co.jp/detail/1630001/pointConfirm/');
    cy.get('#main > section > p').should('have.text', '1');
    cy.get('#main > ul > form:nth-child(1) > li > input.btn.__submit.__on').click();

    cy.url().should('eq', 'https://donation.yahoo.co.jp/detail/1630001/thanks');
  })
})