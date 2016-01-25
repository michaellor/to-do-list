describe('Place', function() {
  it("creates a new place with the given properties.", function(){
  var testPlace = new Place("Maui","Hawaii","Beach", "Summer");
  expect(testPlace.placeName).to.equal("Maui")
  expect(testPlace.placeLocation).to.equal("Hawaii");
  expect(testPlace.placeLandmark).to.equal("Beach");
  expect(testPlace.placeTime).to.equal("Summer");
  });


  it("adds fullDescription method to a place.", function() {
    var testPlace = new Place ("Maui","Hawaii","Beach", "Summer");
    expect(testPlace.fullDescription()).to.equal("Beach Summer");
  });

  it("adds fullName method to a place.", function() {
    var testPlace = new Place("Maui","Hawaii","Beach", "Summer");
    expect(testPlace.fullLocation()).to.equal("Maui Hawaii");
  });


});
