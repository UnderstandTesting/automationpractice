/// <reference types="cypress" />

import HomePage from '../pages/home_page'
import DressSelectionPage from '../pages/dress_selection_page'

const homePage = new HomePage();
const dressSelectionPage = new DressSelectionPage();

describe('Add to items to the cart', () => {

    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')
    })

    it('select the highest priced dress and add to cart', () => {

        homePage.selectDresses()
        dressSelectionPage.selectHighestPricedDress()
        dressSelectionPage.continueShoping()
        dressSelectionPage.validiateHigestPriceProductIsSelected(50.99)

    })

})