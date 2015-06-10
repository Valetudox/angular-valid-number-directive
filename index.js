'use strict';

var ValidNumber = function() {};

ValidNumber.create = function() {
  return function() {
    return {
      require: '?ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
        if (!ngModelCtrl) {
          return;
        }

        ngModelCtrl.$parsers.push(function(val) {
          var clean = val.toString().replace(/[^0-9]+/g, '');
          if (val !== clean) {
            ngModelCtrl.$setViewValue(clean);
            ngModelCtrl.$render();
          }
          return clean;
        });

        element.bind('keypress', function(event) {
          if (event.keyCode === 32) {
            event.preventDefault();
          }
        });
      }
    };
  };
};

module.exports = ValidNumber;
