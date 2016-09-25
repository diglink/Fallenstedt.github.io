
(function($, App){

  //Private
  var _nav = {};

  //logic
  function test() {
    console.log('test success');
  }

  //Public
  App.Nav = {
    init: function(){
      _nav.test = test();
    }
  }


})(jQuery, window.App = window.App || {});

//
// (function($, MapApp) {
// 'use strict';
//
// // Private
// var _infoBoxes = {};
//
// function makeSlide1Cta() {
//   // cta refers to "Call To Action"
//   var ctaBox = d3.select(".foreign-ancestors.cta")
//     .attr("width", 300)
//     .attr("height", 300);
//
//   var rectangle = ctaBox.append("rect")
//     .attr("x", 0)
//     .attr("y", 100)
//     .attr("width", 50)
//     .attr("height", 50)
//     .attr("fill", 'green');
// }
//
// function makeMostAncestors(xmlData) {
//   var items = xmlData.documentElement.getElementsByTagName('item');
//   var itemsArray = Array.prototype.slice.call(items);
//   var highest = {count: 0, name: 'null'};
//   var percent = 0;
//   var percentElement = document.querySelector('#slide2-num');
//
//   var total = itemsArray.reduce(function(prev, current) {
//     var count = parseInt(current.getAttribute('count'));
//     if (count > highest.count) {
//       highest = {count: count, name: current.getAttribute('state')};
//     }
//     return prev + count;
//   }, 0);
//
//   if (total <= 0) {
//     return;
//   }
//
//   percent = Math.floor(highest.count / total * 100);
//   percentElement.innerHTML = percent;
// }
// // Public
//
//
// MapApp.ExploreBoxes = {
//   init: function() {
//     _infoBoxes.makeSlide1Cta = makeSlide1Cta();
//     MapApp.Data.getStateAncestorCount(function(data) {
//       _infoBoxes.mostAncestors = makeMostAncestors(data);
//     });
//   }
// };
//
// })(jQuery, window.MapApp = window.MapApp || {});
