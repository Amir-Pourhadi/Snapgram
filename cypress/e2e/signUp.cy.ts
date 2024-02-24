describe("Sign Up", () => {
  it("should visit sign up page", () => {
    cy.visit("/signUp");

    cy.contains("button", /^Click me$/).should("be.visible");
    cy.get("img[src='/images/side-img.svg']").should("be.visible");
  });
});
