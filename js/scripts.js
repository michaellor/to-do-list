function tasks(task1, task2) {
  this.task1 = task1;
  // this.task2 = task2;
};

tasks.prototype.ensure = function() {
  return this.task1;
}




$(document).ready(function(){
  $("form#masterPlace").submit(function(event){

    var inputTask1 = $("input#task1").val();
    // var inputTask2 = $("input#task2").val();
    var newTask = new tasks(inputTask1);

    $("ul#info").append('<li>' + newTask.ensure());

    $("input#task1").val("");
    $("input#task2").val("");
    //
    // $("#info").click(function(){
    //   $("#info").hide();
    // })

    event.preventDefault();

  });
});
