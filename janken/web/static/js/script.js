// (function($) {
  var HANDS = ['パー', 'チョキ', 'グー']

  function getEnemyHand(userHand, doesUserWin) {
    switch(userHand) {
      case 0:
        return doesUserWin ? 2 : 1;
      case 1:
        return doesUserWin ? 0 : 2;
      case 2:
        return doesUserWin ? 1 : 0;
    }
  }

  function changeScene(sceneBefore, sceneAfter, callback) {
    sceneBefore.fadeOut(300, function() {
      sceneAfter.fadeIn(300, callback);
    });
  }

  var settings = $('.jyanken-wrapper').data('settings');
  var detailResults = settings.detailResults.concat();

  var welcomeScene = $('.welcome-scene'),
      jyankenScene = $('.jyanken-scene'),
      resultScene = $('.result-scene'),
      pointScene = $('.point-scene');

  /* Welcome Scene*/
  $('.start-btn').click(function() {
    changeScene(welcomeScene, jyankenScene);
  });

  /* Jyanken Scene */
  var enemyHand = $('.enemy-hand');
  var userHandClickable = true;
  var jyankenResult = $('.jyanken-result');
  var pointSpeech = $('.point-speech');
  var pointResult = $('.point-result');
  var currentResult;

  $('.user-hand').bind('click', function(event) {
    if (! userHandClickable) return;

    var userHand = $(event.currentTarget).data('hand');
    currentResult = detailResults.shift();
    setTimeout(function() {
      enemyHand.text(HANDS[getEnemyHand(userHand, currentResult)]);
    }, 800);
    userHandClickable = false;
    jyankenResult.text(currentResult ? 'You Win!' : 'You Lose!')

    setTimeout(function() {
      changeScene(jyankenScene, resultScene, function() {
        userHandClickable = true;
      });  
    }, 2000);
  });

  /* Result Scene */
  $('.continue-btn').bind('click', function(event) {
    if (detailResults.length == 0) {
      if (settings.result) {
        pointSpeech.text('おめでとうございます！');
        pointResult.text(settings.point + ' ポイントゲット！');
      } else {
        pointSpeech.text('残念ながら');
        pointResult.text('0 ポイントゲット');
      }
      changeScene(resultScene, pointScene);
    } else {
      enemyHand.text('???');
      changeScene(resultScene, jyankenScene);
    }
  });

// })(jQuery);
