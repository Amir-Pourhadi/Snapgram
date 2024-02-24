describe("Home Page", () => {
  it("should visit HomePage", () => {
    cy.visit("/");

    cy.contains(/^RootLayout$/).should("be.visible");
  });
});
