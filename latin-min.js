var latin=function(){var g=["a","ac","accumsan","ad","adipiscing","aenean","aliqu","aliquam","aliquet","am","amet","ante","aptent","arcu","at","auctor","augu","augue","bero","bibendum","blandit","c","class","commodo","condimentum","congue","consectetur","consequat","conubia","convallis","cras","cubilia","cum","curabitur","curae","cursus","dapibus","diam","dictum","dictumst","dignissim","dis","dolor","don","donec","dui","duis","e","egesta","egestas","eget","eleifend","elementum","elit","enim","eo","erat","eros","es","est","et","etiam","eu","euismod","facilisi","facilisis","fames","faucibus","felis","fermentum","feugiat","fringilla","fusce","grav","gravida","gue","habitant","habitasse","hac","hendrerit","himenaeos","iaculis","ictum","id","imperdiet","in","inceptos","int","integer","interdum","ipsum","justo","lacinia","lacus","laoreet","lectus","leo","libero","ligula","litora","lla","lobortis","lorem","luctus","m","maecenas","magna","magnis","malesuada","massa","matt","mattis","mauris","mentum","metus","mi","molestie","mollis","montes","morbi","mus","nam","nascetur","natoque","nec","neque","netus","nibh","nim","nisi","nisl","non","nostra","ntum","nu","nulla","nullam","nunc","odio","ommodo","onec","orci","ornare","parturient","pellentesque","penatibus","per","pharetra","phasellus","placerat","platea","porta","porttitor","posu","posuere","potenti","praesent","pretium","primis","proin","pulvinar","purus","quam","quis","quisque","rem","rhoncus","ridiculus","risus","rius","rutrum","s","sagittis","sapien","scelerisque","sed","sem","semper","senectus","sent","sit","sociis","sociosqu","sodales","sollicitudin","stie","suscipit","suspendisse","t","taciti","te","teger","tellus","tempor","tempus","tincidunt","to","torquent","tortor","tristique","tur","turpis","u","ullamcorper","ultrices","ultricies","urna","ut","vamus","varius","vehicula","vel","velit","venenat","venenatis","venenatiscurabitur","vestibulum","vi","vitae","vivamus","viverra","volutpat","vulputate"];window.onload=function(){var t=document.getElementsByTagName("*");for(var q=0;q<t.length;q++){var p=t[q].getAttribute("data-latin");if(p!=null){p=p.split("=");switch(p[0]){case"word":t[q].appendChild(document.createTextNode(k(1)));break;case"words":case"w":t[q].appendChild(document.createTextNode(k(p[1])));break;case"sentence":t[q].appendChild(document.createTextNode(a(1)));break;case"sentences":case"s":t[q].appendChild(document.createTextNode(a(p[1])));break;case"paragraph":t[q].appendChild(d());break;case"paragraphs":case"p":for(var o=0;o<p[1];o++){t[q].appendChild(d())}break}}}var s=document.getElementsByTagName("img");for(var q=0;q<s.length;q++){var l=s[q].getAttribute("src");if(l==null||(l!=null&&l.length==0)){}else{continue}var n=i(q,s[q]);var m=n.getContext("2d");e(s[q],m);b(n,m);var r=document.getElementsByTagName("body")[0];r.appendChild(n)}};function i(q,p){var m=p.getBoundingClientRect();var o=p.clientWidth;var l=p.clientHeight;var n=document.createElement("canvas");n.id="CursorLayer"+q;n.width=o;n.height=l;n.style.zIndex=10000;n.style.position="absolute";n.style.top=m.top+"px";n.style.left=m.left+"px";return n}function e(n,m){var l=n.getAttribute("data-latin-background-color");if(l!=null&&l!=""&&l=="random"){m.fillStyle="rgb("+h()+","+h()+","+h()+")"}else{if(l!=null&&l!=""){m.fillStyle=l}else{m.fillStyle="#B9CCE4"}}m.fillRect(0,0,n.clientWidth,n.clientHeight)}function b(l,m){m.shadowColor="#555";m.shadowBlur=3;m.shadowOffsetX=1;m.shadowOffsetY=-1;var n="";if(l.width>300){n="30pt"}else{if(l.width>200){n="20pt"}else{if(l.width>100){n="15pt"}else{n="7pt"}}}m.font=n+" Verdana";m.textAlign="center";m.fillStyle="#36454F";m.fillText(l.width.toString()+" x "+l.height.toString(),l.width/2,l.height/2+15)}function h(){return Math.floor(Math.random()*256).toString()}function d(){var l=document.createElement("p");var m=document.createTextNode(a(j(4,6)));l.appendChild(m);return l}function a(n){var l="";for(var m=0;m<n;m++){l+=c(j(10,30));if(m+1<n){l+="  "}}return l}function c(m){var o=k(1,true);m--;while(m>0){var l=0;if(m>10){l=j(10,m)}else{l=m}words=k(l,false);m-=l;var n=j(1,10);if((l>20&&n>2)||(l>7&&n>7)){o+=words.comma()}else{o+=words}}o+=".";return o}function k(l,n){var o=f();var p=o;if(n){p=o.capitalize()}for(var m=0;m<l-1;m++){p+=" "+f()}return p}function f(){var l=g.length-1;var m=j(0,l);var n=g[m];return n}function j(m,l){return Math.floor(Math.random()*(l-m+1))+m}String.prototype.capitalize=function(){return this.replace(/(?:^|\s)\S/g,function(l){return l.toUpperCase()})};String.prototype.comma=function(){var m=this.slice(0,this.length);var n=m.split(" ");if(n.length<7){return n.join(" ")}var l=j(2,n.length-3);n[l]+=",";return n.join(" ")};return{getWords:k,getSentences:a}}();