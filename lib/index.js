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

  // BUSINESS ENDPOINTS

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

  business(id, parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/businesses/{id}',
      urlParams:{
        id: id
      },
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  reviews(businessId, parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/businesses/{id}/reviews',
      urlParams:{
        id: businessId
      },
      query: parameters,
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

  businessMatch(parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/businesses/matches',
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  // EVENTS ENDPOINTS

  eventLookup(eventId, parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/events/{id}',
      urlParams:{
        id: eventId
      },
      query:parameters,
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

  featuredEvent(parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/events/featured',
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  // CATEGORIES ENDPOINTS

  allCategories(parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/categories',
      query: parameters,
      bearerToken: this.apiKey
    });
  }

  categoryDetails(alias, parameters){
    return this.send({
      url: 'https://api.yelp.com/v3/categories/{alias}',
      urlParams:{
        alias: alias
      },
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
