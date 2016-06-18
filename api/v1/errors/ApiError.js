var ERROR_TYPE = 'ApiError';
var ERROR_TITLE = 'API Error';
var STATUS_CODE = 500;

var DEFAULT_DETAIL = "An error occurred. If this persists, please contact us.";

function ApiError(detail, source) {
  this.type = ERROR_TYPE;
  this.status = STATUS_CODE;
  this.title = ERROR_TITLE;
  this.detail = (detail) ? detail : DEFAULT_DETAIL;
  this.source = (source) ? source : null;

  this.isApiError = true;
}

ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.toJSON = function() {
  return {
	type: this.type,
	status: this.status,
	title: this.title,
	detail: this.detail,
	source: this.source
  };
};

module.exports = ApiError;
