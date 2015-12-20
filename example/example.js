var Facebook = require('../lib/sd-id');
var facebook = new Facebook();

facebook.accessToken(process.env.FACEBOOK_ACCESS_TOKEN, function(error, result) {
  console.log(error);
  console.log(result);
});
