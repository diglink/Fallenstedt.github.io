(function($, App){
  //Private
  var _app = {};
  

  //Public
  App.State = {
    init: function(){
      App.Helpers.showMe();
      App.Index.init();
      App.Nav.init();
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
