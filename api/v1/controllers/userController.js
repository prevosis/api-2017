var errors = require('../errors');
var UserService = require('../services/UserService');
var AuthService = require('../services/AuthService');

var router = require('express').Router();

function createHacker (req, res, next) {
	if (req.body.password !== req.body.confirmedPassword){
		var message = "Passwords do not match";
		var source = "confirmedPassword";

		return next(new errors.InvalidParameterError(message, source));
	}

	UserService
		.createUser(req.body.email, req.body.password, 'HACKER')
		.then(function (user) {
			return AuthService.issueForUser(user);
		})
		.then(function (auth) {
			res.body = {};
			res.body.auth = auth;

			next();
		})
		.catch(function (error) {
			next(error);
		});
}

router.post('', createHacker);

module.exports.createHacker = createHacker;
module.exports.router = router;
