var app = angular.module("app", ['ngRoute']);
 
app.config(['$routeProvider', function($routeProvider) {
   
  $routeProvider.when('/', {
    templateUrl: "views/main.html",
    controller: "MainController"
  });
 
  $routeProvider.when('/options', {
    templateUrl: "views/options.html",
    controller: "OptionsController"
  });

  $routeProvider.when('/login', {
    templateUrl: "login.html",
    controller: "LoginController"
  });
   
  $routeProvider.otherwise({
        redirectTo: '/'
  });
   
}]);

app.controller("LoginController", [function() {
}]);
 
app.controller("OptionsController", ["$http", "$log","$scope", function($http,$log,$scope) {
  
  $http.get('http://localhost:8080/desapp-groupc-backend/rest/event/allEvents').then(succEvents).catch(failEvents);


  function succEvents(response){
    $scope.texto = response.data;
  }

  function failEvents(error){
    $log.error('Ocurrio un error: ' + error.data);
    return 'Ocurrio un error';
  }
}]);

app.controller("MainController", ["$http", "$log","$scope", function($http,$log,$scope) {
  
  $http.get('http://localhost:8080/desapp-groupc-backend/rest/event/allEvents').then(succEvents).catch(failEvents);


  function succEvents(response){
    $scope.events = response.data;
  }

  function failEvents(error){
    $log.error('Ocurrio un error: ' + error.data);
    return 'Ocurrio un error';
  }
}]);