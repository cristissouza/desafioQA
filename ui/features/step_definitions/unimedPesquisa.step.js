/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const {
  Given, When, Then, setDefaultTimeout,
} = require('cucumber');
const { browser } = require('protractor');
const helper = require('../../utils/helper');
const searchForDoctor = require('../page_objects/unimed.page');
const homePage = require('../page_objects/unimedHome.page');

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
  helper.waitForElement(searchForDoctor.searchBar);

  await searchForDoctor.searchForMedicalSpecialty(string);
  await helper.waitForElement(searchForDoctor.stateSelect);
  await searchForDoctor.chooseState(string2);
  await helper.waitForElementToBeClickable(searchForDoctor.citySelect);
  await searchForDoctor.chooseCity(string2);
  await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  await searchForDoctor.choosePreferedLocation();
  await helper.waitForElementToBeClickable(searchForDoctor.searchBtn);
  await searchForDoctor.search();
});


// Start THEN statements
Then('devo visualizar a listagem dessa expecialidade na cidade', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('a primeira página da pesquisa não deve conter especialista na cidade de São Paulo', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('a segunda página da pesquisa não deve conter especialista na cidade de São Paulo', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('a terceira página da pesquisa não deve conter especialista na cidade de São Paulo', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');
