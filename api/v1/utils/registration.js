var _ = require('lodash');

var TSHIRT_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

/**
 * Ensures that the provided tshirt-size is in the list
 * of valid size options
 * @param  {String} size the value to check
 * @return {Boolean} true when the size is valid
 * @throws TypeError when the size is invalid
 */
module.exports.verifyTshirtSize = function (size) {
	if (!_.includes(TSHIRT_SIZES, size);) {
		throw new TypeError(size + " is not a valid size");
	}

	return true;
};
