Cypress.Commands.add("dataCy", (value, options) => {
  return cy.get(`[data-cy=${value}]`, options);
});
