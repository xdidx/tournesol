import { onlyOn } from '@cypress/skip-test'

onlyOn('headed', () => {
  describe('Tournesol extension', 
    {
      browser: ['chromium', 'chrome'],
      defaultCommandTimeout: 8000,
      viewportWidth: 1440,
      viewportHeight: 900,
    },
    () => {
      const consent = () => {
        cy.get('body')
          .then(($body) => {
            // Agree to cookies dialog if it's present
            if ($body.find('#dialog').length) {
              cy.get('#dialog')
                .contains('[role="button"]', 'Accept all', {matchCase: false})
                .click();
            }
          })
      }

      beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test, because of unrelated Youtube errors
          return false
        })
      })

      it('shows Tournesol recommendations on youtube.com', () => {
        cy.visit('https://www.youtube.com?hl=en');
        consent();
        cy.contains('Recommended by Tournesol').should('be.visible');
      })

      it('shows "Rate later" button on video page', () => {
        cy.visit('https://www.youtube.com/watch?v=6jK9bFWE--g&hl=en');
        consent();
        cy.get('body').then($body => {
          if ($body.find("button:contains('Dismiss')").length > 0) {
            // Dismiss Youtube Ad if present
            cy.contains('button', 'Dismiss', {matchCase: false}).click();
          }
          cy.contains('button', 'Rate later', {matchCase: false}).should('be.visible');
        })
      })
    })
})
