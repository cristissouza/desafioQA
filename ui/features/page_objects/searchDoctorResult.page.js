/* eslint-disable import/no-extraneous-dependencies */
const { browser, element, protractor } = require('protractor');
const helper = require('../../utils/helper');


class SearchResult {
  constructor() {
    this.doctor =  $$('#txt_especialidade+span');
    this.pageTwo = $$('a[href*=lista_por]').get(4)
    this.pageThree = $$('a[href*=lista_por]').get(5)
    this.address = $$('span#txt_endereco')
  }

  goToResultSecondPage(){
    browser.actions().sendKeys(protractor.Key.PAGE_DOWN).perform();
    return this.pageTwo.click();
    
  }

  goToResultThrirdPage(){
    browser.actions().sendKeys(protractor.Key.PAGE_DOWN).perform();
    return this.pageThree.click();
  }

  async getAllDoctorSpecialtyOnPage(){
    return this.doctor.map( item => item.getText());

  }

  async getAllCityElementOnPage(city) {
    return this.address.map( item => item.getText());
  }
}
module.exports =  new SearchResult()