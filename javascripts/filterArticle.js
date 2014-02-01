(function(){

  window.onload = function() {
    var check = function check() {
      if(window.location.hash) {
        var hash = window.location.hash.split('#')[1];
        var articles = document.getElementsByClassName('article-min');
        for(var i=0, len=articles.length; i<len; i++) {
          var categories = articles[i].getElementsByClassName('category');
          for(var c=0, len2=categories.length; c<len2; c++) {
            if(categories[c].innerHTML.search(hash) === -1) {
              articles[i].style.display = 'none';
            } else {
              articles[i].style.display = '';
              c = len2;
            }
          }
        }
      }
    };
    window.addEventListener('hashchange', function() {
      check();
    });
    check();
  };

}());