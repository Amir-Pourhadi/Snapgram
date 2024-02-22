describe("HomePage", () => {
  it("should visit HomePage", () => {
    cy.visit("/");

    cy.contains(/^RootLayout$/).should("be.visible");
  });
});
