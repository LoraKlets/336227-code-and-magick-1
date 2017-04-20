'use strict';

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
// При нажатии на блок .setup-open нужно
// убрать класс hidden у  .setup
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
// Валидация ввода имени персонажа средствами HTML5
var wizardName = document.querySelector('.setup-user-name');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
  window.similarWizards();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', setupKeydownHandler);
    window.similarWizards();
  }
});
setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupClose.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', setupKeydownHandler);
  }
});
var setupKeydownHandler = function (evt) {
  if (window.utils.isDeactivateEvent(evt)) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', setupKeydownHandler);
  }
};
setupSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  var val = wizardName.value.trim();
  if (val.length !== 0) {
    setup.classList.add('hidden');
  }
});
setupSubmit.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  var val = wizardName.value.trim();
  if ((window.utils.isActivateEvent(evt)) && (val.length !== 0)) {
    setup.classList.add('hidden');
  }
});

var wizardCoat = document.querySelector('.wizard-coat');
window.colorizeElement(wizardCoat, COAT_COLORS,function (color) {
   wizardCoat.style.fill = color;
});

var wizardEyes = document.querySelector('.wizard-eyes');
window.colorizeElement(wizardEyes, EYES_COLORS, function (color) {
   wizardEyes.style.fill = color;
});

var setupFireball = document.querySelector('.setup-fireball-wrap');
window.colorizeElement(setupFireball, fireballColors, function (color) {
   setupFireball.style.backgroundColor = color;
});

