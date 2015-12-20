var async = require('async');
var request = require('request');
var util = require('util');
var base = 'https://graph.facebook.com/v2.5/%s/?access_token=%s';

var Facebook = function() {

};

Facebook.prototype.accessToken = function(accessToken, cb) {
  async.parallel({
    app: function(callback){
      request(util.format(base, 'app', accessToken), function (error, response, body) {
        callback(error, JSON.parse(body));
      });
    },
    user: function(callback){
      request(util.format(base, 'me', accessToken), function (error, response, body) {
        callback(error, JSON.parse(body));
      });
    }
  },
  cb);
};

module.exports = Facebook;
