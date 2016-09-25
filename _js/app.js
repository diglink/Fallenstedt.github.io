(function($, App){
  //Private

  //Public
  App.State = {
    init: function(){

      App.Nav.init();
    }
  }
  window.addEventListener('load', function() {
    'use strict';
    // MapApp.Explore.init();
    App.State.init();
    console.log('start');
  });

})(jQuery, window.App = window.App || {});
