describe("Sign In", () => {
  it("should visit sign in page", () => {
    cy.visit("/signIn");

    cy.contains(/^SignInForm$/).should("be.visible");
  });
});
