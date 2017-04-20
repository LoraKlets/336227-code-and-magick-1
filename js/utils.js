'use strict';
window.utils = (function () {
  var ESCAPE_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;
  var isKeyboardEvent = function (evt) {
    return typeof evt.keyCode !== 'undefined';
  };
  return {
    isActivateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    },
    isDeactivateEvent: function (evt) {
      return isKeyboardEvent(evt && evt.keyCode === ESCAPE_KEY_CODE);
    },
    isKeyboardEvent: isKeyboardEvent,
    getRandomElement: function (array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return randomElementIndex;
    },
    getRandomElementExcept: function (array, currentElement) {
      var newColor;
      while (!newColor || newColor === currentElement) {
        newColor = getRandomElement(array);
      }
      return newColor;
    }
  };
})();

