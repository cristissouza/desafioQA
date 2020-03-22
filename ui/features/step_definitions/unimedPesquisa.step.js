/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const {
  Given, When, Then, setDefaultTimeout,
} = require('cucumber');
const { browser } = require('protractor');
const helper = require('../../utils/helper');
const searchForDoctor = require('../page_objects/unimed.page');

setDefaultTimeout(25 * 1000);


// Start GIVEN statements
Given('que eu esteja no portal da unimed', () => {
  helper.openPage('/');
  helper.waitForElementToBeClickable(searchForDoctor.doctorGuideMenu);
});

// Start WHEN statements
When('decido procurar por um médico', () => {
  searchForDoctor.accessDoctorGuideMenu();
});

When('escolho a especialidade {string} na cidade do {string}', { timeout: 30000 }, async (string, string2) => {
  await helper.waitForElement(searchForDoctor.searchBar);
  await searchForDoctor.searchForMedicalSpecialty(string);
  await helper.waitForElement(searchForDoctor.stateSelect);
  await searchForDoctor.chooseState(string2);
  await helper.waitForElementToBeClickable(searchForDoctor.citySelect);
  await searchForDoctor.chooseCity(string2);
  await searchForDoctor.choosePreferedLocation();
  await helper.waitForElementToBeClickable(searchForDoctor.searchByLocationBtn);
  await searchForDoctor.searchUsingLocation();
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
