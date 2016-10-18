
(function($, App){

  //Private
  var _portfolio = {};

  //logic
  function test() {
    console.log('yo');

  }

  //Public
  App.Portfolio = {
    init: function(){
      _portfolio.slider = test();
    }
  }

})(jQuery, window.App = window.App || {});
