describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('successfully loads', function() {
    cy.visit('http://localhost:3000')
  })

  it('has the right title', () => {
    cy.title().should('eq', 'Board Games App')
  })
})

describe('Navigation', () => {
  it('has two buttons', () => {
    cy.get('nav > a').should('have.length', 2)
  })

  it('has active button', () => {
    cy.get('nav > a').should('have.class', 'active')
  })

  it('changes path on Players click', () => {
    cy.get('nav > a')
      .find('.fa-chess-pawn')
      .click()

    cy.url().should('contain', '/players')
  })

  it('changes path on Games click', () => {
    cy.get('nav > a')
      .find('.fa-dice')
      .click()

    cy.url().should('contain', '/')
  })
})

describe('View Game Cards', () => {
  it('navigates to games', function() {
    cy.visit('http://localhost:3000/')
  })

  it('has a Header with text Games', () => {
    cy.get('[data-cy="Header"]')
      .contains('Games')
      .should('have.length', 1)
  })

  it('loads all game cards', function() {
    cy.get('[data-cy="GameCard"]').should('have.length', 5)
  })

  it('has a card with text Settlers of Catan', function() {
    cy.get('[data-cy="GameCard"]')
      .contains('Settlers of Catan')
      .should('have.length', 1)
  })

  it('expands all game cards', function() {
    cy.get('[data-cy="Toggle"]')
      .should('have.length', 5)
      .click({ multiple: true })

    cy.get('[data-cy="ExpandContent"]')
      .should('have.class', 'expand')
      .should('have.length', 5)
  })

  it('collapses all game cards', function() {
    cy.get('[data-cy="Toggle"]')
      .should('have.class', 'rotate')
      .should('have.length', 5)
      .click({ multiple: true, force: true })

    cy.get('[data-cy="ExpandContent"]')
      .not('.expand')
      .should('have.length', 5)
  })
})

describe('View Player Cards', () => {
  it('navigates to players', function() {
    cy.visit('http://localhost:3000/players')
  })

  it('has a Header with text Players', () => {
    cy.get('[data-cy="Header"]')
      .contains('Players')
      .should('have.length', 1)
  })

  it('loads all player cards', function() {
    cy.get('[data-cy="PlayerCard"]').should('have.length', 11)
  })

  it('has a card with text Frauke', function() {
    cy.get('[data-cy="PlayerCard"]')
      .contains('Frauke')
      .should('have.length', 1)
  })

  it('expands all player cards', function() {
    cy.get('[data-cy="Toggle"]')
      .should('have.length', 11)
      .click({ multiple: true })

    cy.get('[data-cy="ExpandContent"]')
      .should('have.class', 'expand')
      .should('have.length', 11)
  })

  it('collapses all player cards', function() {
    cy.get('[data-cy="Toggle"]')
      .should('have.class', 'rotate')
      .should('have.length', 11)
      .click({ multiple: true, force: true })

    cy.get('[data-cy="ExpandContent"]')
      .not('.expand')
      .should('have.length', 11)
  })
})

//   it('has an input', () => {
//     cy.get('input[placeholder="Enter new todo"]').should('have.length', 2)
//   })

//   it('can add a Todo', () => {
//     cy.get('input[placeholder="Enter new todo"]')
//       .type('Hello')
//       .type('{Enter}')

//     cy.get('[data-cy="Todo"]')
//       .should('have.length', 1)
//       .should('contain', 'Hello')
//   })
// })
