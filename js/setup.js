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
var initCoords;
// При нажатии на блок .setup-open нужно
// убрать класс hidden у  .setup
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
// Валидация ввода имени персонажа средствами HTML5
var wizardName = document.querySelector('.setup-user-name');
var onSetupOpen = function () {
  setup.classList.remove('hidden');
  window.similarWizards();
  initCoords = {
    x: setup.offsetLeft,
    y: setup.offsetTop
  };
};
var onSetupClose = function () {
  setup.style.left = initCoords.x + 'px';
  setup.style.top = initCoords.y + 'px';
  setup.classList.add('hidden');
};
setupOpen.addEventListener('click', function () {
  onSetupOpen();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    onSetupOpen();
    document.addEventListener('keydown', setupKeydownHandler);
  }
});
setupClose.addEventListener('click', function () {
  onSetupClose();
});

setupClose.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    onSetupClose();
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
window.colorizeElement(wizardCoat, COAT_COLORS, function (color) {
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

var shopElement = document.querySelector('.setup-artifacts-shop');
var draggedItem = null;
var artifactsElement = document.querySelector('.setup-artifacts');

shopElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
    artifactsElement.setAttribute('style', 'outline: 2px dashed red;');
  }
});

artifactsElement.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});
artifactsElement.addEventListener('drop', function (evt) {
  if (evt.target.children.length === 0) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem.cloneNode(true));
  }
  artifactsElement.setAttribute('style', 'outline: 0;');
});


artifactsElement.addEventListener('dragenter', function (evt) {
  if (evt.target.children.length === 0) {
    evt.target.style.backgroundColor = 'yellow';
  } else {
    evt.target.style.backgroundColor = '';
  }
  artifactsElement.setAttribute('style', 'outline: 2px dashed red;');
  evt.preventDefault();
});

artifactsElement.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});
