(function($, App){

  //Public
  App.Helpers = {
    test: function test(string){
      console.log(string);
    },
    id: function id(element) {
      return document.getElementById(element);
    },
    fadeOutBeforeUnload: function fadeOutBeforeUnload() {
      return window.addEventListener("beforeunload", function (event) {
        console.log('animate-out');
        document.body.classList.add("animate-out");
      });
    },
    addMultipleEvents: function addMultipleEvents(eventsArray, element, fn){
      return eventsArray.forEach(function(e){
        App.Helpers.id(element).addEventListener(e, fn, false);
      });
    },
    isNull: function isNull(element){
      if(element === null) {
        return false;
      }
    },
    showMe: function(){
      var scroll = $(window).scrollTop();

      if (scroll > 0) {
        $('.hide-me').each(function(i){
          $(this).animate({'opacity' : 1}, 500);
        })
      } else {
        $(window).scroll(function(){
          $('.hide-me').each(function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var top_of_window = bottom_of_window - $(window).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            bottom_of_element -= 200;
            
            if (bottom_of_window > bottom_of_element) {
              $(this).animate({'opacity' : 1}, 500);
            }
          });
        })
      }
    }
  }

})(jQuery, window.App = window.App || {});
