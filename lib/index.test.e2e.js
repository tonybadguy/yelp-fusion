'use strict';

const _yelp = require('./index');
const _test = require('tap').test;

const apiKey = process.env.TEST_YELP_API_KEY;

_test('Search', assert =>{
  const client = _yelp.client(apiKey);
  client.search({
    term:'Four Barrel Coffee',
    location: 'san francisco, CA'
  }).then(response => {
    assert.true(response.jsonBody.businesses);
    assert.end();
  }).catch(e =>{
    assert.fail(e);
  });
});

_test('Phone search', assert =>{
  const client = _yelp.client(apiKey);
  client.phoneSearch({
    phone:'+14157492060'
  }).then(response => {
    assert.equals(response.jsonBody.businesses[0].id, 'gary-danko-san-francisco');
    assert.end();
  }).catch(e =>{
    assert.fail(e);
  });
});

_test('Transaction search', assert =>{
  const client = _yelp.client(apiKey);
  client.transactionSearch('delivery', {
    location:'san diego'
  }).then(response => {
    assert.true(response.jsonBody.businesses);
    assert.end();
  }).catch(e =>{
    assert.fail(e);
  });
});

_test('Business', assert =>{
  const client = _yelp.client(apiKey);
  client.business('gary-danko-san-francisco').then(response => {
    assert.equals(response.jsonBody.name, 'Gary Danko');
    assert.end();
  }).catch(e =>{
    assert.fail(e);
  });
});

_test('Reviews', assert =>{
  const client = _yelp.client(apiKey);
  client.reviews('gary-danko-san-francisco').then(response => {
    assert.true(response.jsonBody.reviews);
    assert.end();
  }).catch(e =>{
    assert.fail(e);
  });
});

_test('Autocomplete', assert =>{
  const client = _yelp.client(apiKey);
  client.autocomplete({
    text:'pizza'
  }).then(response => {
    assert.true(response.jsonBody.terms);
    assert.end();
  }).catch(e =>{
    assert.fail(e);
  });
});

_test('Business match', assert =>{
  const client = _yelp.client(apiKey);
  client.businessMatch('lookup', {
    name: 'Pannikin Coffee & Tea',
    address1: '510 N Coast Hwy 101, Encinitas, CA 92024',
    city: 'Encinitas',
    state: 'CA',
    country: 'US'
  }).then(response => {
    assert.true(response.jsonBody.businesses[0].id, 'pannikin-coffee-and-tea-encinitas');
    assert.end();
  }).catch(e =>{
    assert.fail(e);
  });
});
