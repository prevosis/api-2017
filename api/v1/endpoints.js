var requests = require('./requests');

var endpoints = {};

endpoints['/user'] = {
	POST: requests.HackerUserCreationRequest
};
endpoints['/user/accredited'] = {
	POST: requests.AccreditedUserCreationRequest
};

endpoints['/auth'] = {
	POST: requests.AuthTokenRequest
};
endpoints['/auth/reset'] = {
	POST: requests.TokenRequest
};

module.exports = endpoints;
