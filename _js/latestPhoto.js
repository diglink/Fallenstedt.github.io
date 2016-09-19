var Request = (function(){
   var my500pxPhotos = function(){
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

  return {
    my500pxPhotos: my500pxPhotos
  }
})();
