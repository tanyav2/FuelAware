function autoComplete(el){
  var x = el.value
	console.log(el.value);

  $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#myText" ).autocomplete({
      source: availableTags
    });
  } );
	//var x = document.createElement("div")
	//document.appendChild(x)
};

$(document).ready(function(){
  $("#myText").keyup(function(e) {
    if(e.which == 13) {
        console.log("Now EXIT!!!");
    }
  });
});
