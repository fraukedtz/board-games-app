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
  it('has four buttons', () => {
    cy.get('nav > a').should('have.length', 4)
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

  it('changes path on Plan click', () => {
    cy.get('nav > a')
      .find('.fa-star')
      .click()

    cy.url().should('contain', '/plangamesnight')
  })

  it('changes path on Night click', () => {
    cy.get('nav > a')
      .find('.fa-heart')
      .click()

    cy.url().should('contain', '/mygamesnight')
  })
})

describe('View Game Cards', () => {
  it('navigates to games', function() {
    cy.visit('http://localhost:3000/')
  })

  it('loads all game cards', function() {
    cy.get('[data-cy="GameCard"]').should('have.length', 5)
  })

  it('has a card with text Settlers of Catan', function() {
    cy.get('[data-cy="GameCard"]')
      .contains('Settlers of Catan')
      .should('have.length', 1)
  })

  it('expands a game card (Settlers of Catan - 1)', function() {
    cy.get('[data-cy="Toggle1"]')
      .should('have.length', 1)
      .click()

    cy.get('[data-cy="ExpandContent1"]')
      .should('have.class', 'expand')
      .should('have.length', 1)
  })

  it('collapses a game card (Settlers of Catan - 1)', function() {
    cy.get('[data-cy="Toggle1"]')
      .should('have.class', 'rotate')
      .should('have.length', 1)
      .click()

    cy.get('[data-cy="ExpandContent1"]')
      .not('.expand')
      .should('have.length', 1)
  })
})

describe('View Player Cards', () => {
  it('navigates to players', function() {
    cy.visit('http://localhost:3000/players')
  })

  it('loads all player cards', function() {
    cy.get('[data-cy="PlayerCard"]').should('have.length', 9)
  })

  it('has a card with text Jerry', function() {
    cy.get('[data-cy="PlayerCard"]')
      .contains('Jerry')
      .should('have.length', 1)
  })

  it('expands a player card (Jerry - 3)', function() {
    cy.get('[data-cy="Toggle3"]')
      .should('have.length', 1)
      .click()

    cy.get('[data-cy="ExpandContent3"]')
      .should('have.class', 'expand')
      .should('have.length', 1)
  })

  it('collapses a player card (Jerry - 3)', function() {
    cy.get('[data-cy="Toggle3"]')
      .should('have.class', 'rotate')
      .should('have.length', 1)
      .click({ force: true })

    cy.get('[data-cy="ExpandContent3"]')
      .not('.expand')
      .should('have.length', 1)
  })
})

describe('Bookmark players', () => {
  it('bookmarks a player (Jerry - 3)', function() {
    cy.get('[data-cy="Bookmark3"]')
      .should('have.length', 1)
      .click()
    cy.get('[data-cy="Bookmark3"]')
      .should('have.class', 'bookmarked')
      .should('have.length', 1)
  })
  it('unbookmarks a player (Jerry - 3)', function() {
    cy.get('[data-cy="Bookmark3"]')
      .should('have.class', 'bookmarked')
      .should('have.length', 1)
      .click()
    cy.get('[data-cy="Bookmark3"]')
      .not('.bookmarked')
      .should('have.length', 1)
  })
})

describe('Plan Games Night', () => {
  it('toggles add/remove a player (Jerry - 3) to/from games night', function() {
    cy.get('[data-cy="Bookmark3"]')
      .should('have.length', 1)
      .click()

    cy.visit('http://localhost:3000/plangamesnight')

    cy.get('[data-cy="Bookmark3"]')
      .should('have.class', 'bookmarked')
      .should('have.length', 1)
      .click()

    cy.get('[data-cy="Bookmark3"]').should('have.length', 0)
  })

  it('toggles add/remove a game (Catan - 1) to/from games night and select winner', function() {
    cy.visit('http://localhost:3000/players')

    cy.get('[data-cy="Bookmark3"]')
      .should('have.length', 1)
      .click()

    cy.get('[data-cy="Bookmark1"]')
      .should('have.length', 1)
      .click()

    cy.get('[data-cy="Bookmark2"]')
      .should('have.length', 1)
      .click()

    cy.get('[data-cy="Bookmark9"]')
      .should('have.length', 1)
      .click()

    cy.visit('http://localhost:3000/plangamesnight')

    cy.get('[data-cy="Bookmark3"]')
      .should('have.class', 'bookmarked')
      .should('have.length', 1)

    cy.get('[data-cy="Bookmark1"]')
      .should('have.class', 'bookmarked')
      .should('have.length', 1)

    cy.get('[data-cy="Bookmark2"]')
      .should('have.class', 'bookmarked')
      .should('have.length', 1)

    cy.get('[data-cy="Bookmark9"]')
      .should('have.class', 'bookmarked')
      .should('have.length', 1)

    cy.get('[data-cy="BookmarkGame1"]')
      .should('have.length', 1)
      .click()

    cy.get('[data-cy="BookmarkGame1"]')
      .should('have.class', 'bookmarked')
      .should('have.length', 1)
      .click()

    cy.get('[data-cy="BookmarkGame1"]')
      .not('have.class', 'bookmarked')
      .should('have.length', 1)

    cy.get('[data-cy="BookmarkGame1"]')
      .should('have.length', 1)
      .click()

    cy.visit('http://localhost:3000/mygamesnight')

    cy.get('[data-cy="PlayerTag"]').should('have.length', 4)
    cy.get('[data-cy="GameTagWithWinner"]').should('have.length', 1)

    cy.get('[data-cy="SelectWinner1"]')
      .should('have.length', 1)
      .select('Jerry')
      .should('have.value', '3')
  })
})
