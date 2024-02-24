describe("Sign In Page", () => {
  it("should visit sign in page", () => {
    cy.visit("/signIn");

    cy.contains(/^AuthLayout$/).should("be.visible");
  });
});
