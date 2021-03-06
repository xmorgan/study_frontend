var angular = require('angular');
var app = require('app');
var Todo = require('factories/todo');

module.exports = app.directive('todoItem', function(Todo){
  return {
    replace: false,
    templateUrl: 'app/views/todo_item.html',
    
    scope: {
      todo: '=todoItem',
      todoItemRemoved: '=',
      todoItemUpdated: '=',
    },
    
    controller: function($scope){
      $scope.save = function(){
        $scope.todo.save()
          .then(function(){
            $scope.todoItemUpdated();
          })
        ;
      };
      
      $scope.remove = function(){
        $scope.todo.remove()
          .then(function(){
            $scope.todoItemRemoved();
          })
        ;
      };
    }
  };
});
