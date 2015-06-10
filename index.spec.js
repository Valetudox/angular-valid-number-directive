'use strict';

var angular = require('angular');
var validNumberDirective = require('./');

describe('angular valid number', function() {

  var element;
  var scope;

  beforeEach(function() {
    angular.module('dummy', []).directive('validNumber', validNumberDirective.create());
    angular.module('dummy');
  });

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element('<input type="text" valid-number ng-model="testValue" />');

    scope = $rootScope;
    scope.testValue = '12';
    $compile(element)(scope);
    scope.$digest();
  }));


  it('should only keep the number characters on change', function() {
    scope.testValue.$setViewValue = 'ab12';
    scope.$digest();
    expect(scope.testValue).to.eql('12');
  });

});