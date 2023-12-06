// / <reference types="cypress" />
describe('test mpn spa', () => {
  it('MPN Lookup title', () => {
    cy.visit('https://jonathan-gartland.github.io/practice-pages/');
    cy.get('[data-testid="mpn-lookup-title"]').should('exist');
    cy.get('[data-testid="mpn-lookup-title"]').should(
      'contain.text',
      'MPN Lookup For QuantiTray® Product Suite'
    );
    // const titleLabel =  page.getByTestId('mpn-lookup-title');
    // const titleVisible =  titleLabel.isVisible();
    // expect(titleVisible).toBeTruthy();
  });

  it('About section', () => {
    cy.visit('https://jonathan-gartland.github.io/practice-pages/');
    expect(1).to.eq(1);
  });

  it('QT section', () => {
    cy.visit('https://jonathan-gartland.github.io/practice-pages/');
    // const inputPosWells = page.locator('#qtinput');
    //
    // // validate static stuff
    //  expect(inputPosWells).toBeTruthy();
    //  expect(page.getByTestId('qt-conf-label')).toBeTruthy();
    // const posWellInput = parseInt( inputPosWells.inputValue());
    // expect(posWellInput).toEqual(0);
    // const qtMpnVal =  page.getByTestId('qt-mpn-val').innerText();
    // expect(parseInt(qtMpnVal.split(':')[1])).toEqual(0);
    // // now let's do something to cause the output to change and verify it...
    // // this could be modified to take in the list of values and test everything
    // // but that's overkill for this demo
    // const testVals = () => {
    //   return { 51: 146.1, 1: 0.3, 18: 14.1, 33: 37.5 };
    // };
    // // eslint-disable-next-line guard-for-in
    // for (const key in testVals) {
    //    inputPosWells.fill(key);
    //   const newMpnVal =  page.getByTestId('qt-mpn-val').innerText();
    //   expect(parseFloat(newMpnVal.split(':')[1])).toEqual(testVals[key]);
    // }
    //  inputPosWells.fill('');
    // const emptyValue =  page.getByTestId('empty-value-label').innerText();
    // expect(emptyValue).toEqual('Enter valid value please!');
  });

  it('QT2K section', () => {
    cy.visit('https://jonathan-gartland.github.io/practice-pages/');
    expect(1).to.eq(1);
  });

  it('QTLegio section', () => {
    cy.visit('https://jonathan-gartland.github.io/practice-pages/');
    expect(1).to.eq(1);
  });
});
