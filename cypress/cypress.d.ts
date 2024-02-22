export declare global {
  namespace Cypress {
    interface Chainable {
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
