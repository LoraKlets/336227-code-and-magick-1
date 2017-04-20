'use strict';
window.similarWizards = (function () {
  var userDialog = document.querySelector('.setup');
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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
    wizards[i].name = WIZARD_FIRSTNAMES[window.utils.getRandomElement(WIZARD_FIRSTNAMES)] + ' ' + WIZARD_SECONDNAMES[window.utils.getRandomElement(WIZARD_SECONDNAMES)];
    wizards[i].coatColor = COAT_COLORS[window.utils.getRandomElement(COAT_COLORS)];
    wizards[i].eyesColor = EYES_COLORS[window.utils.getRandomElement(EYES_COLORS)];
  }
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };
  similarListElement.textContent = '';
  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
});


