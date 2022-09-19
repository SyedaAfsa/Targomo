class PoiPage {
    selectCatergory(number){
        cy.get(`#mat-checkbox-${number}`)
          .should('be.visible')
          .click();
    }
    embedMap(){
        cy.get('.mat-button-wrapper > div > span')
          .should('be.visible')
          .click();
    }
    goToPage(){
        cy.visit('/');
        cy.get('.accept')
          .should('be.visible')
          .click();
    }
    copyCode(){
        cy.get('code').then($text=>{
            cy.log($text.text());
        });
        cy.get('.mat-dialog-actions > .mat-flat-button > .mat-button-wrapper')
          .should('be.visible')
          .click();
    }
}

export default new PoiPage