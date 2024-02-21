import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    specPattern: "src/**/*.cy.{ts,tsx}",
    supportFile: "cypress/support/component.tsx",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    baseUrl: "http://localhost:5173",
  },

  video: false,
  screenshotOnRunFailure: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
});
