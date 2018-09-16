# yelp-fusion
[![npm version](https://badge.fury.io/js/yelp-fusion.svg)](https://badge.fury.io/js/yelp-fusion) [![Build Status](https://travis-ci.org/tonybadguy/yelp-fusion.svg?branch=master)](https://travis-ci.org/tonybadguy/yelp-fusion) [![codecov](https://codecov.io/gh/tonybadguy/yelp-fusion/branch/master/graph/badge.svg)](https://codecov.io/gh/tonybadguy/yelp-fusion) 

Yelp Fusion API client for Node.js with Promises

Please refer to official Yelp documentation for request / response model details:
https://www.yelp.com/developers/documentation/v3

#### V2 Breaking Changes
* ```yelp.accessToken()``` method is removed because OAuthV2 is being deprecated by the API. Use the new API Key in place of the token derived from client id and client secret. See https://www.yelp.com/developers/documentation/v3/authentication#where-is-my-client-secret-going

## Install NPM Package
```
npm install yelp-fusion --save
```

## Search
```javascript
'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client(apiKey);

client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});
```

## Phone Search
```javascript
'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client(apiKey);

client.phoneSearch({
  phone:'+14157492060'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});
```

## Transaction Search
```javascript
'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client(apiKey);

client.transactionSearch('delivery', {
  location:'san diego'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});
```

## Business
```javascript
'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client(apiKey);

client.business('gary-danko-san-francisco').then(response => {
  console.log(response.jsonBody.name);
}).catch(e => {
  console.log(e);
});
```

## Reviews
```javascript
'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client(apiKey);

client.reviews('gary-danko-san-francisco').then(response => {
  console.log(response.jsonBody.reviews[0].text);
}).catch(e => {
  console.log(e);
});
```

## Autocomplete
```javascript
'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client(apiKey);

client.autocomplete({
  text:'pizza'
}).then(response => {
  console.log(response.jsonBody.terms[0].text);
}).catch(e => {
  console.log(e);
});
```

## Business Match
```javascript
'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client(apiKey);

// matchType can be 'lookup' or 'best'
client.businessMatch('lookup', {
  name: 'Pannikin Coffee & Tea',
  address1: '510 N Coast Hwy 101',
  address2: 'Encinitas, CA 92024',
  city: 'Encinitas',
  state: 'CA',
  country: 'US'
}).then(response => {
  console.log(response.jsonBody.businesses[0].id);
}).catch(e => {
  console.log(e);
});
```

## Event Search
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client(apiKey);

client.eventSearch({
  categories:2,
  is_free:true,
  location: 'claremont, ca'
}).then(response => {
  console.log(response.jsonBody.events[0].name);
}).catch(e => {
  console.log(e);
});
```

## Advanced Request Options -- SocketTimeout

Socket Timeout will abort the request if the server doesn't complete the response within that time in milliseconds.

```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client(apiKey, {
  socketTimeout: 5000
});

// or optionally
// client.options.socketTimeout = 5000;
```

Additionally, the options object support all fields defined here:
https://nodejs.org/api/http.html#http_http_request_options_callback
