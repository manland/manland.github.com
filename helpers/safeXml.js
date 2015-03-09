module.exports.register = function(Handlebars, options) {
  var helpers = {};

  helpers.safeXml = function(value, options) {
    if(!value) {
      return value;
    }
    return value
      .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
  };

  for (var helper in helpers) {
    Handlebars.registerHelper(helper, helpers[helper]);
  }
  return this;
};