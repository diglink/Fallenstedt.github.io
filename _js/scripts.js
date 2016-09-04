/*jshint esversion: 6 */

var Welcome = (function () {
  var isSideBarActive = false;

  //So I don't have to write document.getElementById everytime.
  var id = function(element) {
    return document.getElementById(element);
  };

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
        width: '100%',
      },900);
      $contract.animate({
        width: '0%',
        display: 'none'
      },900).delay(100).find('h1').css('display', 'none');
    } else { //screen is less than 700px wide
      $expand.animate({
        height: '100vh',
      },900);
      $contract.animate({
        height: '0vh',
        display: 'none'
      },900)
    }
  }

  return {//public methods
    selectDiv: selectDiv,
    addMultipleEvents: addMultipleEvents
    // modifyDiv: modifyDiv,
  };
})();


$(document).ready(function(){
  var myEvents = ['click', 'touchend'];
  Welcome.addMultipleEvents(myEvents, 'code', function(){Welcome.selectDiv('code')});
  Welcome.addMultipleEvents(myEvents, 'photography', function(){Welcome.selectDiv('photography')});

});
