import { MountOptions, MountReturn } from "cypress/react18";
import { ReactNode } from "react";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps; routePath?: string }
      ): Chainable<MountReturn>;

      /**
       * Custom command to select DOM element by data-cy attribute.
       * @param value data-cy value
       * @param options Cypress get element options
       * @example cy.dataCy('greeting')
       */
      dataCy(
        value: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
