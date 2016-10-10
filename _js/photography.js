
(function($, App){

  //Private
  var _photo = {};
  var IMAGES = [
    '../images/nature/nature-1.jpg',
    '../images/nature/nature-2.jpg',
    '../images/nature/nature-3.jpg',
    '../images/nature/nature-4.jpg'
  ]

  //logic
  function backgroundImageCarousel() {
  }


  //Public
  App.Photography = {
    init: function(){
      App.Helpers.showMe();
    }
  }

})(jQuery, window.App = window.App || {});
