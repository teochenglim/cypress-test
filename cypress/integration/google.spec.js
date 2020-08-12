/* global assert */
describe('google search', () => {

  context('search', function () {
    it('search cypress', function () {
      cy.visit('https://google.com.sg')
      cy.get('input').should('contain', 'Search')
      cy.get('input[name=q]').type('cypress.io{enter}')
    })
  })
})


/***
https://docs.cypress.io/api/commands/type.html#History
https://docs.cypress.io/api/commands/get.html#Selector
***/
