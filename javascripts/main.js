function filter(category) {
	var children = document.getElementById('container').getElementsByTagName('span');
    for (var i = 0; i < children.length; i++) {
    	alert(children[i].getAttribute("class"))
      if(children[i].getAttribute("class").indexOf(category) !== -1) {
        children[i].parentNode.style.display = '';
      } else {
        children[i].parentNode.style.display = 'none';
      }
    };
}
