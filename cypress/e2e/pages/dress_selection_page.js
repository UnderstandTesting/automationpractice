/// <reference types="cypress" />
import HomePage from '../pages/home_page'
const homePage = new HomePage();

const ADDTOCART = ':nth-child(X) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span'
const CONTINUESHOPPING = '.continue > span'
const VIEWSHOPPINGCART = '[title="View my shopping cart"]'
const PRODUCTTOTAL = '#total_product'


class DressSelectionPage {

    selectHighestPricedDress(){

        homePage.getHigestPriceIndex().then((value) => {
            const ADDTOCARTBUTTON = ADDTOCART.replace('X',value)
            cy.log(ADDTOCARTBUTTON)
            cy.get(ADDTOCARTBUTTON).click()          
        })
    }

    continueShoping(){
        cy.get(CONTINUESHOPPING).should('be.visible')
        cy.get(CONTINUESHOPPING).click()
    }

    validiateHigestPriceProductIsSelected(value){
        cy.get(VIEWSHOPPINGCART).click()
        cy.get(PRODUCTTOTAL).contains(value)
    }

    
}

export default DressSelectionPage;