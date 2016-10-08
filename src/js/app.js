function autoComplete(el) {
  to_location = el.value;
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
      "Erlang"
    ];
    $( "#myText" ).autocomplete({
      source: availableTags
    });
  } );
};

$(document).ready(function(){
  $("#myText").keyup(function(e) {
    if(e.which == 13) {
        console.log("Now EXIT!!!" + to_location);
        window.location.replace("index_2.html?location=" + to_location);
    }
  });
});
