angular.module('app.controllers', [])

    .controller('homeCtrl', ['$scope', '$stateParams', '$http','Event', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http,Event) {
    
            $http.get("http://localhost:1337/event/index")
            .then(function(response){
              $scope.feeds = response.data;
              console.log($scope.feeds)
          });
        // $scope.events = Event.getAllEvents();
        // console.log($scope.events);
        
        }])

    .controller('departmentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('eventLocationCtrl', ['$scope', '$stateParams','Event', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams,Event) {
            $scope.events = Event.getAllVenues();

        }])

    .controller('loginOutCtrl', ['$scope', '$stateParams', '$http', '$ionicHistory', '$ionicPopup', '$state','$window',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $ionicHistory, $ionicPopup, $state,$window) {
            
            $scope.data ={};
            
            
            $scope.login = function () {
                $scope.session = {};
                console.log($scope.session.username);
                $http.post("http://localhost:1337/user/login", $scope.data)
                    .then(function (response) {
                        console.log(response.data);
                        $scope.session = response.data;
                        console.log($scope.session.username);
                        
                        // A confirm dialog
                        var confirmPopup = $ionicPopup.confirm({
                            title: 'Welcome back!',
                            template: 'Go to Hoempage?'
                        });

                        confirmPopup.then(function (res) {
                            if (res) {
                                
                                $window.location.href = '/';
                            } else {
                                console.log('granted');
                                $state.go($state.current, {}, { reload: true });
                            }
                        });

                    }, function (response) {
                        
                        var alertPopup = $ionicPopup.alert({
                            title: response.data,
                            template: 'Login failed. Please try again.'
                        });
                    });
            }

        }])


    .controller('eventCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('eventDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('locationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('event2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])
