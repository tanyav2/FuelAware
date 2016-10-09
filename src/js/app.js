function autoComplete(el) {
  to_location = el.value;
  console.log(el.value);

  $( function() {
    var availableTags = [
      "Thomas M. Siebel Center for Computer Science, North Goodwin Avenue, Urbana, IL",
      "Wohlers Hall, South 6th Street, Champaign, IL",
      "Lincoln Hall, South Wright Street, Urbana, IL",
      "Masonic Temple Theater, Temple Street, Detroit, MI",
      "Detroit Metropolitan Wayne County Airport, Detroit, MI",
      "Detroit Institute of Arts - Catering, Woodward Avenue, Detroit, MI",
      ""
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
