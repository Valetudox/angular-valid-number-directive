'use strict';

var blockEnterKeypress = require('./block-enter-keypress');
var ValidNumberParser = require('./valid-number-parser');

module.exports = {

  create: function() {
    return function() {
      return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          if (!ngModelCtrl) return;
          ngModelCtrl.$parsers.push(ValidNumberParser.create(ngModelCtrl).clearInvalidCharacters);
          element.bind('keypress', blockEnterKeypress);
        }
      };
    };
  }

};
