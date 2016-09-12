


//scripts to be used when a page is loaded with the 'standard' layout
var Photography = (function(){

  var id = function(element){
    return document.getElementById(element);
  }

  //obtain a list of images with a given search term.
  var obtainImages = function(search) {
    var backgroundImages = new Array();
    $.ajax({
      url: "../images",
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

  var backgroundImageCarousel = function(array) {
    //take an array of image names and cycle through them for the first section on photography
    alert(array)
    id('photographer-poster').style.background = 'url(' + array[0] + ')';
  }

  return {
    id: id,
    obtainImages: obtainImages,
    backgroundImageCarousel: backgroundImageCarousel,
    fadeOutBeforeUnload: fadeOutBeforeUnload,
  }
})();


$(document).ready(function(){
  Photography.fadeOutBeforeUnload();
  var myBgImgs = Photography.obtainImages('cat');
});
