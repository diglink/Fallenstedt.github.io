


//scripts to be used when a page is loaded with the 'standard' layout
var Photography = (function(){
  //obtain a list of images with a given search term.
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

  //Before DOM is unloaded, apply a class called "animate-out".
  var fadeOutBeforeUnload = function() {
    window.addEventListener("beforeunload", function (event) {
    console.log('animate-out');
      document.body.classList.add("animate-out");
    });
  }

  // var backgroundImageCarousel = function() {
  //   //take an array of image names and cycle through them for the first section on photography
  // }

  return {
    obtainImages: obtainImages,
    fadeOutBeforeUnload: fadeOutBeforeUnload,
  }
})();


$(document).ready(function(){
  Photography.fadeOutBeforeUnload();
  Photography.obtainImages('cat');
});
