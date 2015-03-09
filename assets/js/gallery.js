var GALLERY = GALLERY || (function(){
    var _images = {}; // private
    var _index = 0;
    var _lastElementSelected;

    return {
        init: function() {
          if(document.getElementById('urls')) {
            _images = document.getElementById('urls').innerHTML.split(',');
            _index = 0;
          }
        },
        prev: function() {
          _index--;
          if(_index < 0) {
            _index = _images.length-1;
          }
          document.getElementById('image').src = _images[_index];
        },
        next: function() {
          _index++;
          if(_index >= _images.length) {
            _index = 0;
          }
          document.getElementById('image').src = _images[_index];
        },
        load: function(evt, imageUrl) {
          if(_lastElementSelected !== undefined) {
            _lastElementSelected.className = "btn-gallery";
          } else {
            document.getElementById('first-button-gallery').className = "btn-gallery";
          }
          _lastElementSelected = evt.target;
          evt.target.className = evt.target.className + " btn-gallery-selected";
          document.getElementById('image').src = '/assets/images/' + imageUrl;
        }
    };
}());
GALLERY.init();