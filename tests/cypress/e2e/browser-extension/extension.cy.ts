import { onlyOn } from '@cypress/skip-test'

onlyOn('headed', () => {
  describe('Tournesol extension', 
    {
      browser: ['chromium', 'chrome'],
      defaultCommandTimeout: 16000,
    },
    () => {
      const closeBanners = () => {
        cy.get('body')
          .then(($body) => {
            // Agree to cookies dialog if it's present
            if ($body.find('#dialog').length) {
              cy.get('#dialog button').last().click();
            }
            // Close Youtube promotional banner
            if ($body.find('ytd-banner-promo-renderer').length) {
              cy.get("ytd-banner-promo-renderer #dismiss-button").click()
            }
          })
      }

      beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test, because of unrelated Youtube errors
          return false
        })
      });

      it('shows Tournesol recommendations on youtube.com', () => {
        cy.visit('https://www.youtube.com');
        closeBanners();
        cy.contains('Recommended by Tournesol').should('be.visible');
      });

      it('shows "Rate later" button on video page', () => {
        cy.visit('https://www.youtube.com/watch?v=6jK9bFWE--g');
        closeBanners();
        cy.get('body').then($body => {
          if ($body.find("button:contains('Dismiss')").length > 0) {
            // Dismiss Youtube Ad if present
            cy.contains('button', 'Dismiss', {matchCase: false}).click();
          }
          cy.contains('button', 'Rate later', {matchCase: false}).should('be.visible');
        });
      });
    });
});
