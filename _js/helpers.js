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
    }
  }

})(jQuery, window.App = window.App || {});
