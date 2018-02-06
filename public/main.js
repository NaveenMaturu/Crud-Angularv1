var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/create', {
            templateUrl: 'create.html',
            controller: 'CreateCtrl'
        })
		.when('/retrieve', {
            templateUrl: 'retrieve.html',
            controller: 'RetrieveCtrl'
        })
		.when('/delete',{
			templateUrl: 'delete.html',
			controller: 'deleteCtrl'
		})
        .otherwise({
            redirectTo: '/create'
        });
});

mainApp.controller('CreateCtrl', function($scope, $http, $window) {
    $scope.insertData = function() {
        var eName =$scope.eName;
        var eEmail = $scope.eEmail;
		var ephno = $scope.ephno;
		var addrees = $scope.addrees;
		window.alert(eEmail);
   
        $http.post("http://localhost:1995/api/insert", {

            "_id": eEmail,
            "eName": eName,
            "eEmail": eEmail,
			"ephno": ephno,
			"addrees": addrees
         
        }).then(function(response) {
            if (response.data.error == undefined) {
                $window.alert('Data Inserted Successfully!!');
            } else {
                $window.alert('Sorry insertion failed. Check your mail !!');

            }
        })

    }
});
mainApp.controller('RetrieveCtrl', function($scope, $http, $window,$rootScope) {
    $scope.getList = function() {
        var eEmail = $scope.eEmail;
        $http.post("http://localhost:1995/api/retrieve",{"id":eEmail, "eEmail":eEmail}).then(function(response) {
            alert(JSON.stringify(response))
			if (response.data.error == undefined) {
                
				$scope.result=response.data.output;
				
            } else {
                $window.alert('Please Check Entered ID');

            }
        });
    }
    
	//update data
	$scope.update = function() {
		
		 var eName = document.getElementById('sNameUpdated').value;
        var eEmail = $scope.eEmail;
		var ephno = document.getElementById('sphnoUpdated').value;
		var addrees = document.getElementById('saddreesUpdated').value;
		alert(eName)
		alert(eEmail)
        
        $http.post("http://localhost:1995/api/update", {
			 "id": eEmail,
            "eName": eName,
            "eEmail": eEmail,
			"ephno": ephno,
			"addrees": addrees
        }).then(function(response) {
          if (response.data.result!=0) {
              $window.alert('Data Updated Successfully!!');
              $window.alert(JSON.stringify(response));
          } else {
              $window.alert('update failed. Check your mail !!');
          }
        })
    }
});


mainApp.controller('deleteCtrl', function($scope, $http, $window) {
    $scope.deleteData = function() {
alert("hi");
        var sEmail = document.getElementById('sEmailDelete').value;
		alert(sEmail);
         $http.post("http://localhost:1995/data",{
            "sEmail": sEmail
        }).then(function(response) {
            if (response.data.error == undefined) {
                $window.alert('Data Removed Successfully');
            } else {
                $window.alert('Please Check Entered ID');
            }
        })
    }
});