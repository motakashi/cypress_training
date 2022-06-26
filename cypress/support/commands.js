// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// login
Cypress.Commands.add("login", (yid, password) => {
  cy.session([yid, password], () => {
    cy.visit('https://login.yahoo.co.jp/config/login?.src=donation&lg=jp&.intl=jp&.done=https%3A%2F%2Fdonation.yahoo.co.jp%2F')
    cy.get('#username').type(yid);
    cy.get('#btnNext').click();
    cy.get('#passwd').type(password);
    cy.get('#btnSubmit').click();
  })
});

