// https://docs.cypress.io/api/introduction/api.html

const phoneNumber = '0570009557'
const carNumber = '04455338'
const carNumber2 = '04455339'
const nickname = 'Bimba'
const nickname2 = 'Simba'
const code = '1234'

const login = () => {
  cy.visit('/')
  cy.get('#phoneTextField').type(phoneNumber)
  cy.get('#phoneButton').click()
  cy.get('#validateTextField').type(code)
  cy.get('#validateButton').click()
}

const addCar = () => {
  cy.get('#addCarListItem').click()
  cy.get('#carTextField').type(carNumber)
  cy.get('#carButton').click()
  cy.get('#nicknameTextField').type(nickname)
  cy.get('#nicknameButton').click()
  cy.get('#validateTextField').type(code)
  cy.get('#validateButton').click()
}

const loginAndAddCar = () => {
  login()
  addCar()
}

describe('login', () => {
  beforeEach(() => {
    // const value =
    //   'C:\\Users\\user\\mongodb\\bin\\mongo.exe pango-lite-test --eval "db.dropDatabase()"'
    const value =
      '"C:\\Program Files\\MongoDB\\Server\\4.0\\bin\\mongo.exe" pango-lite-test --eval "db.dropDatabase()"'
    cy.exec(value)
  })

  it('should login successfully', () => {
    cy.visit('/')
    cy.url().should('include', '/phone')
    cy.get('#phoneTextField').type(phoneNumber)
    cy.get('#phoneButton').click()
    cy.url().should('include', '/validate')
    cy.get('#validateTextField').type(code)
    cy.get('#validateButton').click()
    cy.url().should('include', '/home')
  })

  it('should show phone view when not logged in', () => {
    cy.visit('/')
  })

  it('should add car successfully', () => {
    login()
    cy.url().should('include', '/home')
    cy.get('#addCarListItem').click()
    cy.url().should('include', '/car')
    cy.get('#carTextField').type(carNumber)
    cy.get('#carButton').click()
    cy.url().should('include', '/nickname')
    cy.get('#nicknameTextField').type(nickname)
    cy.get('#nicknameButton').click()
    cy.url().should('include', '/validate')
    cy.get('#validateTextField').type(code)
    cy.get('#validateButton').click()
    cy.url().should('include', '/home')
  })

  it('should start and end parking successfully', () => {
    loginAndAddCar()
    cy.url().should('include', '/home')
    cy.get('#startParkingListItem').click()
    cy.url().should('include', '/selectCar')
    cy.get('#' + carNumber).click()
    cy.url().should('include', '/selectCity')
    cy.get('#1').click()
    cy.url().should('include', '/selectArea')
    cy.get('#2').click()
    cy.url().should('include', '/selectRate')
    cy.get('#1').click()
    cy.url().should('include', '/home')
    cy.get('#stopParkingListItem').click()
    cy.url().should('include', '/home')
  })

  it('should add another car and remove it successfully', () => {
    loginAndAddCar()
    cy.url().should('include', '/home')
    cy.get('#userButton').click()
    cy.url().should('include', '/user')
    cy.get('#addCarListItem').click()
    cy.url().should('include', '/car')
    cy.get('#carTextField').type(carNumber2)
    cy.get('#carButton').click()
    cy.url().should('include', '/nickname')
    cy.get('#nicknameTextField').type(nickname2)
    cy.get('#nicknameButton').click()
    cy.url().should('include', '/validate')
    cy.get('#validateTextField').type(code)
    cy.get('#validateButton').click()
    cy.url().should('include', '/home')
    cy.get('#userButton').click()
    cy.url().should('include', '/user')
    cy.get('#removeCarListItem').click()
    cy.url().should('include', '/selectCar')
    cy.get('#' + carNumber2).click()
    cy.url().should('include', '/user')
  })

  it('should logout', () => {
    loginAndAddCar()
    cy.url().should('include', '/home')
    cy.get('#userButton').click()
    cy.url().should('include', '/user')
    cy.get('#logoutListItem').click()
    cy.url().should('include', '/phone')
  })
})
