'use strict';

var ValidNumberParser = function(modelCtrl) {
  this._modelCtrl = modelCtrl;
  this.clearInvalidCharacters = this.clearInvalidCharacters.bind(this);
};

ValidNumberParser.prototype = {

  clearInvalidCharacters: function(inputValue) {
    var clean = this._onlyKeepPositiveNumbers(inputValue);
    if (inputValue !== clean) this._renderModelCtrlWithTheNewValue(clean);
    return clean;
  },


  _renderModelCtrlWithTheNewValue: function(value) {
    this._modelCtrl.$setViewValue(value);
    this._modelCtrl.$render();
  },


  _onlyKeepPositiveNumbers: function(inputValue) {
    return inputValue.toString().replace(/[^0-9]+/g, '');
  }

};


ValidNumberParser.create = function(modelCtrl) {
  return new ValidNumberParser(modelCtrl);
};


module.exports = ValidNumberParser;
