var GALLERY = GALLERY || (function(){
    var _args = {}; // private
    var _index = 0;

    return {
        init : function(Args) {
          _args = Args;
          _index = 0;
        },
        prev : function() {
          index--;
          if(index < 0) {
            index = images.length-1;
          }
          document.getElementById('image').src = images[index];
        }
        next : function() {
          index++;
          if(index > images.length) {
            index = 0;
          }
          document.getElementById('image').src = images[index];
        }
    };
}());