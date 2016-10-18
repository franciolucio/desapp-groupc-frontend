var app = angular.module("app", ['ngRoute']);
 
app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: "views/events.html",
    controller: "EventsController"
  });
 
  $routeProvider.when('/profile', {
    templateUrl: "views/profile.html",
    controller: "ProfileController"
  });

  $routeProvider.when('/login', {
    templateUrl: "login.html",
    controller: "LoginController"
  });

  $routeProvider.when('/newEvent', {
    templateUrl: "views/newEvent.html",
    controller: "NewEventController"
  });
   
  $routeProvider.otherwise({
        redirectTo: '/'
  });
   
}]);

app.controller("LoginController", [function() {
}]);
 
app.controller("ProfileController", ["$http", "$log","$scope", function($http,$log,$scope) {
  
  $http.get('http://localhost:8080/desapp-groupc-backend/rest/user/userFrom/1').then(succUser).catch(failEvents);


  function succUser(response){
    $scope.user = response.data;
  }

  function failEvents(error){
    $log.error('Ocurrio un error: ' + error.data);
    return 'Ocurrio un error';
  }
}]);

app.controller("NewEventController", ["$http", "$log","$scope", function($http,$log,$scope) {
  
  $scope.lucio = 0;

  function agregar(){
    $scope.alert = 10000;
  }
}]);

app.controller("EventsController", ["$http", "$log","$scope", function($http,$log,$scope) {
  
  $http.get('http://localhost:8080/desapp-groupc-backend/rest/event/allEvents').then(succEvents).catch(fail);
  $http.get('http://localhost:8080/desapp-groupc-backend/rest/user/allFriends/1').then(succFriends).catch(fail);

  function succEvents(response){
    $scope.events = response.data;
    var event = {}
    return $http.post('http://localhost:8080/desapp-groupc-backend/rest/user/addEvent/1', event).then(suc).catch(fail);
  }

  function succFriends(response){
    $scope.friends = response.data;
  }

  function fail(error){
    $log.error('Ocurrio un error: ' + error.data);
    return 'Ocurrio un error';
  }

  function suc(response){
    return response.data;
  }
}]);