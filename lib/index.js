'use strict';

const _send = require('@tonybadguy/call-me-maybe');

class YelpClient {
  constructor(token){
    this.token = token;
  }
  
  search(parameters){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/search',
      query: parameters,
      bearerToken: this.token
    });
  }

  phoneSearch(parameters){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/search/phone',
      query: parameters,
      bearerToken: this.token
    });
  }

  transactionSearch(transactionType, parameters){
    return _send({
      url: 'https://api.yelp.com/v3/transactions/{transaction_type}/search',
      urlParams:{
        transaction_type: transactionType
      },
      query: parameters,
      bearerToken: this.token
    });
  }

  business(id){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/{id}',
      urlParams:{
        id: id
      },
      bearerToken: this.token
    });
  }

  reviews(businessId){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/{id}/reviews',
      urlParams:{
        id: businessId
      },
      bearerToken: this.token
    });
  }

  autocomplete(parameters){
    return _send({
      url: 'https://api.yelp.com/v3/autocomplete',
      query: parameters,
      bearerToken: this.token
    });
  }
}

const accessToken = (clientId, clientSecret) => {
  return _send({
    url: 'https://api.yelp.com/oauth2/token',
    method: 'post',
    urlencodedBody: {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret
    }
  });
};

const createClient = (token) => {
  return new YelpClient(token);
};

module.exports = {
  client: createClient,
  accessToken: accessToken
};
