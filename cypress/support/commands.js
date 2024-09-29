Cypress.Commands.add('commandCustomized', (textArea) => {
    
    cy.get('#firstName').type('Josue')
    cy.get('#lastName').type('Lima')
    cy.get('#email').type('josue@teste.com')
    cy.get('#phone').type('11111111')
    cy.get('#product').select('youtube')
    cy.get('#support-type label:nth-of-type(4) input[value="feedback"]').click()
    cy.get('#email-checkbox').click()
    cy.get('#open-text-area').type(textArea, { delay: 0 })

})