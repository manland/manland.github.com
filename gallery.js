var GALLERY = GALLERY || (function(){
    var _images = {}; // private
    var _index = 0;

    return {
        init : function(images) {
          _images = images;
          _index = 0;
        },
        prev : function() {
          _index--;
          if(_index < 0) {
            _index = _images.length-1;
          }
          document.getElementById('image').src = _images[_index];
        },
        next : function() {
          _index++;
          if(_index > _images.length) {
            _index = 0;
          }
          document.getElementById('image').src = _images[_index];
        }
    };
}());