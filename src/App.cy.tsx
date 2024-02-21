import { App } from "./App.tsx";

describe("App Component", () => {
  it("should renders", () => {
    cy.mount(<App />);

    cy.contains(/^Hello World!$/).should("be.visible");
  });
});
