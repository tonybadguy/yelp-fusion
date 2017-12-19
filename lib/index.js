'use strict';

const _send = require('@tonybadguy/call-me-maybe');

class YelpClient {
  constructor(apiKey){
    this.apiKey = apiKey;
  }
  
  search(parameters){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/search',
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  phoneSearch(parameters){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/search/phone',
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  transactionSearch(transactionType, parameters){
    return _send({
      url: 'https://api.yelp.com/v3/transactions/{transaction_type}/search',
      urlParams:{
        transaction_type: transactionType
      },
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  business(id){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/{id}',
      urlParams:{
        id: id
      },
      bearerToken: this.apiKey
    });
  }

  reviews(businessId){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/{id}/reviews',
      urlParams:{
        id: businessId
      },
      bearerToken: this.apiKey
    });
  }

  autocomplete(parameters){
    return _send({
      url: 'https://api.yelp.com/v3/autocomplete',
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  businessMatch(matchType, parameters){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/matches/{match_type}',
      urlParams:{
        match_type: matchType
      },
      query: parameters,
      bearerToken: this.apiKey
    });
  }
}

const createClient = (apiKey) => {
  return new YelpClient(apiKey);
};

module.exports = {
  client: createClient
};
