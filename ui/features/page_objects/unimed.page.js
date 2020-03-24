/* eslint-disable import/no-extraneous-dependencies */
const { browser, element, by } = require('protractor');
const helper = require('../../utils/helper');


class SearchDoctorUnimed {
  constructor() {
    this.searchBar = $('input#campo_pesquisa');
    this.searchDoctorBtn = $('#btn_pesquisar');
    this.stateSelect = $$('.css-19bqh2r').get(0);
    this.stateSearchArea = $$('input#react-select-2-input').get(0);
    this.citySelect = $$('.css-19bqh2r').get(1);
    this.citySearchArea = $$('input#react-select-2-input').get(1);
    this.chooseLocation = $('input[type="radio"]')
    this.searchBtn = $('button.btn.btn-success');
  }


  searchForMedicalSpecialty(doctor) {
    this.searchBar.sendKeys(doctor);
    return this.searchDoctorBtn.click();
  }

  chooseState(state) {
    helper.waitForElement(this.stateSearchArea);
    this.stateSelect.click();
    return helper.searchSelectOption(this.stateSearchArea, state);
  }

  async chooseCity(city) {
    await helper.waitForElement(this.citySearchArea);
    await browser.executeScript('return arguments[0].click()', this.citySelect);
    return helper.searchSelectOption(this.citySearchArea, city);
  }

  async choosePreferedLocation() {
    await helper.waitForElement(this.chooseLocation);
    await browser.executeScript('return arguments[0].click()', chooseLocation);
    return this;
  }

  search() {
    helper.waitForElementToBeClickable(this.searchBtn);
    return this.searchBtn.click();
  }
}
module.exports = new SearchDoctorUnimed();
