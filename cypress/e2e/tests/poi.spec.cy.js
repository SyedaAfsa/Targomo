import poi from '../pages/poi'

describe('Poi Page', () =>{
    beforeEach(()=>{
      poi.goToPage();
    })
    it('select and deselect any group of Poi from the tree component',() =>{
        poi.selectCatergory(2);
        cy.url().should('eq', Cypress.config().baseUrl + '?lat=40.763313&lng=-73.973058&zoom=11&selected=g_vehicle');
        poi.selectCatergory(2);
        cy.url().should('eq', Cypress.config().baseUrl + '?lat=40.763313&lng=-73.973058&zoom=11');
    });
    it('select multiple groups of Poi from the tree component',() =>{
        poi.selectCatergory(2);
        poi.selectCatergory(5);
        cy.url().should('eq', Cypress.config().baseUrl + '?lat=40.763313&lng=-73.973058&zoom=11&selected=g_vehicle,g_leisure');

        
    });
    it('embed the map by coping the link and paste on the log and close it',() =>{
        poi.embedMap();
        poi.copyCode();
    });
  })