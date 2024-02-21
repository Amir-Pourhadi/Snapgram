describe("HomePage", () => {
  it("should visit HomePage", () => {
    cy.visit("/");

    cy.contains(/^Hello World!$/).should("be.visible");
  });
});
