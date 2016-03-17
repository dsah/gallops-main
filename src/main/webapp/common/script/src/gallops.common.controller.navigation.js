var gallops = (gallops === null || typeof (gallops) !== "object") ? {} : gallops;
gallops.common = gallops.common || {};
gallops.common.controller = gallops.common.controller || {};

gallops.common.controller.NavigationController = ['$scope', '$location',
    '$rootScope',
    function ($scope,
            $location,
            $rootScope) {
                
                $scope.testNav = "navigation";

    }];