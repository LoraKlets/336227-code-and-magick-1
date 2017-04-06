'use strict';

var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
// При нажатии на блок .setup-open нужно
// убрать класс hidden у  .setup
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');

var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupOpen.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', setupKeydownHandler);
  }
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupClose.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    setup.classList.add('hidden');  
    document.removeEventListener('keydown', setupKeydownHandler);
  }
});
var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('hidden');
  }
};
setupSubmit.addEventListener('click', function () {
  setup.classList.add('hidden');
});
setupSubmit.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    setup.classList.add('hidden');  
    document.removeEventListener('keydown', setupKeydownHandler);
  }  
});
// Валидация ввода имени персонажа средствами HTML5
var wizardName = document.querySelector('.setup-user-name');
wizardName.required = true;
wizardName.maxLength = 50;
var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return randomElementIndex;
};

var getRandomElementExcept = function (array, currentElement) {
  var newColor;
  while (!newColor || newColor === currentElement) {
    newColor = getRandomElement(array);
  }
  return newColor;
};

var colorizeElement = function (element, colors, property) {
    var currentColor = element.style[property];
    element.style[property] = colors[getRandomElementExcept(colors, currentColor)];
};    
// При нажатии на волшебника меняется цвет его
// мантии
var wizardCoat = document.querySelector('.wizard-coat');
wizardCoat.addEventListener('click', function () {
   colorizeElement(wizardCoat, COAT_COLORS, 'fill');  
});

var wizardEyes = document.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click',  function () {
    colorizeElement(wizardEyes, EYES_COLORS, 'fill');
});

var setupFireball = document.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
setupFireball.addEventListener('click', function() {
  colorizeElement(setupFireball, fireballColors, 'background');
});


var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');


var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var WIZARD_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECONDNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var wizards = [
  {name: 'Иван', coatColor: '', eyesColor: ''},
  {name: 'Иван', coatColor: '', eyesColor: ''},
  {name: 'Иван', coatColor: '', eyesColor: ''},
  {name: 'Иван', coatColor: '', eyesColor: ''}
];
for (var i = 0; i < wizards.length; i++) {
    wizards[i].name = WIZARD_FIRSTNAMES[getRandomElement(WIZARD_FIRSTNAMES)] + ' ' + WIZARD_SECONDNAMES[getRandomElement(WIZARD_SECONDNAMES)];
    wizards[i].coatColor = COAT_COLORS[getRandomElement(COAT_COLORS)];
    wizards[i].eyesColor = EYES_COLORS[getRandomElement(EYES_COLORS)];
}
var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
};
var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
