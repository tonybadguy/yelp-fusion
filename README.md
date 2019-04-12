# yelp-fusion
[![npm version](https://badge.fury.io/js/yelp-fusion.svg)](https://badge.fury.io/js/yelp-fusion) [![Build Status](https://travis-ci.org/tonybadguy/yelp-fusion.svg?branch=master)](https://travis-ci.org/tonybadguy/yelp-fusion) [![codecov](https://codecov.io/gh/tonybadguy/yelp-fusion/branch/master/graph/badge.svg)](https://codecov.io/gh/tonybadguy/yelp-fusion) 

Yelp Fusion API client for Node.js with Promises

Please refer to official Yelp documentation for request / response model details:
https://www.yelp.com/developers/documentation/v3

#### V3 Breaking Changes
The following beta endpoints have been deprecated by the API since April 1, 2019. This library has been updated to reflect this change.
* ```GET https://api.yelp.com/v3/businesses/matches/best```
* ```GET https://api.yelp.com/v3/businesses/matches/lookup```

See https://www.yelp.com/developers/documentation/v3/business_match for more info

#### V2 Breaking Changes
* ```yelp.accessToken()``` method is removed because OAuthV2 is being deprecated by the API. Use the new API Key in place of the token derived from client id and client secret. See https://www.yelp.com/developers/documentation/v3/authentication#where-is-my-client-secret-going

## Install NPM Package
```
npm install yelp-fusion --save
```

<br/>

## Table of Contents
Business Endpoints:
  * [Business Search](#business-search)
  * [Phone](#phone-search)
  * [Delivery](#transaction-search)
  * [Business Details](#business-details)
  * [Match](#business-match)
  * [Reviews](#reviews)
  * [Autocomplete](#autocomplete)

Event Endpoints:
  * [Event Lookup](#event-lookup)
  * [Event Search](#event-search)
  * [Featured Event](#featured-event)

Category Endpoints:
  * [All Categories](#all-categories)
  * [Category Details](#category-details)

<br/>

## Business Endpoints 

### Business Search
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.search({
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca',
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});
```

### Phone Search
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.phoneSearch({
  phone: '+14157492060'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});
```

### Transaction Search
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.transactionSearch('delivery', {
  location: 'san diego'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});
```

### Business Details
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.business('gary-danko-san-francisco').then(response => {
  console.log(response.jsonBody.name);
}).catch(e => {
  console.log(e);
});
```

### Business Match
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.businessMatch({
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

### Reviews
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.reviews('gary-danko-san-francisco').then(response => {
  console.log(response.jsonBody.reviews[0].text);
}).catch(e => {
  console.log(e);
});
```

### Autocomplete
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.autocomplete({
  text: 'pizza'
}).then(response => {
  console.log(response.jsonBody.terms[0].text);
}).catch(e => {
  console.log(e);
});
```
<br/>

## Event Endpoints

### Event Lookup
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.eventLookup("oakland-saucy-oakland-restaurant-pop-up").then(response => {
  console.log(response.jsonBody.description);
}).catch(e => {
  console.log(e);
});
```

### Event Search
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.eventSearch({
  categories: 2,
  is_free: true,
  location: 'claremont, ca'
}).then(response => {
  console.log(response.jsonBody.events[0].name);
}).catch(e => {
  console.log(e);
});
```

### Featured Event
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.featuredEvent({
  location: 'claremont, ca'
}).then(response => {
  console.log(response.jsonBody.description);
}).catch(e => {
  console.log(e);
});
```
<br/>

## Category Endpoints 

### All Categories
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.allCategories().then(response => {
  console.log(response.jsonBody.categories[0].alias);
}).catch(e => {
  console.log(e);
});
```

### Category Details
```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');

client.categoryDetails('3dprinting').then(response => {
  console.log(response.jsonBody.category.title);
}).catch(e => {
  console.log(e);
});
```

<br/>

## Advanced Request Options -- SocketTimeout

Socket Timeout will abort the request if the server doesn't complete the response within that time in milliseconds.

```javascript
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY', {
  socketTimeout: 5000
});

// or optionally
// client.options.socketTimeout = 5000;
```

Additionally, the options object support all fields defined here:
https://nodejs.org/api/http.html#http_http_request_options_callback
