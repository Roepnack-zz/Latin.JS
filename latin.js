
var requests = {
		words: {
			1: 'Lorem',
			2: 'Lorem ipsum',
			3: 'Lorem ipsum dolor',
			4: 'Lorem ipsum dolor sit',
			5: 'Lorem ipsum dolor sit amet.'
		},
		sentences: {
			1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis volutpat velit.',
			2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis volutpat velit. Maecenas mi mauris, mattis in nisl vitae, tristique ultrices nibh.',
			3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis volutpat velit. Maecenas mi mauris, mattis in nisl vitae, tristique ultrices nibh. Aliquam a erat tellus.',
			4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis volutpat velit. Maecenas mi mauris, mattis in nisl vitae, tristique ultrices nibh. Aliquam a erat tellus. Duis tempor quis augue et molestie.',
			5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis volutpat velit. Maecenas mi mauris, mattis in nisl vitae, tristique ultrices nibh. Aliquam a erat tellus. Duis tempor quis augue et molestie. Proin luctus ac purus nec sagittis.'
	}
}

window.onload = function() {  	
	var all = document.getElementsByTagName("*");
	for (var i=0; i < all.length; i++) {
	    var data = all[i].getAttribute('data-latin');   
	    if(data != null)
	    {
	    	data = data.split('=');
			if(data[0] == "words"){
				all[i].innerHTML = requests.words[data[1]];
			} else if(data[0] == "sentence"){
				all[i].innerHTML = requests.sentences[data[1]];
			}
	    }		
	}  
}
