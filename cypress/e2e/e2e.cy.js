// / <reference types="cypress" />
describe('test mpn spa', () => {
  it('MPN Lookup title', () => {
    cy.visit('https://jonathan-gartland.github.io/practice-pages/');
    cy.get('[data-testid="mpn-lookup-title"]').should('exist');
    cy.get('[data-testid="mpn-lookup-title"]').should(
      'contain.text',
      'MPN Lookup For QuantiTray® Product Suite'
    );
  });

  // it('About section', () => {
  //   cy.visit('https://jonathan-gartland.github.io/practice-pages/');
  //   expect(1).to.eq(1);
  // });

  it('QT section', () => {
    const posWells = '#qtinput'; // move to PO
    const qtMpnVal = '[data-testid="qt-mpn-val"]';
    const emptyValueMpn = '[data-testid="empty-value-label"]';
    const testVals = { 51: '146.1', 1: '0.3', 18: '14.1', 33: '37.5' };

    // cy.get('[data-testid="qt-conf-label"]');
    cy.visit('https://jonathan-gartland.github.io/practice-pages/');
    cy.get(posWells).should('exist');
    cy.get(posWells)
      .invoke('val')
      .then(($posWells) => {
        expect(parseInt($posWells)).to.eq(0);
      });

    cy.get(qtMpnVal).should('contain.text', '0');
    // eslint-disable-next-line guard-for-in
    for (const testValsKey in testVals) {
      cy.get(posWells).clear().type(testValsKey);
      cy.get(qtMpnVal).should(
        'contain.text',
        `${testVals[testValsKey.toString()]}`
      );
    }
    cy.get(posWells).clear().type(' ');
    cy.get(emptyValueMpn).should('contain.text', 'Enter valid value please!');
  });

  // it('QT2K section', () => {
  //   cy.visit('https://jonathan-gartland.github.io/practice-pages/');
  //   expect(1).to.eq(1);
  // });
  //
  // it('QTLegio section', () => {
  //   cy.visit('https://jonathan-gartland.github.io/practice-pages/');
  //   expect(1).to.eq(1);
  // });
});
