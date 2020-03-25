/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const {
  Given, When, Then, setDefaultTimeout,
} = require('cucumber');
const { browser, protractor } = require('protractor');
const helper = require('../../utils/helper');
const searchForDoctor = require('../page_objects/unimed.page');
const homePage = require('../page_objects/unimedHome.page');
const searchResult = require('../page_objects/searchDoctorResult.page');
const cityRio = 'Rio de Janeiro';
const doctorRio = 'Neurologia';
const citySaoPaulo = "São Paulo"

setDefaultTimeout(35 * 1000);


// Start GIVEN statements
Given('que eu esteja no portal da unimed', async () => {
  await helper.openPage('/');
  await helper.waitForElementToBeClickable(homePage.doctorGuideMenu);
});

// Start WHEN statements
When('decido procurar por um médico', () => {
  homePage.accessDoctorGuideMenu();
});

When('escolho a especialidade {string} na cidade do {string}', { timeout: 40000 }, async (string, string2) => {
  await helper.waitForElement(searchForDoctor.searchBar);
  await searchForDoctor.searchForMedicalSpecialty(string);
  await helper.waitForElementToBeClickable(searchForDoctor.stateSelect);
   await searchForDoctor.chooseState(string2);
  //  await searchForDoctor.chooseCity(string2);
   await searchForDoctor.choosePreferedLocation();
   await searchForDoctor.search();
});

When('decido visualizar a segunda página do resultado da pesquisa', async() => {
  await helper.waitForElement(searchResult.pageTwo);
  await searchResult.goToResultSecondPage();
});

When('decido visualizar a terceira página do resultado da pesquisa', async () =>  {
  await helper.waitForElement(searchResult.pageThree);
  await searchResult.goToResultSecondPage();
});

// Start THEN statements
Then('devo visualizar a listagem dessa expecialidade na cidade', async() => {
   await helper.waitForElement(searchResult.pageTwo);
   await searchResult.getAllDoctorSpecialtyOnPage().then((text) => {
     const doctorResult = text.toString().trim();
     const changeResult = doctorResult.split(",")
     for (let i = 0; i < changeResult.length; i++) {     
        expect(changeResult[i]).to.equal('Neurologia')
      }
   });
});

Then('o resultado da pesquisa não deve conter informações da cidade de São Paulo', async() => {
  await helper.waitForElement(searchResult.pageTwo);
   await searchResult.getAllCityElementOnPage().then((text) => {
      const addressResult =  text.toString().trim();
      const changeResult = addressResult.split(",")
      let result = 0; 
      for (let i = 0; i < changeResult.length; i++) { 
        if(changeResult[i].includes('Rio de Janeiro')){
          result++
        }    
      }
        expect(result).to.equal(20)
      });
});