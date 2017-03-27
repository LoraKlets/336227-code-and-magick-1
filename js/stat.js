'use strict';

window.renderStatistics = function (ctx, names, times) {
  var drawRect = function (colorRect, x, y, width, height) {
    ctx.fillStyle = colorRect;
    ctx.fillRect(x, y, width, height);
  };
  drawRect('rgba(0, 0, 0, 0.7)', 20, 30, 420, 270);
  
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(10, 10, 420, 270);
  ctx.strokeRect(10, 10, 420, 270);
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 25, 35);
  ctx.fillText('Список результатов:', 25, 56);
  
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoWidth = 40;            //ширина столбика
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
    ctx.fillStyle = '#000';
    ctx.fillText(times[i].toFixed(0), histoX + columnIndent * i + 8, bottomY - height - 6);
    // попробуем написать имя по центру столбика, считая, что по ширине столбика помещаются 6 букв
    var lengthOfName = name.length;
    if (lengthOfName < 6) {
      for (var j = 0; j <  Math.floor((6 - lengthOfName) / 2); j++) {
        name = ' '+ name;
      }; 
    } 
    ctx.fillText(name, histoX + columnIndent * i, bottomY + 18);
  }
};
