describe('Enter text into name field', () => {
    it('Types in a name and checks it has the same value', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('input[name=name]')
        .type('Robin')
        .should('have.value', 'Robin')
    })
})

describe('Select Multiple toppings', () => {
    it('Checks multiple toppings', () => {
        cy.get('input[name=pepperoni]').check()
        cy.get('input[name=ham]').check()

        cy.get('input[name=pepperoni]').should('be.checked')
        cy.get('input[name=ham]').should('be.checked')
        cy.get('input[name=chicken]').should('not.be.checked')
        cy.get('input[name=bacon]').should('not.be.checked')
    })
})

describe('Special Instructions', () => {
    it('Checks if there are special instructions', () => {
        cy.get('input[name=specialInstructions]')
            .type('burn it')
        .should('have.value', 'burn it')
    })
})


describe('Submits form', () => {
    it('Submits the form', () => {
        cy.get('button').click()
        cy.get('input[name=name]')
        .should('have.value', '')
    })
}); 