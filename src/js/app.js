// Your code goes here
function myFunction(){
        x = document.getElementById("myText");
      }


function autoComplete(el){
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
}
