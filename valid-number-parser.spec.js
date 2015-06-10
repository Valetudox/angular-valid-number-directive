'use strict';

var ValidNumberParser = require('./valid-number-parser');

describe('valid number parser', function() {

  var validNumberParser;
  var modelController;

  beforeEach(function() {
    modelController = { $setViewValue: sinon.stub(), $render: sinon.stub() };
    validNumberParser = new ValidNumberParser(modelController);
  });


  describe('#clearInvalidCharacters', function() {

    it('should remove single characters', function() {
      expect(validNumberParser.clearInvalidCharacters('abcd')).to.eql('');
    });


    it('should remove special characters', function() {
      expect(validNumberParser.clearInvalidCharacters('. /;[]=-;;l./')).to.eql('');
    });


    it('should only keep numbers', function() {
      expect(validNumberParser.clearInvalidCharacters('a0b1c2d3e4f5g6h7i8j9k')).to.eql('0123456789');
    });


    describe('without any remove', function() {

      it('should not render via model controller', function() {
        validNumberParser.clearInvalidCharacters('1234');
        expect(modelController.$setViewValue).to.not.have.been.called;
        expect(modelController.$render).to.not.have.been.called;
      });

    });


    describe('with a remove', function() {

      it('should render the new value via model controller', function() {
        validNumberParser.clearInvalidCharacters('a1234d');
        expect(modelController.$setViewValue).to.have.been.calledWith('1234');
        expect(modelController.$render).to.have.been.called;
      });

    });

  });

});