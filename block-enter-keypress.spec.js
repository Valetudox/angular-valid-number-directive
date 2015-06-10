'use strict';

var blockEnterKeypress = require('./block-enter-keypress');

describe('block enter keypress', function() {

  it('should prevent bubbling if the given key is an enter', function() {
    var enterEvent = { keyCode: 32, preventDefault: sinon.stub() };
    blockEnterKeypress(enterEvent);

    expect(enterEvent.preventDefault).to.have.been.called;
  });


  it('should not prevent bubbling if the given is not an enter', function() {
    var enterEvent = { keyCode: 31, preventDefault: sinon.stub() };
    blockEnterKeypress(enterEvent);

    expect(enterEvent.preventDefault).to.not.have.been.called;
  });

});