// https://docs.cypress.io/api/introduction/api.html

describe('login', () => {
  beforeEach(() => {
    const value =
      'C:\\Users\\user\\mongodb\\bin\\mongo.exe pango-lite-test --eval "db.dropDatabase()"'
    cy.exec(value)
  })

  it('should login successfully', () => {
    cy.visit('/')
    cy.url().should('include', '/phone')
    cy.get('#phoneTextField').type('0570009557')
    cy.get('#phoneButton').click()
    cy.url().should('include', '/validate')
    cy.get('#validateTextField').type('1234')
    cy.get('#validateButton').click()
    cy.url().should('include', '/home')
  })

  it('should show phone view when not logged in', () => {
    cy.visit('/')
  })
})
