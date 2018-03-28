'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppApp
 */
angular.module('todoAppApp')
  .controller('MainCtrl', function(TodoFactory) {
    var vm = this;
    vm.task = {
      name: '',
      status: 'Pending'
    };
    vm.tasks = [];
    vm.error='Hello';
    //this.tasks = [{ id: 1, name: 'Watering Trees', status: 'Pending' }, { id: 2, name: 'Watering Trees', status: 'Completed' }, { id: 3, name: 'Visiting Doctor', status: 'Pending' }];
    vm.completeTask = function(id) {
      var task = {};
      for (var i = 0; i < vm.tasks.length; i++) {
        if (id === vm.tasks[i].id) {
          task = vm.tasks[i];
        }
      }
      task.status='Completed';
      TodoFactory.updateTodo(task).then(function(success) {
        vm.tasks = success.data;
         vm.error='';
      }, function(error) {
        vm.error = error.data.message;
      });
    }
    vm.deleteTask = function(id) {
      TodoFactory.deleteTodo(id).then(function(success) {
        vm.tasks = success.data;
        vm.error='';
      }, function(error) {
        vm.error = error.data.message;
        alert(vm.error);
      });
    }
    TodoFactory.getTodos().then(function(success) {
      vm.tasks = success.data;
      vm.error='';
    }, function(error) {
      vm.error = error.data.message;
    });
    vm.createTask = function() {
      TodoFactory.createTodo(vm.task).then(function(success) {
        vm.tasks = success.data;
        vm.error='';
      }, function(error) {
        vm.error = error.data.message;
      });
    }
  });
