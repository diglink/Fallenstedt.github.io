(function($, App){

  //Private
  var EVENTS_ARR = ['click', 'touchend'];
  var _index = {};

  // logic
  function openSesame() {
    if (App.Helpers.id('photography') || App.Helpers.id('code')){
      App.Helpers.addMultipleEvents(EVENTS_ARR, 'code',
      function(){selectedDiv('code')});
      App.Helpers.addMultipleEvents(EVENTS_ARR, 'photography',
      function(){selectedDiv('photography')});
    }
    function selectedDiv(element){
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

    function modifyDiv(expand, contract){
      var $expand = $('#' + expand);
      var $contract = $('#' + contract);
      // id('aligner').style.justifyContent = 'space-between';

      if (!window.matchMedia('(max-width: 1200px)').matches) {//is screen larger than 700px wide?
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
    function navigateTo(pathname) {
      setTimeout(function(){
        window.location.pathname = pathname
      },1800)
    }
  }


  //Public
  App.Index = {
    init: function(){
      _index.openSesame = openSesame();
    }
  }

})(jQuery, window.App = window.App || {});
