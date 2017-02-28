app.controller('taskCtrl', function($scope, taskService){
  $scope.tasks = taskService.tasks;
  $scope.remove = taskService.remove;
  $scope.getInput = function(){
    taskService.addInput($scope.input1, $scope.input2);
  }
})
