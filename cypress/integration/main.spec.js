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

  //   it('has an input', () => {
  //     cy.get('input[placeholder="Enter new todo"]').should('have.length', 2)
  //   })

  //   it('has a Header with Text Games', () => {
  //     cy.get('[data-cy="Header"]').should('have.length', 2)
  //   })

  it('has a Header with Text Games', () => {
    cy.get('[data-cy="Header"]')
      .contains('Games')
      .should('have.length', 1)
  })
})

// describe('Todo', () => {
//   it('has no todos at start', () => {
//     cy.get('[data-cy="Todo"]').should('have.length', 0)
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
})

describe('Navigate to players', function() {
  it('successfully loads players', function() {
    cy.visit('http://localhost:3000/players/')
  })
})

describe('Navigate to games', function() {
  it('Visit games', function() {
    cy.visit('http://localhost:3000')
  })
})
