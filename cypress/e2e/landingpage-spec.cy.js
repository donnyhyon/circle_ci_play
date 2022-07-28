describe('lands on a webpage', () => {
  it('should visit', () => {
    cy.visit('http://localhost:3000/')
  })

  it("should contain the word 'red'", () => {
    cy.contains('template')
  })

})