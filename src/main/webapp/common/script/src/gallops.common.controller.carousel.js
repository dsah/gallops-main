
var gallops = (gallops === null || typeof (gallops) !== "object") ? {} : gallops;
gallops.common = gallops.common || {};
gallops.common.controller = gallops.common.controller || {};

gallops.common.controller.CarouselController = ['$scope',
    function ($scope) {



        $scope.myInterval = 2000;
        $scope.slides = [
            {
                image: 'src/main/webapp/resources/images/Picture1.png',
                id:0
            },
            {
                image: 'src/main/webapp/resources/images/picture2.png',
                id:1
            }
            
        ];

    }];