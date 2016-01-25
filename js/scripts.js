function Place(placeName, placeLocation, placeLandmark, placeTime) {
  this.placeName = placeName;
  this.placeLocation = placeLocation;
  this.placeLandmark = placeLandmark;
  this.placeTime = placeTime;
};


Place.prototype.fullLocation = function() {
  return this.placeName + ", " + this.placeLocation;
};

Place.prototype.fullDescription = function() {
  return this.placeLandmark + " " + this.placeTime;
};

$(document).ready(function(){
  $("form#masterPlace").submit(function(event){

    var inputName = $("input#placeName").val();
    var inputLocation = $("input#placeLocation").val();
    var inputLandmark = $("input#placeLandmark").val();
    var inputTime = $("input#placeTime").val();
    var newPlace = new Place(inputName, inputLocation, inputLandmark, inputTime);

    $("ul#info").append("<p><span class='placename'>" + newPlace.fullLocation() + "</span></p>");

    $("input#placeName").val("");
    $("input#placeLocation").val("");
    $("input#placeLandmark").val("");
    $("input#placeTime").val("");

    event.preventDefault();

    $(".placename").last().click(function() {
      $("#show-info").show();
      $("#show-info h2").text(newPlace.fullLocation());
      $(".place-name").text(newPlace.fullLocation());
      $(".place-location").text(newPlace.placeLocation);
      $(".place-landmark").text(newPlace.placeLandmark);
      $(".place-time").text(newPlace.placeTime);
    })


  });
});
