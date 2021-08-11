

let user;

describe('Sign Up', () => {
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it('Register a new User', () => {

      const url = 'https://react-redux.realworld.io/#/register';
      const username = user.username;
      const email = user.email;
      const password = user.password;

      cy.visit(url)

      cy.get(':nth-child(1) > .form-control')
      .type(username)
      .should('have.value', username)
  
      cy.get(':nth-child(2) > .form-control')
        .type(email)
        .should('have.value', email)

      cy.get(':nth-child(3) > .form-control')
        .type(password)
        .should('have.value', password)

      cy.get('.btn').click()

      cy.get('.navbar').should('contain', username)
    });
  });
