(function($, App){
  //Private

  //Public
  App.State = {
    init: function(){
      App.Index.init();
      App.Nav.init();
      App.Photography.init();
      if (/portfolios/.test(window.location.href)) {
        App.Portfolio.init();
      }

    }
  }

  //Load it All
  window.addEventListener('load', function() {
    'use strict';
    App.State.init();
  });

})(jQuery, window.App = window.App || {});
