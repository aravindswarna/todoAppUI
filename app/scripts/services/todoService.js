'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.service:TodoFactory
 * @description
 * # TodoFactory
 * Service of the todoAppApp
 */
 angular.module('todoAppApp')
  .factory('TodoFactory', ['$http',function($http) {
  		var path='http://localhost:8080';
  	return {
  		getTodos:function()
  		{
  			return $http.get(path+'/api/todo');
  		},
  		createTodo:function(data)
  		{
  			return $http.post(path+'/api/todo',data);
  		},
  		deleteTodo:function(id)
  		{
  			return $http.delete(path+'/api/todo/'+id);
  		},
  		updateTodo:function(data)
  		{
  			return $http.put(path+'/api/todo',data);
  		}
  	}

  }]);