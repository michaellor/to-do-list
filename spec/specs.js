describe('Tasks', function() {
  it("creates a new list with the given properties.", function(){
  var testList = new Tasks("Laundry","Vacuum","Groceries", "Cook");
  expect(testList.task1).to.equal("Laundry")
  expect(testList.task2).to.equal("Vacuum");
  expect(testList.task3).to.equal("Groceries");
  expect(testList.task4).to.equal("Cook");
  });

  it("removes a task from the list.", function() {
  var testList = new Tasks("Laundry","Vacuum","Groceries", "Cook");
  expect(testList.removeTask()).to.equal("");

  });

  //
  // it("adds fullDescription method to a place.", function() {
  //   var testPlace = new Place ("Maui","Hawaii","Beach", "Summer");
  //   expect(testPlace.fullDescription()).to.equal("Beach Summer");
  // });
  //
  // it("adds fullName method to a place.", function() {
  //   var testPlace = new Place("Maui","Hawaii","Beach", "Summer");
  //   expect(testPlace.fullLocation()).to.equal("Maui Hawaii");
  // });
  //

});
