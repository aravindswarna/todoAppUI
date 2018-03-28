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

  	return {
  		getTodos:function()
  		{
  			return $http.get('http://localhost:8080/api/todo');
  		},
  		createTodo:function(data)
  		{
  			return $http.post('http://localhost:8080/api/todo',data);
  		},
  		deleteTodo:function(id)
  		{
  			return $http.delete('http://localhost:8080/api/todo/'+id);
  		},
  		updateTodo:function(data)
  		{
  			return $http.put('http://localhost:8080/api/todo',data);
  		}
  	}

  }]);