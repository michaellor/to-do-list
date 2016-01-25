function Tasks(task1, task2, task3, task4) {
  this.task1 = task1;
  this.task2 = task2;
  this.task3 = task3;
  this.task4 = task4;
};


Tasks.prototype.removeTask = function() {
  return this.task1 = "";
};

//
// Place.prototype.fullDescription = function() {
//   return this.placeLandmark + " " + this.placeTime;
// };
//
// $(document).ready(function(){
//   $("form#masterPlace").submit(function(event){
//
//     var inputName = $("input#placeName").val();
//     var inputLocation = $("input#placeLocation").val();
//     var inputLandmark = $("input#placeLandmark").val();
//     var inputTime = $("input#placeTime").val();
//     var newPlace = new Place(inputName, inputLocation, inputLandmark, inputTime);
//
//     $("ul#info").append("<p><span class='placename'>" + newPlace.fullLocation() + "</span></p>");
//
//     $("input#placeName").val("");
//     $("input#placeLocation").val("");
//     $("input#placeLandmark").val("");
//     $("input#placeTime").val("");
//
//     event.preventDefault();
//
//     $(".placename").last().click(function() {
//       $("#show-info").show();
//       $("#show-info h2").text(newPlace.fullLocation());
//       $(".place-name").text(newPlace.fullLocation());
//       $(".place-location").text(newPlace.placeLocation);
//       $(".place-landmark").text(newPlace.placeLandmark);
//       $(".place-time").text(newPlace.placeTime);
//     })
//
//
//   });
// });
