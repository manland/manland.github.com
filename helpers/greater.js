module.exports.register = function(Handlebars, options) {
  var helpers = {};

  helpers.greater = function(left, right, equal, options) {
    options = options || equal;
    equal = ( equal === 'equal' ) ? true : false;
    var is_greater = equal ? ( left >= right ) : ( left > right );
    if( is_greater ) return options.fn( this );
    return options.inverse( this );
  };

  for (var helper in helpers) {
    Handlebars.registerHelper(helper, helpers[helper]);
  }
  return this;
};