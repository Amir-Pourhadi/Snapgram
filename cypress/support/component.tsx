import { mount } from "cypress/react18";
import "./commands.ts";

Cypress.Commands.add("mount", (component, options) => {
  return mount(component, options);
});
