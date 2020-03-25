/* eslint-disable import/no-extraneous-dependencies */
const { browser, element } = require('protractor');
const helper = require('../../utils/helper');


class SearchResult {
  constructor() {
    this.doctor =  $$('#txt_especialidade+span');
    this.pageTwo = $$('a[href*=lista_por]').get(4)
    this.pageThree = $$('a[href*=lista_por]').get(5)
    this.address = $$('span#txt_endereco')
  }

  goToResultSecondPage(){
    return this.pageTwo.click();
  }

  goToResultThrirdPage(){
    return this.pageThree.click();
  }

  async getAllDoctorSpecialtyOnPage(doctor){
    const specialtyResult =  (await this.doctor).map( async (item) => {await  item.getText(); });
    let result = 0;
    for (let i = 0; i < specialtyResult.length; i++) {
      let elem = specialtyResult[i];
      if(elem.includes(doctor) === true){
        result++
      }
    }
    return result;
  }


  async getAllCityElementOnPage(city) {
    const addressResult = ( await this.address).map(async (item) => { await item.getText(); });
    let result = 0;
    for (let i = 0; i < addressResult.length; i++) {
      if(addressResult[i].includes(city)){
        result++
      }
    }
    return result;
  }

}
module.exports =  new SearchResult()