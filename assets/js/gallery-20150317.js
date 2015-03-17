var GALLERY = GALLERY || (function(){
    var _images = {};
    var _index = 0;
    var _lastElementSelected;
    var IMAGE_ROOT = '/assets/images/';

    return {
        init: function() {
          if(document.getElementById('urls')) {
            _images = document.getElementById('urls').innerHTML.split(',');
            _index = 0;
          }
        },
        prev: function(image) {
          _index--;
          if(_index < 0) {
            _index = _images.length-1;
          }
          image.src = IMAGE_ROOT + _images[_index];
        },
        next: function(image) {
          _index++;
          if(_index >= _images.length) {
            _index = 0;
          }
          image.src = IMAGE_ROOT + _images[_index];
        },
        load: function(evt, imageUrl) {
          if(_lastElementSelected !== undefined) {
            _lastElementSelected.className = "btn-gallery";
          } else {
            document.getElementById('first-button-gallery').className = "btn-gallery";
          }
          _lastElementSelected = evt.target;
          evt.target.className = evt.target.className + " btn-gallery-selected";
          document.getElementById('image').src = IMAGE_ROOT + imageUrl;
        },
        showBig: function() {
          var glass = document.createElement('div');
          glass.className = 'gallery-big-glass';
          document.body.appendChild(glass);
          var div = document.createElement('div');
          div.className = 'gallery-big-container';
          
          var closeButton = document.createElement('div');
          closeButton.className = 'gallery-big-container-closeButton';
          closeButton.innerHTML = "X";
          div.appendChild(closeButton);
          var nextButton = document.createElement('div');
          nextButton.className = 'gallery-big-container-nextButton';
          nextButton.innerHTML = ">";
          div.appendChild(nextButton);
          var prevButton = document.createElement('div');
          prevButton.className = 'gallery-big-container-prevButton';
          prevButton.innerHTML = "<";
          div.appendChild(prevButton);
          var image = document.createElement('img');
          image.className = 'gallery-big-container-image';
          image.src = IMAGE_ROOT + _images[_index];
          div.appendChild(image);

          nextButton.addEventListener('click', function() {
            GALLERY.next(image);
          });

          prevButton.addEventListener('click', function() {
            GALLERY.prev(image);
          });

          glass.addEventListener('click', function() {
            document.body.removeChild(div);
            document.body.removeChild(glass);
            closeButton.removeEventListener('click');
            glass.removeEventListener('click');
            nextButton.removeEventListener('click');
            prevButton.removeEventListener('click');
          });

          closeButton.addEventListener('click', function() {
            document.body.removeChild(div);
            document.body.removeChild(glass);
            closeButton.removeEventListener('click');
            glass.removeEventListener('click');
            nextButton.removeEventListener('click');
            prevButton.removeEventListener('click');
          });

          document.body.appendChild(div);
        }
    };
}());
GALLERY.init();