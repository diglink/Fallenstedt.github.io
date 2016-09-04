/*jshint esversion: 6 */

var Welcome = (function () {
  var isSideBarActive = false;

  //So I don't have to write document.getElementById everytime.
  var id = function(element) {
    return document.getElementById(element);
  };


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

    return modifyDiv(selectedDiv, notSelectedDiv);
  };

  var modifyDiv = function (expand, contract){
    var $expand = $('#' + expand);
    var $contract = $('#' + contract);
    id('aligner').style.justifyContent = 'space-between';

    //is screen larger than 700px wide?
    if (!window.matchMedia('(max-width: 700px)').matches) {
      $expand.animate({
        width: '100vw',
      },900);
      $contract.animate({
        width: '0vw',
      },900);
    } else { //screen is less than 700px wide
      $expand.animate({
        height: '100vh',
      },900);
      $contract.animate({
        height: '0vh',
      },900);
    }
  }

  return {//public methods
    id: id,
    selectDiv: selectDiv,
    modifyDiv: modifyDiv,
  };
})();


$(document).ready(function(){
  Welcome.id('code').addEventListener('click', function(){
    Welcome.selectDiv('code');
  });
  Welcome.id('photography').addEventListener('click', function(){
    Welcome.selectDiv('photography');
  });
});
