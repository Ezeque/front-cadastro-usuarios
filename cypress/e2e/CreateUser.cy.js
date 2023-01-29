describe('User Creation test', () => {
  it('Fills the form and creates an user', () => {
    cy.visit('http://localhost:8080')
    cy.get('#first-name').type('Ezequiel')
    cy.get('#last-name').type('Morais da Rocha e Silva')
    cy.get('#email').type('ezequielmorais4002@gmail.com')
    cy.get('#password').type('123456')
    cy.get('#avatar').selectFile(['C:/Users/Ezequiel/Downloads/1670093953436.jfif'], {force:true})
    cy.get('#location').type('Parnamirim, Brazil')
    cy.get('#title').type('Front-End Developer')
    cy.get('#description').type('Lorem Ipsum Dolo Sit Amet')
    cy.get('#tags').type('Employee').type('{enter}').type('Front-End').type('{enter}').type('Developer').type('{enter}')
    cy.get('#confirm-btn').click()
    cy.get('.title').should('have.value', 'All Users')
  })
})