var GALLERY=GALLERY||function(){var a,b={},c=0;return{init:function(){document.getElementById("urls")&&(b=document.getElementById("urls").innerHTML.split(","),c=0)},prev:function(){c--,0>c&&(c=b.length-1),document.getElementById("image").src=b[c]},next:function(){c++,c>=b.length&&(c=0),document.getElementById("image").src=b[c]},load:function(b,c){void 0!==a?a.className="btn-gallery":document.getElementById("first-button-gallery").className="btn-gallery",a=b.target,b.target.className=b.target.className+" btn-gallery-selected",document.getElementById("image").src="/assets/images/"+c}}}();GALLERY.init();