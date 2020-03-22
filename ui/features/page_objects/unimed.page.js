/* eslint-disable import/no-extraneous-dependencies */
const helper = require('../../utils/helper');

class SearchDoctorUnimed {
  constructor() {
    this.searchBar = $('input#campo_pesquisa');
    this.searchBtn = $('#btn_pesquisar');
    this.stateSelect = $$('.css-19bqh2r').get(0);
    this.stateSearchArea = $$('input#react-select-2-input').get(0);
    this.citySelect = $$('.css-19bqh2r').get(1);
    this.citySearchArea = $$('input#react-select-2-input').get(1);
    this.chooseLocation = $('[type="radio"]');
    this.searchByLocationBtn = $('.btn.btn-success');
  }


  searchForMedicalSpecialty(doctor) {
    this.searchBar.sendKeys(doctor);
    return this.searchBtn.click();
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

  choosePreferedLocation() {
    helper.waitForElement(this.chooseLocation);
    return this.chooseLocation.click();
  }

  searchUsingLocation() {
    return this.searchByLocationBtn.click();
  }
}
module.exports = new SearchDoctorUnimed();
