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
   await helper.waitForElement(searchForDoctor.searchBtn);
   await searchForDoctor.choosePreferedLocation();
   await searchForDoctor.search();
});

When('decido visualizar a segunda página do resultado da pesquisa', async() => {
  await helper.waitForElement(searchResult.doctor);
  await helper.waitForElement(searchResult.pageTwo);
  await searchResult.goToResultSecondPage();
  await helper.waitForElement(searchResult.doctor);
});

When('decido visualizar a terceira página do resultado da pesquisa', async () =>  {
  await helper.waitForElement(searchResult.doctor);
  await helper.waitForElement(searchResult.pageThree);
  await searchResult.goToResultSecondPage();
  await helper.waitForElement(searchResult.doctor);
});

// Start THEN statements
Then('devo visualizar a listagem dessa expecialidade na cidade', async() => {
  await browser.sleep(5000)

 const searchMatchDoctor =  await searchResult.getAllDoctorSpecialtyOnPage(doctorRio);
 expect(searchMatchDoctor).to.equal(20);

 const searchMatchCity =  await searchResult.getAllCityElementOnPage(cityRio);
 expect(searchMatchCity).to.equal(20);
});

Then('o resultado da pesquisa não deve conter informações da cidade de São Paulo', async() => {
  await helper.waitForElement(searchResult.doctor);
  const searchMatchDoctor = await searchResult.getAllCityElementOnPage(citySaoPaulo);
  expect(searchMatchCity).to.equal(0);
});