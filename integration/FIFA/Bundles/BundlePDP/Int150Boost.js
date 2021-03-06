describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit('/')
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_FIFA'))
  
cy.contains('Check availability').click()
         .wait(7000) 


//Bundle PDP FIFA Qual

//******Bundles Optik 7-1 + Int 150 PDP
cy.visit('/product/purefibre-internet150-boost?bundle&variant=9150564125513493939|term,9150280421713159508')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy
.contains('View terms and conditions')
.should('be.visible', { timeout: 5000 })
.click()

//snapshots page for comparison
cy.matchImageSnapshot("Internet 150+ Boost PDP");

})
})