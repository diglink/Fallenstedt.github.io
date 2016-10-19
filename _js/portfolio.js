
(function($, App){

  //Private
  var _portfolio = {};

  //logic
  function test() {
    $(document).ready(function(e){
      $("img.lazy").lazyload({
        effect : "fadeIn",
        skip_invisible : false,


      });
    });



  }

  //Public
  App.Portfolio = {
    init: function(){
      _portfolio.slider = test();
    }
  }

})(jQuery, window.App = window.App || {});
