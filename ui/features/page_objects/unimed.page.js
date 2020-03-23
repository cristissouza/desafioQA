/* eslint-disable import/no-extraneous-dependencies */
const { browser, element } = require('protractor');
const helper = require('../../utils/helper');


class SearchDoctorUnimed {
  constructor() {
    this.searchBar = $('input#campo_pesquisa');
    this.searchDoctorBtn = $('#btn_pesquisar');
    this.stateSelect = $$('.css-19bqh2r').get(0);
    this.stateSearchArea = $$('input#react-select-2-input').get(0);
    this.citySelect = $$('.css-19bqh2r').get(1);
    this.citySearchArea = $$('input#react-select-2-input').get(1);
    // this.chooseLocation = element(by.xpath('//*[contains(text(),"UNIMED RIO")]'));
    this.chooseLocation = $('input[type="radio]');
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

  chooseCity(city) {
    helper.waitForElement(this.citySearchArea);
    this.citySelect.click();
    return helper.searchSelectOption(this.citySearchArea, city);
  }

  async choosePreferedLocation() {
    await helper.waitForElement(this.chooseLocation);
    return this.chooseLocation.click();
  }

  search() {
    helper.waitForElementToBeClickable(this.searchBtn);
    return this.searchBtn.click();
  }
}
module.exports = new SearchDoctorUnimed();
