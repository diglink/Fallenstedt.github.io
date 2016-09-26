(function($, App){
  //Private

  //Public
  App.State = {
    init: function(){
      App.Index.init();
      App.Nav.init();
      App.Helpers.fadeOutBeforeUnload();
    }
  }

  //Load it All
  window.addEventListener('load', function() {
    'use strict';

    App.State.init();

  });

})(jQuery, window.App = window.App || {});
