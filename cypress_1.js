describe('Sign In', () => {
    it('Logs in', () => {
      cy.visit('https://react-redux.realworld.io/#/login')
  
      cy.get(':nth-child(1) > .form-control')
        .type('wulaja@mailinator.com')
        .should('have.value', 'wulaja@mailinator.com')

      cy.get(':nth-child(2) > .form-control', { timeout: 20000 })
        .type('12345678')
        .should('have.value', '12345678')

      cy.get('.btn')
        .click()

      cy.get('.navbar').contains('Facilis magni aperia').should('exist')

    })
  })
  