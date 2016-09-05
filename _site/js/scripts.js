/*jshint esversion: 6 */

var Welcome = (function () {
  var isSideBarActive = false;

  //So I don't have to write document.getElementById everytime.
  var id = function(element) {
    return document.getElementById(element);
  };

  function fadeOutBeforeUnload() {
    window.addEventListener("beforeunload", function (event) {
    console.log('animate-out');
      document.body.classList.add("animate-out");
    });
  }

  //add multiple types of events to an element
  var addMultipleEvents = function(eventsArray, element, fn){
    eventsArray.forEach(function(e){
      id(element).addEventListener(e, fn, false);
    });
  }
  //which mode should we navigate to? This function creates a sidebar from the element
  var selectDiv = function(element){
    var selectedDiv;
    var notSelectedDiv;
    switch(element){
      case 'photography':
      selectedDiv = 'photography';
      notSelectedDiv = 'code';
      break;
      case 'code':
      selectedDiv = 'code';
      notSelectedDiv = 'photography';
      break;
    }

    return _modifyDiv(selectedDiv, notSelectedDiv);
  };

  var _modifyDiv = function (expand, contract){
    var $expand = $('#' + expand);
    var $contract = $('#' + contract);
    // id('aligner').style.justifyContent = 'space-between';

    if (!window.matchMedia('(max-width: 700px)').matches) {//is screen larger than 700px wide?
      $expand.animate({
        width: '100vw',
      },900);
      $contract.animate({
        width: '0vw',
        display: 'none'
      },900).delay(100).find('h1').animate({
        opacity: 0
      },500, navigateTo(expand))
    } else { //screen is less than 700px wide
      $expand.animate({
        height: '100vh',
      },900);
      $contract.animate({
        height: '0vh',
        display: 'none'
      },900).find('h1').animate({
        opacity: 0
      },500, navigateTo(expand))
    }
  }

  var navigateTo = function(pathname) {
    fadeOutBeforeUnload();
    setTimeout(function(){
      window.location.pathname = pathname
    },1800)

  }

  return {//public methods
    id: id,
    selectDiv: selectDiv,
    addMultipleEvents: addMultipleEvents
  };
})();


$(document).ready(function(){
  if(Welcome.id('photography') || Welcome.id('code')){
    var myEvents = ['click', 'touchend'];
    Welcome.addMultipleEvents(myEvents, 'code', function(){Welcome.selectDiv('code')});
    Welcome.addMultipleEvents(myEvents, 'photography', function(){Welcome.selectDiv('photography')});
  }

});
