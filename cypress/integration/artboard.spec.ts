describe('ArtboardPage e2e tests', () => {
  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.intercept('POST', '/api').as('getDocument')
    cy.visit(
      `/documents/${Cypress.env('documentId')}/artboards/${Cypress.env(
        'artboardIndex',
      )}`,
    )
    cy.wait('@getDocument')
  })
  it('renders the artboard name', () => {
    cy.contains(Cypress.env('artboardName')).should('be.visible')
  })
  it('renders the artboard image', () => {
    cy.get(`[alt="${Cypress.env('artboardName')}"`).should('be.visible')
  })
})
