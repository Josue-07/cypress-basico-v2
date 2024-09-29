/// <reference types="cypress" />

describe('', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('enviar formulario', () => {

    const textArea = 'teste teste teste teste teste teste teste teste teste teste teste teste'
    cy.get('#firstName').type('Josue')
    cy.get('#lastName').type('Lima')
    cy.get('#email').type('josue@teste.com')
    cy.get('#phone').type('11111111')
    cy.get('#product').select('youtube')
    cy.get('#support-type label:nth-of-type(4) input[value="feedback"]').click()
    cy.get('#email-checkbox').click()
    cy.get('#open-text-area').type(textArea, { delay: 0 })
    cy.get('button[type="submit"]').click()
  });
  it('enviar formulario usando comandos costumizados', () => {
    const textArea = 'teste teste teste teste teste teste teste teste teste teste teste teste'
    cy.commandCustomized(textArea)
    cy.get('button[type="submit"]').click()
    cy.get('.success strong').should('have.text', 'Mensagem enviada com sucesso.')
  });

  it('marca o tipo de atendimento "Elogio"', () => {
    cy.get('#firstName').type('Josue')
    cy.get('#lastName').type('Lima')
    cy.get('#email').type('josue@teste.com')
    cy.get('#phone').type('11111111')
    cy.get('#product').select('mentoria')
    cy.get('#support-type label:nth-of-type(3) input[value="elogio"]').check()
      .should('be.enabled')
  });
  it('marca ambos os checkboxes e desmarcar o ultimo checkbox', () => {
    cy.get('#firstName').type('Josue')
    cy.get('#lastName').type('Lima')
    cy.get('#email').type('josue@teste.com')
    cy.get('#phone').type('11111111')
    cy.get('#product').select('mentoria')
    cy.get('#support-type label:nth-of-type(3) input[value="elogio"]')
      .should('be.enabled')
    cy.get('#check input')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  });
  it('selecionar um arquivo da pasta fixture', () => {
    cy.get('#file-upload[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(($input) => {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  });

  it('selecionando um arquivo utilizando drag-drop', () => {
    cy.get('#file-upload[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json', { action: "drag-drop" })
      .should(($input) => {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  });

  it('selecione um arquivo utilizando um fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload[type="file"]')
      .should('not.have.value')
      .selectFile('@sampleFile', { action: "drag-drop" })
      .should(($input) => {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  });

  it.only('validando multiplas abas', () => {
    cy.get('#privacy > a').invoke('removeAttr', 'target').click()
    cy.get('#title').invoke('text').should('eq', 'CAC TAT - Política de privacidade')
  });

});