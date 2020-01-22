describe('Pik Addons', function() {
    it('Gets, types and visual tests', function() {

//Visits Home and begins to qual
cy.visit(Cypress.env('baseUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//visit internet 150 2yr PDP
cy.visit('https://www.telus.com/en/shop/home/pik/addons')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
         .wait(2000) 

//Opens T &C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Pik Addons PLP");


//visit Pik Addon Apple TV 32gb
cy.visit('https://www.telus.com/en/shop/home/product/apple-tv')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens Details section
cy.contains('Details').click()
.wait(2000)

//Opens Whats in the box
cy.contains("What’s in the box").click()
.wait(2000) 

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
.wait(2000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Pik Addons Apple TV");




    })
  })
  