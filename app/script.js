const app = {

	initialize: function() {
	
	var authkey = '0t9xv1qfUoy6AyU3Zq9dBhyU0YMSHIpn';
  
  document.getElementById('submit').addEventListener('click', function() { 
	   searchArticle();
	})
    
  function searchArticle() {
	  let searchWord = $("#input").val();
	
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchWord}&api-key=` +authkey)
		  .then(res => res.json())
		  
      .then((out) => {
	      var results = "<a href=" + out.response.docs[0].web_url + ">" +"<li>" + out.response.docs[0].headline.main + "</li>" + "</a>";	
	
        for(var i in out.response.docs) {
		      if( i != 0) {
		        results += "<a href=" + out.response.docs[i].web_url + ">" + "<li>" + out.response.docs[i].headline.main + "</li>" + "</a>";
		      }
	      }
		
		    document.getElementById("output").innerHTML = results;
	    })
	}

  
  }
};


