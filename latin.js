var latinWords = ["a","ac","accumsan","ad","adipiscing","aenean","aliqu","aliquam","aliquet","am","amet","ante","aptent","arcu","at","auctor","augu","augue","bero","bibendum","blandit","c","class","commodo","condimentum","congue","consectetur","consequat","conubia","convallis","cras","cubilia","cum","curabitur","curae","cursus","d","dapibus","diam","dictum","dictumst","dignissim","dis","dolor","don","donec","dui","duis","e","egesta","egestas","eget","eleifend","elementum","elit","enim","eo","erat","eros","es","est","et","etiam","eu","euismod","facilisi","facilisis","fames","faucibus","felis","fermentum","feugiat","fringilla","fusce","grav","gravida","gue","habitant","habitasse","hac","hendrerit","himenaeos","iaculis","ictum","id","imperdiet","in","inceptos","int","integer","interdum","ipsum","justo","lacinia","lacus","laoreet","lectus","leo","libero","ligula","litora","lla","lobortis","lorem","luctus","m","maecenas","magna","magnis","malesuada","massa","matt","mattis","mauris","mentum","metus","mi","molestie","mollis","montes","morbi","mus","nam","nascetur","natoque","nec","neque","netus","nibh","nim","nisi","nisl","non","nostra","ntum","nu","nulla","nullam","nunc","odio","ommodo","onec","orci","ornare","parturient","pellentesque","penatibus","per","pharetra","phasellus","placerat","platea","porta","porttitor","posu","posuere","potenti","praesent","pretium","primis","proin","pulvinar","purus","quam","quis","quisque","rem","rhoncus","ridiculus","risus","rius","rutrum","s","sagittis","sapien","scelerisque","sed","sem","semper","senectus","sent","sit","sociis","sociosqu","sodales","sollicitudin","stie","suscipit","suspendisse","t","taciti","te","teger","tellus","tempor","tempus","tincidunt","to","torquent","tortor","tristique","tur","turpis","u","ullamcorper","ultrices","ultricies","urna","ut","vamus","varius","vehicula","vel","velit","venenat","venenatis","venenatiscurabitur","vestibulum","vi","vitae","vivamus","viverra","volutpat","vulputate"];

window.onload = function() {  	
	var all = document.getElementsByTagName("*");
	for (var i=0; i < all.length; i++) {
	    var data = all[i].getAttribute('data-latin');   
	    if(data != null)
	    {
	    	data = data.split('=');
	    }		
	}  
}

function GetRandomWord() {
	var max = latinWords.length - 1;
	var num = GetRandomNumber(0, max);
	var item = latinWords[num];
	return item;
}

function GetRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}