// https://docs.cypress.io/api/introduction/api.html

const login = () => {
  cy.visit('/')
  cy.get('#phoneTextField').type('0570009557')
  cy.get('#phoneButton').click()
  cy.get('#validateTextField').type('1234')
  cy.get('#validateButton').click()
}

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

  it('should add car successfully', () => {
    login()
    cy.get('#validateButton').click()
    cy.url().should('include', '/home')
    cy.get('#addCarListItem').click()
    cy.url().should('include', '/car')
    cy.get('#carTextField').type('04455338')
    cy.get('#carButton').click()
    cy.url().should('include', '/nickname')
    cy.get('#nicknameTextField').type('Bimba')
    cy.get('#nicknameButton').click()
    cy.url().should('include', '/validate')
    cy.get('#validateTextField').type('1234')
    cy.get('#validateButton').click()
    cy.url().should('include', '/home')
  })
})
