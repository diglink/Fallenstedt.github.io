


//scripts to be used when a page is loaded with the 'standard' layout
var Standard = (function(){
  var obtainImages = function(search) {
    $.ajax({
      url: "../images",
      success: function(data){
        $(data).find("a:contains(" + search + ")").each(function(){
          // will loop through
          $('<p></p>').html(this).appendTo('#photographer-poster')
        });
      }
    });
  }

  var backgroundImageCarousel = function() {

  }
  return {
    obtainImages: obtainImages,
  }
})();


$(document).ready(function(){

  Standard.obtainImages('cat');

});
