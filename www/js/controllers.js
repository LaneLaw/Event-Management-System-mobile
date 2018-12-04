angular.module('app.controllers', [])

    .controller('homeCtrl', ['$scope', '$stateParams', '$http', 'Event', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, Event) {

            $http.get("http://localhost:1337/event/highlight")
                .then(function (response) {
                    $scope.feeds = response.data;
                });

        }])

    .controller('departmentCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {

        }])

    .controller('eventLocationCtrl', ['$scope', '$stateParams', 'Event', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Event) {
            $scope.events = Event.getAllVenues();

        }])

    .controller('loginOutCtrl', ['$scope', '$stateParams', '$http', '$ionicHistory', '$ionicPopup', '$state', '$window', 'Event',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $ionicHistory, $ionicPopup, $state, $window, Event) {

            $scope.data = {};


            $scope.login = function () {
                $http.post("http://localhost:1337/user/login", $scope.data)
                    .then(function (response) {

                        $scope.session = response.data;
                        console.log($scope.session);
                        Event.setUser($scope.session.username);
                        Event.setUserID($scope.session.user_id);
                        // $scope.k.username = Event.getUser();
                        // console.log($scope.k.username);
                        // A confirm dialog
                        var confirmPopup = $ionicPopup.confirm({
                            title: 'Welcome back!',
                            template: 'Go to Hoempage?'
                        });

                        confirmPopup.then(function (res) {
                            if (res) {

                                // $window.location.href = '/';
                                $state.go("tabsController.home");
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


    .controller('profileCtrl', ['$scope', '$stateParams', 'Event', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Event) {
            $scope.$on("$ionicView.beforeEnter", function () {

                $scope.username = Event.getUser();

            });
        }])

    .controller('registrationCtrl', ['$scope', '$stateParams', 'Event', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Event, $http) {
            $scope.$on("$ionicView.beforeEnter", function () {
                $scope.userid = Event.getUserID();
                
                $http.get("http://localhost:1337/user/" + $scope.userid + "/register")
                    .then(function (response) {
                        $scope.feeds = response.data;
                        console.log(response.data);
                    });
            });
        }])

    .controller('eventCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {
            if ($stateParams.organizer == "Department of Music") {
                $http.get("http://localhost:1337/event/mdepartment")
                    .then(function (response) {
                        $scope.feeds = response.data;
                    });
            } else {
                $http.get("http://localhost:1337/event/cdepartment")
                    .then(function (response) {
                        $scope.feeds = response.data;
                    });
            }


        }])

    .controller('eventDetailCtrl', ['$scope', '$stateParams', '$http','Event','$ionicPopup','$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http,Event,$ionicPopup,$state) {
            $scope.$on("$ionicView.beforeEnter", function () {
                $http.get("http://localhost:1337/event/getEvents")
                    .then(function (response) {
                        $scope.feeds = response.data;
                        for (var i = 0; i < $scope.feeds.length; i++) {
                            if ($scope.feeds[i].id == $stateParams.id) {
                                $scope.event = $scope.feeds[i];
                            }
                        }

                    });

                $scope.register = function () {
                    $scope.userid = Event.getUserID();
                    $http.get("http://localhost:1337/user/"+ $scope.userid+"/register/add/" + $stateParams.id)
                        .then(function (response) {


                            // $scope.k.username = Event.getUser();
                            // console.log($scope.k.username);
                            // A confirm dialog
                            var confirmPopup = $ionicPopup.confirm({
                                title: 'Register this event?',
                                template: 'Are you sure?'
                            });

                            confirmPopup.then(function (res) {
                                if (res) {
                                    var alertPopup = $ionicPopup.alert({
                                        title: "",
                                        template: 'Registered successfully.'});
                                    // $window.location.href = '/';
                                    $state.go("tabsController.home");
                                } else {
                                    $http.get("http://localhost:1337/user/"+ $scope.userid+"/register/remove/" + $stateParams.id)
                                    $state.go($state.current, {}, { reload: true });
                                }
                            });

                        }, function (response) {

                            var alertPopup = $ionicPopup.alert({
                                title: response.data,
                                template: 'Not enough quota'
                            });
                        });
                };
            });
        }])

    .controller('locationCtrl', ['$scope', '$stateParams', '$ionicTabsDelegate', 'Event', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $ionicTabsDelegate, Event) {

            $scope.events = Event.getAllVenues();
            for (var i = 0; i < $scope.events.length; i++) {
                if ($scope.events[i].VenueID === $stateParams.VenueID) {
                    $scope.Latitude = $scope.events[i].Latitude;
                    $scope.Longitude = $scope.events[i].Longitude;
                    $scope.venuename = $scope.events[i].VenueName;
                }
            }


            var map = L.map(document.querySelector('[name="tab' + ($ionicTabsDelegate.selectedIndex() + 1) + '"] #map')).setView([$scope.Latitude, $scope.Longitude], 17);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker([$scope.Latitude, $scope.Longitude]).addTo(map)
                .bindPopup($scope.venuename);
        }])

    .controller('event2Ctrl', ['$scope', '$stateParams', '$http', 'Event',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, Event) {
            if ($stateParams.VenueID == "SWT501") {
                $http.get("http://localhost:1337/event/fvenue")
                    .then(function (response) {
                        $scope.feeds = response.data;
                    });
            } else {
                $http.get("http://localhost:1337/event/svenue")
                    .then(function (response) {
                        $scope.feeds = response.data;
                    });
            }

        }])
