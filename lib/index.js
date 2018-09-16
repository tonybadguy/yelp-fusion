'use strict';

const _send = require('@tonybadguy/call-me-maybe');

class YelpClient {
  constructor(apiKey, options){
    this.apiKey = apiKey;
    this.options = {};
    
    if(typeof options !== 'undefined'){
      this.options = options;
    }
  }
  
  send(requestOptions){
    const combinedOptions = Object.assign({}, requestOptions, this.options);
    return _send(combinedOptions);
  };

  search(parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/businesses/search',
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  phoneSearch(parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/businesses/search/phone',
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  transactionSearch(transactionType, parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/transactions/{transaction_type}/search',
      urlParams:{
        transaction_type: transactionType
      },
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  business(id){
    return this.send({
      url: 'https://api.yelp.com/v3/businesses/{id}',
      urlParams:{
        id: id
      },
      bearerToken: this.apiKey
    });
  }

  reviews(businessId){
    return this.send({
      url: 'https://api.yelp.com/v3/businesses/{id}/reviews',
      urlParams:{
        id: businessId
      },
      bearerToken: this.apiKey
    });
  }

  autocomplete(parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/autocomplete',
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  businessMatch(matchType, parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/businesses/matches/{match_type}',
      urlParams:{
        match_type: matchType
      },
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  eventSearch(parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/events',
      query: parameters,
      bearerToken: this.apiKey
    });
  }
}

const createClient = (apiKey, options) => {
  return new YelpClient(apiKey, options);
};

module.exports = {
  client: createClient
};
