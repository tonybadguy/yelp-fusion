'use strict';

const _test = require('tap').test;
const _proxyquire = require('proxyquire');

_test('Default options are combined with request', assert => {

  assert.plan(2);

  const yelp = _proxyquire('./index', {
    '@tonybadguy/call-me-maybe': (request)=>new Promise((resolve, reject) => {
      assert.equal(request.aDefaultOption, 123);
      assert.equal(request.aRequestOption, 456);
      assert.end();
      resolve({});
    })
  });
  
  const client = yelp.client("myapikey");
  client.options = {
    aDefaultOption:123
  };

  client.send({
    aRequestOption:456
  }).then(response => {});
});

_test('Constructor default options are combined with request', assert => {

  assert.plan(2);

  const yelp = _proxyquire('./index', {
    '@tonybadguy/call-me-maybe': (request)=>new Promise((resolve, reject) => {
      assert.equal(request.aDefaultOption, 123);
      assert.equal(request.aRequestOption, 456);
      assert.end();
      resolve({});
    })
  });
  
  const client = yelp.client("myapikey", {
    aDefaultOption:123
  });

  client.send({
    aRequestOption:456
  }).then(response => {});
});
