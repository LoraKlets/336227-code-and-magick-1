'use strict';

window.renderStatistics = function (ctx, names, times) {
  var drawRect = function (colorRect, x, y, width, height) {
    ctx.fillStyle = colorRect;
    ctx.fillRect(x, y, width, height);
  };

  var drawText = function (text, x, y) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(text, x, y);
  };

  drawRect('rgba(0, 0, 0, 0.7)', 20, 30, 420, 270);

  drawRect('rgba(255, 255, 255, 1.0)', 10, 10, 420, 270);

  drawText('Ура, вы победили!', 25, 35);

  drawText('Список результатов:', 25, 56);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoWidth = 40;            // ширина столбика
  var histoHeight = 160;          // максим. столбик
  var histoX = 40;                // начальная координата x
  var step = histoHeight / max;   // коэф. для вычисл. высоты столбика
  var columnIndent = 90;          // ширина  столбика + отступ
  var bottomY = 240;              // низ гистограммы

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    var height = step * times[i];
    if (name === 'Вы') {
      drawRect('rgba(255, 0, 0, 1)', histoX + columnIndent * i, bottomY - height, histoWidth, height);
    } else {
      drawRect('rgba(0, 0, 255, ' + Math.random().toFixed(1) + ')', histoX + columnIndent * i, bottomY - height, histoWidth, height);
    }
    drawText(times[i].toFixed(0), histoX + columnIndent * i, bottomY - height - 6);

    // попробуем написать имя по центру столбика, считая, что по ширине столбика помещаются 6 букв
    var lengthOfName = name.length;
    if (lengthOfName < 5) {
      for (var j = 0; j < Math.floor((5 - lengthOfName) / 2); j++) {
        name = ' ' + name;
      }
    }
    drawText(name, histoX + columnIndent * i, bottomY + 18);
  }
};
