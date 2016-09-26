
(function($, App){

  //Private
  var _nav = {};

  //logic
  function toggle() {
    var x = document.getElementById("myTopNav");
    var li = document.getElementById("hamburger");

    if (App.Helpers.isNull(x) === false) {
      return;
    }

    li.addEventListener("click", function(){
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    });
  }

  //Public
  App.Nav = {
    init: function(){
      _nav.toggle = toggle();
    }
  }

})(jQuery, window.App = window.App || {});
