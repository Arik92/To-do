app.factory('taskService', function() {
  var tasks=[

  ];
  var addInput = function(input, done) {
    var len= tasks.length;
    tasks[len]= {
      tName:input,
      isDone: done
    };
  }//getInput
  var remove = function(index) {
    tasks.splice(index,1);
  };
  return {
    tasks:tasks,
    addInput: addInput,
    remove: remove
  }
})
