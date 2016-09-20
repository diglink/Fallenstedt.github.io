
//scripts to be used when a page is loaded with the 'standard' layout
var Photography = (function(){

  var globals = {
    imageCount: 0
  }


  var id = function(element){
    return document.getElementById(element);
  }

  //obtain a list of images with a given search term.
  var obtainImages = function(search) {
    var backgroundImages = new Array();
    $.ajax({
      url: "../images/nature",
      success: function(data){
        $(data).find("a:contains(" + search + ")").each(function(){
          // will loop through
          backgroundImages.push(this.innerHTML)
          // $('<p></p>').html(this).appendTo('#photographer-poster')
        });
      }
    });
    return backgroundImages;
  }

  //Before DOM is unloaded, apply a class called "animate-out".
  var fadeOutBeforeUnload = function() {
    window.addEventListener("beforeunload", function (event) {
    console.log('animate-out');
      document.body.classList.add("animate-out");
    });
  }

  var backgroundImageCarousel = function(array, count) {
    //TODO take an array of image names and cycle through them for the first section on photography by calling this function once every 2 seconds and adding 1 imageCount each time. If imagecount is greater than array.length, set it to 0. Disable this function on mobile view.
      id('photographer-poster').style.backgroundImage = 'url(../images/nature/' + array[count] + ')';
  }

  return {
    globals: globals,
    id: id,
    obtainImages: obtainImages,
    backgroundImageCarousel: backgroundImageCarousel,
    fadeOutBeforeUnload: fadeOutBeforeUnload,
  }
})();


$(document).ready(function(){
  Photography.fadeOutBeforeUnload();

});
