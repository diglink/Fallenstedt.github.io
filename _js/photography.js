
(function($, App){

  //Private
  var _photo = {};
  var IMAGES = [
    '../images/nature-1.jpg',
    '../images/nature-2.jpg',
    '../images/nature-3.jpg',
    '../images/nature-4.jpg'
  ]

  //logic
  function backgroundImageCarousel() {
    console.log(IMAGESS);
  }


  //Public
  App.Nav = {
    init: function(){

    }
  }

})(jQuery, window.App = window.App || {});







// var images = [
//
//   'path/to/image1.jpg',
//   'path/to/image2.jpg',
//   'path/to/image3.jpg'
//
// ];
//
// var index = 0;
//
// setInterval(change_up, 1000);
//
// function change_up(){
//
//   index = (index + 1 < images.length) ? index + 1 : 0;
//
//   $('.block').fadeOut(300, function(){
//
//     $(this).css('background-image', 'url('+ images[index] + ')')
//
//     $(this).fadeIn(300);
//
//   });
// }
