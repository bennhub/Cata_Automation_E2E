describe('Internet Plans', function() {
    it('Gets, types and visual tests', function() {

///Visit base url then qual compass
cy.visit('/')
.contains('Get started').click()
.fillCompassAddress() 
   
//visit internet 150 2yr PDP
cy.visit('/product/internet-150-30')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
//cy.compareSnapshot("Int PDP");
cy.matchImageSnapshot("Int PDP");


//go to internet 150 no-term PDP
cy.contains('Switch to no term plan').click()
         .wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 
//snapshots page for comparison
//cy.compareSnapshot("Int_150 NoTerm");
cy.matchImageSnapshot("Int_150 NoTerm");

    
//visit internet 75 2yr PDP
cy.visit('/product/internet-75')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 


//snapshots page for comparison
//cy.compareSnapshot("Int 75 2yr PDP");
cy.matchImageSnapshot("Int 75 2yr PDP");

//go to internet 75 no-term PDP
cy.contains('Switch to no term plan').click()
         .wait(2000) 
        
 //Opens T & C section
cy.contains('View terms and conditions').click()
        .wait(2000) 
                 

//snapshots page for comparison
//cy.compareSnapshot("Int 75 noTerm PDP");
cy.matchImageSnapshot("Int 75 noTerm PDP");






    })
  })
  