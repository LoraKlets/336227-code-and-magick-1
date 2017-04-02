'use strict';
 
var userDialog = document.querySelector('.setup');
 userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
    return randomElementIndex;
  };
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECONDNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [
    {name: 'Иван',coatColor: '', eyesColor: ''},
    {name: 'Иван',coatColor: '', eyesColor: ''},
    {name: 'Иван',coatColor: '', eyesColor: ''},
    {name: 'Иван',coatColor: '', eyesColor: ''}
];

for (var i = 0; i < 4; i++) {
  wizards[i].name = WIZARD_FIRSTNAMES[getRandomElement(WIZARD_FIRSTNAMES)] + ' ' + WIZARD_SECONDNAMES[getRandomElement(WIZARD_SECONDNAMES)];
  wizards[i].coatColor = COAT_COLORS[getRandomElement(COAT_COLORS)];
  wizards[i].eyesColor = EYES_COLORS[getRandomElement(EYES_COLORS)];
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  fragment.appendChild(wizardElement);
}
similarListElement.appendChild(fragment);



