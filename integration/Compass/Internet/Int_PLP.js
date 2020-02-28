describe('Internet Plans', function() {
    it('Gets, types and visual assertion', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillCompassAddress() 
   
//lands back on home page
//Go to internet plans 
cy.get('[data-qa=button-internet]').click()
.wait(2000)

//Error messaging ineligible plan visble
cy.contains("We're working on getting PureFibre to your area.").should('be.visible')
.wait(2000)

//Error messaging ineligible plan visble close
cy.get('.StyledInteractiveIconButton-sc-1phwvk2-0').click()

//Expand See More Section
cy.contains('See more plans').click()
.wait(2000)

//click view details drop for 2 year term
cy.get('[data-qa=link-details-internet-25-24]').click()
cy.get('[data-qa=link-details-internet-75-24]').click()
cy.get('[data-qa=link-details-internet-150-30-24]').click()
cy.get('[data-qa=link-details-internet-15-24]').click()

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snap full page exposure for 2 year term
cy.matchImageSnapshot("Int plans 2yr");

//uncheck to see no-term plan
cy.get('[data-qa=checkbox-internet-25-24]').click()
cy.get('[data-qa=checkbox-internet-75-24]').click()
cy.get('[data-qa=checkbox-internet-150-30-24]').click()
cy.get('[data-qa=checkbox-internet-15-24]').click()


//click view details drop for no term
cy.get('[data-qa=link-details-internet-25-0]').click()
cy.get('[data-qa=link-details-internet-75-0]').click()
cy.get('[data-qa=link-details-internet-150-30-0]').click()
cy.get('[data-qa=link-details-internet-15-0]').click()


//snap full page exposure for no -term
cy.matchImageSnapshot("Int plans no term");




    })
  })
  