(function($, THREE, App){
  //Private
  var _app = {};
  TEXT_SHOWN = false;
  INTERVAL = 80;
  MESSAGE = "Responsive Web Design";
  MESSAGE2 = "HTML • CSS • JavaScript • PHP • MySQL";

    function showText(target, message, index, interval) {
      if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, Math.random()*interval);
      } else {
        if (!TEXT_SHOWN) {
          target = document.getElementById('show-text-2');
          message = "I promise this section will be great. You can browse my github or other social links below :)";
          index = 0
          setTimeout(function(){showText(target, message, index, INTERVAL);}, 200);
        }
        TEXT_SHOWN = true;
      }
    }

    function findTargetToShowText() {
      if (document.getElementById('show-text')) {
        var target = document.getElementById('show-text');
        var message = "Under Construction... Sorry About That";
        setTimeout(function(){showText(target, message, 0, INTERVAL)}, 400);

      }
    }

    //Public
    App.State = {
      init: function(){
        App.Helpers.showMe();
        App.Index.init();
        App.Nav.init();
        if (/portfolios/.test(window.location.href)) {
          App.Portfolio.init();
        }
        _app.appendLandingText = findTargetToShowText();

      }
    }

    //Load it All
    window.addEventListener('load', function() {
      'use strict';
      App.State.init();
    });

  })(jQuery, window.THREE = window.THREE, window.App = window.App || {});
