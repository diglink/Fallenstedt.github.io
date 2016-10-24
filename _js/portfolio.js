
(function($, App){

  //Private
  var _portfolio = {};

  //scroll to top variables
  var LAST_KNOWN_SCROLL_POSITION = 0;
  var TICKING = false;

  //logic
  function lazyLoadImages() {
    $(document).ready(function(e){
      $("img.lazy").lazyload({
        effect : "fadeIn",
        skip_invisible : false,
      });
    });
  }

  function getLatestPhotos() {
    var location = window.location.href;
    if (!(location.search("/Latest/") > -1)) {
      return;
      //do not make an API call
    }
    console.log('request500pxPhotos');
    _500px.init({
      sdk_key: 'c0ab32b508c22f83d18aa292db5497cecda5aa40'   //replace with your 500px js sdk key
    });

    // Get my user id
    _500px.api('/users', function(response) {
      var me = "alexanderfallenstedt";
      var siteurl = "http://500px.com/photo/"

      // Get my photos
      _500px.api('/photos', {
        feature: 'user',
        username: me,
        total_items: 40,
        image_size: 31,
      }, function(response) {
        console.log(response);
        if (response.data.photos.length == 0) {
          alert('Nothing found! Please refresh...');
        } else {
          $.each(response.data.photos, function() {
            $latest.append('<div class="item"><a href="' + siteurl + this.id + '" target="_blank"><img class="image" src="' + this.image_url + '"></a></div>');
          });
        }
      });
    });
  }

  function showScrollToTop(scroll_pos) {
    if (  scroll_pos > 900) {
      $('#scroll-to-top').fadeIn();
    } else {
      $('#scroll-to-top').fadeOut();
    }

    $('#scroll-to-top').on("click", function(e) {
      $('html, body').scrollTop(0);
      return false;
    });

  }

  function recordScrollPosition() {
    window.addEventListener('scroll', function(e) {
      LAST_KNOWN_SCROLL_POSITION = window.scrollY;

      if(!TICKING) {
        window.requestAnimationFrame(function() {
          showScrollToTop(LAST_KNOWN_SCROLL_POSITION)
          TICKING = false;
        });
      }
      TICKING = true;
    })
  }

  //Public
  App.Portfolio = {
    init: function(){
      _portfolio.lazyLoad = lazyLoadImages();
      _portfolio.recordScrollPosition = recordScrollPosition();
    }
  }

})(jQuery, window.App = window.App || {});
