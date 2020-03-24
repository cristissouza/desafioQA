var request = require('supertest'),
    expect = require('chai').expect;
var assert = require('chai').assert;
var assertionError = require("chai").AssertionError
require('dotenv').config({ path: '.env' });
const url = process.env.URL;
const ID_DO_FILME = 'tt1285016';
const API_KEY = '52ec71bf';
const INVALID_MOVIE_ID = 'xpto';


describe('Movie- Consult movie information', function () {

    it('GET - I can see the movie title', () => {
        request(url)
        .get(`/?i=${ID_DO_FILME}&apikey=${API_KEY}`)
        .set('Content-Type', 'application/json')
        .timeout({ response: 15000, deadline: 10000 })
        .then(result => {
            try {
             expect(result.statusCode, JSON.stringify(result, null, 2)).to.equal(200);
             expect(result.body, JSON.stringify(result, null, 2)).to.have.property("Title");
             assert.equal(result.body.Title, "The Social Network", JSON.stringify(result, null, 2));
            } catch (assertionError) {
                throw new Error(assertionError);      
            }
        });
    });
    it('GET - I can see the movie Year', () => {
        request(url)
        .get(`/?i=${ID_DO_FILME}&apikey=${API_KEY}`)
        .set('Content-Type', 'application/json')
        .timeout({ response: 10000, deadline: 10000 })
        .then(result => {
            try {
             expect(result.statusCode, JSON.stringify(result, null, 2)).to.equal(200);
             expect(result.body, JSON.stringify(result, null, 2)).to.have.property("Year");
             assert.equal(result.body.Year, "2010", JSON.stringify(result, null, 2));
            } catch (assertionError) {
                throw new Error(assertionError);      
            }
        });
    });

    it('GET - I can see the movie Year', () => {
        request(url)
        .get(`/?i=${INVALID_MOVIE_ID}&apikey=${API_KEY}`)
        .set('Content-Type', 'application/json')
        .timeout({ response: 10000, deadline: 10000 })
        .then(result => {
            try {
             expect(result.statusCode, JSON.stringify(result, null, 2)).to.equal(200);
             expect(result.body, JSON.stringify(result, null, 2)).to.have.property("Language");
             assert.equal(result.body.Language, "English, French", JSON.stringify(result, null, 2));
            } catch (assertionError) {
                throw new Error(assertionError);      
            }
        });
    });

    it('GET - I can\'t see a movie with invalid ID', () => {
        request(url)
        .get(`/?i=${ID_DO_FILME}&apikey=${API_KEY}`)
        .set('Content-Type', 'application/json')
        .timeout({ response: 10000, deadline: 10000 })
        .then(result => {
            try {
             expect(result.statusCode, JSON.stringify(result, null, 2)).to.equal(200);
             expect(result.body, JSON.stringify(result, null, 2)).to.have.property("Response");
             assert.equal(result.body.Response, "False", JSON.stringify(result, null, 2));
             expect(result.body, JSON.stringify(result, null, 2)).to.have.property("Error");
             assert.equal(result.body.Response, "Incorrect IMDb ID.", JSON.stringify(result, null, 2));
            } catch (assertionError) {
                throw new Error(assertionError);      
            }
        });
    });
});