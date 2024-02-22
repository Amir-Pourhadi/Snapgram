import { mount } from "cypress/react18";
import "./commands.ts";
import "../../src/globalStyles.css";

Cypress.Commands.add("mount", (component, options) => {
  return mount(component, options);
});
