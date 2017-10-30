var idMsg = 0;
var actualQuote = {};
var nextQuote = {};
var previousQuote = {};


function getQuote() {
	//feeding previous card quote
	$(".titlePrevious").html(truncateString(previousQuote.title,25));
   $(".textPrevious").html(truncateString(previousQuote.body,135));
   $(".idPrevious").html("quote#: " +previousQuote.id);
   //feeding actual card quote
	$(".title").html(truncateString(actualQuote.title,25));
   $(".text").html(truncateString(actualQuote.body,135));
   $(".id").html("quote#: " + actualQuote.id);
	previousQuote = actualQuote;
   //feeding next card quote
		var root = 'https://jsonplaceholder.typicode.com';
		idMsg += 1;
		$.ajax({
		  url: root + '/posts/' + idMsg,
		  method: 'GET'
		}).then(function(data) {
		  	nextQuote = data;
		  $(".titleNext").html(truncateString(nextQuote.title,25));
		   $(".textNext").html(truncateString(nextQuote.body,135));
		   $(".idNext").html("quote#: " + nextQuote.id);
		   actualQuote = nextQuote;
});
}


function truncateString(str, num) {
// Clear out that junk in your trunk
var strAnswer ='';
if(str !== undefined) {
	console.log(str);
	if (str.length > num) {
	    strAnswer = str.slice(0,num-3);
	    strAnswer += '...';
	  } 
	return strAnswer;
	}	
}


$(document).ready(function () {
	 //getQuote();
  $("#getMessage").on("click", getQuote);

});
