
(function($, App){

  //Private
  var _nav = {};

  //logic
  function test() {
    console.log('test success');
  }

  function toggle() {
    var x = document.getElementById("myTopNav");

    // index page has no navbar. 
    if (!x){
      return;
    }

    var li = document.getElementById("hamburger");

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
      _nav.test = test();
      _nav.toggle = toggle();
    }
  }

})(jQuery, window.App = window.App || {});
