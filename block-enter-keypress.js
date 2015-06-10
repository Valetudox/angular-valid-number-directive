'use strict';

module.exports = function(keypressEvent) {
  if (keypressEvent.keyCode === 32) {
    keypressEvent.preventDefault();
  }
};