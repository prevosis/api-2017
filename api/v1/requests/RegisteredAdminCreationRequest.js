var Request = require('./Request');
var registration = require('../utils/registration');


var required = ['tshirtSize'];
var validations = {
	'tshirtSize': ['string', registration.verifyTshirtSize]
};

// usable whenever a request is made to create a Hacker
function RegisteredAdminCreationRequest(parameters) {
	Request.call(this, parameters);

	this.required = required;
	this.validations = validations;
}

RegisteredAdminCreationRequest.prototype = Object.create(Request.prototype);
RegisteredAdminCreationRequest.prototype.constructor = RegisteredAdminCreationRequest;

module.exports = RegisteredAdminCreationRequest;
