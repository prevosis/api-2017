var Request = require('./Request');
var registration = require('../utils/registration');


var required = ['age', 'gender', 'school',  'graduationYear', 'major', 'diet', 'professionalInterest', 'linkedinUrl', 'githubUrl', 'siteUrl', 'hackathonAttendance', 'initiatives',  'hardwareDesired', 'openSourceInterests', 'extraInformation', 'tshirtSize'];
var validations = {
	'tshirtSize': ['string', registration.verifyTshirtSize]
};

// usable whenever a request is made to create a Hacker
function RegisteredHackerCreationRequest(parameters) {
	Request.call(this, parameters);

	this.required = required;
	this.validations = validations;
}

RegisteredHackerCreationRequest.prototype = Object.create(Request.prototype);
RegisteredHackerCreationRequest.prototype.constructor = RegisteredHackerCreationRequest;

module.exports = RegisteredHackerCreationRequest;
