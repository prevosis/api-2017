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
endpoints['/registration/admin'] = {
	POST: requests.RegisteredAdminCreationRequest
};
endpoints['/registration/hacker'] = {
	POST: requests.RegisteredHackerCreationRequest
};
endpoints['/registration/mentor'] = {
	POST: requests.RegisteredMentorCreationRequest
};
endpoints['/registration/sponsor'] = {
	POST: requests.RegisteredSponsorCreationRequest
};
endpoints['/registration/staff'] = {
	POST: requests.RegisteredStaffCreationRequest
};
endpoints['/registration/volunteer'] = {
	POST: requests.RegisteredVolunteerCreationRequest
};

module.exports = endpoints;
