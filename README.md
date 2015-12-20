# sd-id
Identifies the user and application based facebook access token

## Example

    var Facebook = require('sd-id');
    var facebook = new Facebook();

    facebook.accessToken(process.env.FACEBOOK_ACCESS_TOKEN, function(error, result) {
      console.log(error);
      console.log(result);
    });

## More info

https://developers.facebook.com/docs/facebook-login/access-tokens
