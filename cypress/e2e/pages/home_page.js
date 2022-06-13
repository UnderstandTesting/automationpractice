/// <reference types="cypress" />
const  DRESSES = '.sf-menu > :nth-child(2) > .sf-with-ul'
const  DRESSPRICE = '.product-container > .right-block > .content_price > .price'

class HomePage {

    selectDresses(){
        cy.get(DRESSES).should('be.visible')
        cy.get(DRESSES).click()
    }

    getHigestPriceIndex () {

        let higestprice = 0
        let higestpriceindex = 0
        var result = [];

        return new Promise(function(resolve)  {   
            cy.get(DRESSPRICE)
            .each(($el, index, $list) => {
                var val = $el.text()
                var value = val.match(/[+-]?\d+(\.\d+)?/g)
                    if (higestprice < value){
                        higestprice = value
                        higestpriceindex = index      
                    }
                    result.push(higestpriceindex)
            }) .then(function(){
              this.result = result;
              var len = parseInt(this.result.length) - 1
              var higestpriceindex = this.result[len]       
              resolve(parseInt(higestpriceindex)+1)
            })  
        })
    }
    
}

 

export default HomePage;