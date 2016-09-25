(function($, App){
  //Private

  //Public
  App.State = {
    init: function(){
      App.Nav.init();
      App.Index.init();
      App.Helpers.fadeOutBeforeUnload();
    }
  }

  //Load it All
  window.addEventListener('load', function() {
    'use strict';

    App.State.init();

  });

})(jQuery, window.App = window.App || {});
