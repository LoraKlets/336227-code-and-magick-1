'use strict';
window.colorizeElement = (function (element, colors, cb) {
  element.addEventListener('click', function () {
    var randomColor = colors[window.utils.getRandomElement(colors)];
    if (typeof cb === 'function') {
      cb(randomColor);
    }
  });
  element.addEventListener('keydown', function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      if (typeof cb === 'function') {
        var randomColor = colors[window.utils.getRandomElement(colors)];
        if (typeof cb === 'function') {
          cb(randomColor);
        }
      }
    }
  });
});


