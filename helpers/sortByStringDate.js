var moment  = require('moment');
var _  = require('lodash');

var checkFileWhere = function checkFileWhere(itemData, optFilter) {
  if((itemData.category || itemData.categories) && !optFilter) {
    return true;
  } else if(itemData.category && optFilter) {
    return itemData.category === optFilter;
  } else if(itemData.categories && optFilter) {
    return _.contains(itemData.categories, optFilter);
  } else {
    return false;
  }
};

var index;//retain index of potantial files
var checkFileLimit = function checkFileLimit(itemData, optFilter) {
  if(!optFilter) {
    return true;
  } else {
    index++;
    return index < parseInt(optFilter);
  }
};

module.exports.register = function(Handlebars, options) {
  var helpers = {};

  helpers.sortStringDate = function(array, field, options) {
    array = _.cloneDeep(array);
    var result = '';
    var item;

    array = array.sort(function (a, b) {
      var aMoment = moment(a.data[field]);
      var bMoment = moment(b.data[field]);
      if (aMoment.isAfter(bMoment)) {
        return 1;
      } else if (aMoment.isBefore(bMoment)) {
        return -1;
      }
      return 0;
    });

    if (options.hash && options.hash.dir === 'desc') {
      array = array.reverse();
    }
    index = 0;
    for (var i = 0, len = array.length; i < len; i++) {
      item = array[i];
      if(checkFileWhere(item.data, options.hash.where) && checkFileLimit(item.data, options.hash.limit)) {
        result += options.fn(item);
      }
    }

    return result;
  };

  for (var helper in helpers) {
    Handlebars.registerHelper(helper, helpers[helper]);
  }
  return this;
};