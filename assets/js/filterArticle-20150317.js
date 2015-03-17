(function(){

  window.onload = function() {
    var check = function check() {
      var hash = '';
      if(window.location.hash) {
        hash = window.location.hash.split('#')[1];
        document.getElementsByClassName('hiddenFilter')[0].style.opacity = '1';
        document.getElementsByClassName('hiddenFilter')[0].style.top = '64px';
      } else {
        document.getElementsByClassName('hiddenFilter')[0].style.opacity = '';
        document.getElementsByClassName('hiddenFilter')[0].style.top = '';
      }
      var articles = document.getElementsByClassName('article-min');
      for(var i=0, len=articles.length; i<len; i++) {
        var found = false;
        var categories = articles[i].getElementsByClassName('category');
        for(var c=0, len2=categories.length; c<len2 && found === false; c++) {
          if(categories[c].innerHTML.search(hash) === -1) {
            articles[i].style.display = 'none';
          } else {
            articles[i].style.display = 'block';
            found = true;
          }
        }
        if(found === false) {
          var tags = articles[i].getElementsByClassName('tag');
          for(var c=0, len2=tags.length; c<len2 && found === false; c++) {
            if(tags[c].innerHTML.search(hash) === -1) {
              articles[i].style.display = 'none';
            } else {
              articles[i].style.display = 'block';
              found = true;
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