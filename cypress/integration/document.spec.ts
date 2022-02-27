describe('DocumentPage e2e tests', () => {
  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.intercept('POST', '/api').as('getDocument')
    cy.visit(`/documents/${Cypress.env('documentId')}`)
    cy.wait('@getDocument')
  })
  it('renders the document name', () => {
    cy.contains(Cypress.env('documentName')).should('be.visible')
  })
  it('renders the correct number of artboards', () => {
    cy.get('main').find('a').should('have.length', 16)
  })
  it('renders the artboard names', () => {
    cy.contains(Cypress.env('artboardName')).should('be.visible')
  })
})
