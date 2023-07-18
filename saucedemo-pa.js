

describe('nttdapabloarteaga', () => {

    
    it('nttdataprueba', () => {    

      //Autenticarse con el usuario: standard_user y password: secret_sauce
      cy.visit('https://www.saucedemo.com/');  
      cy.get('[data-test="username"]').clear()
      cy.get('[data-test="username"]').type('standard_user')    

      cy.get('[data-test="password"]').clear()
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()       

      // Agregar dos productos al carrito
      cy.contains('Sauce Labs Backpack')
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.contains('Sauce Labs Bike Light')        
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      
      
      // Visualizar el carrito
      cy.get('.shopping_cart_badge').click()
      
      // Completar el formulario de compra
      cy.get('[data-test="checkout"]').click()

      cy.get('[data-test="firstName"]').type('Pablo')
      cy.get('[data-test="lastName"]').type('Arteaga')
      cy.get('[data-test="postalCode"]').type('ec1234')
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
      
     
    })
      

    it('Validacion Finalizar', () => 
      {   
        // Finalizar la compra hasta la confirmación: “THANK YOU FOR YOUR ORDER”
        cy.contains('Thank you for your order!')  

    })
    

    

})