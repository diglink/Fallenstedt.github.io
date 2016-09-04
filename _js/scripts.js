/*jshint esversion: 6 */

var Welcome = (function () {
  var isSideBarActive = false;

  //So I don't have to write document.getElementById everytime.
  var _id = function(element) {
    return document.getElementById(element);
  };

  //which mode should we navigate to? This function creates a sidebar from the element
  var navigateTo = function(element){
    var selectedDiv;
    var notSelectedDiv;
    switch(element.id){
      case 'photography':
      selectedDiv = 'photography';
      notSelectedDiv = 'code';
      break;
      case 'code':
      selectedDiv = 'code';
      notSelectedDiv = 'photography';
      break;
    }

    console.log(selectedDiv);
    console.log(notSelectedDiv);
  };


  var _hideSideBar = function($div, width){
    $div.delay(400)
    .animate({width: width}).delay(300)
    .animate({opacity: 0}, 1100)
    .find('*').delay(2500)
    .animate({opacity: 0})
    .animate({width:0},300,function(){
      $div.find('*').css('display', 'none');
    });
  };

  var shiftSideBar = function(selectedDiv, hiddenDiv) {
    //selectedDiv is the div that was selected. hiddenDiv is the div that is currently hidden. We want to make the hiddenDiv appear...
    let $selectedDiv = $('#'+selectedDiv);
    let $hiddenDiv = $('#'+hiddenDiv);
    $selectedDiv
    .animate({width: 0}).delay(300)
    .animate({opacity: 0}, 1100)
    .find('*').delay(200)
    .animate({opacity: 0}).delay(240)
    .animate({width:0},300,function(){
      $selectedDiv.find('*').css('display', 'none');
    });

    $hiddenDiv.animate({width: '0',})
    .animate({opacity: 1,})
    .animate({width: '20%',})
    .find('*')
    .animate({
      width: '100%',
      fontSize: '40px',
    }, function(){
      $hiddenDiv.find('*').css('display', 'block');
    })
    .animate({opacity: 1,});
  };

  var createSideBar = function(keepDiv, hideDiv) {
    //we need to hide the div that was selected by thte user, and keep the div that was not selected
    isSideBarActive = true;

    let $keepDiv = $('#'+keepDiv);
    let $hideDiv = $('#'+hideDiv);
    _id(keepDiv).style.zIndex=100;
    _id(hideDiv).style.zIndex=100;
    _id('modes').style.justifyContent = 'space-between'; //change flexbox property for container that holds the two divs.

    _hideSideBar($hideDiv, '80%');

    //.delay() argument must have no difference. Animation duration arguments must have a difference of 100ms. 1600-1500=100.
    $keepDiv.delay(200).animate({
      width: '20%',
    },900).find('*').delay(200).animate({
      fontSize: '40px',
    }, 900, initializeMap());
  };

  var initializeMap = function() {
    var startLatLng = {lat: 37.020098, lng: -101.953125};
    var mapContainer = _id('simpleMap');
    mapContainer.style.height = '100%';
    mapContainer.style.width = '100%';
    mapContainer.style.position = 'fixed';
    mapContainer.style.top = '-100%';
    //initial map options
    var options = {
      center: startLatLng,
      zoom: 3,
      minZoom: 3,
      maxZoom: 15,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true

    };

    //otherwise, load the map
    map = new google.maps.Map(mapContainer, options);
  };
  return {//public methods
    navigateTo: navigateTo,
    createSideBar: createSideBar,
    initializeMap: initializeMap
  };
})();
