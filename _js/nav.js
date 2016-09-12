var Nav = (function(){
  var toggle = function() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return {
    toggle: toggle,
  }
})();

$(document).ready(function(){

});
