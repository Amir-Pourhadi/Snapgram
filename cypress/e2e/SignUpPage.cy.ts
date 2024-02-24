describe("Sign Up Page", () => {
  it("should visit sign up page", () => {
    cy.visit("/signIn");

    cy.contains(/^AuthLayout$/).should("be.visible");
  });
});
