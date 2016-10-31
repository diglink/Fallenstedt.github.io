
(function($, _500px, App){

  //Private
  var _portfolio = {};

  //scroll to top variables
  var LAST_KNOWN_SCROLL_POSITION = 0;
  var TICKING = false;
  var IMG_CONTAINER = $('#images-ul');

  //logic
  function lazyLoadImages() {
    $(document).ready(function(e){
      $("img.lazy").lazyload({
        effect : "fadeIn",
        skip_invisible : false,
      });
    });
  }



  function getLatestPhotos(callback) {
    var location = window.location.href;
    if (!(location.search("/recent/") > -1)) {
      return;
      //do not make an API call
    }
    callback();
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
          $('#loading-gif').fadeOut();
          $.each(response.data.photos, function() {
            $('#images-ul').append('<li><a href="' + siteurl + this.id + '" target="_blank"><img class="lazy" src="' + this.image_url + '"></a></li>');
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
      window.scrollTo(0,0);
      return false;
    });

  }

  function removeFirstImage() {
    var firstChild = $('#images-ul').children()
    if (firstChild.length > 0) {
      firstChild.remove();
    }
  };

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
      _portfolio.request500pxPhotos = getLatestPhotos(removeFirstImage);
    }
  }

})(jQuery, _500px = window._500px, window.App = window.App || {});
