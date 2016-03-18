
var gallops = (gallops === null || typeof (gallops) !== "object") ? {} : gallops;
gallops.common = gallops.common || {};
gallops.common.controller = gallops.common.controller || {};

gallops.common.controller.CarouselController = ['$scope',
    function ($scope) {



        $scope.myInterval = 2000;
        $scope.slides = [
            {
                image: 'http://lorempixel.com/400/200/'
            },
            {
                image: 'http://lorempixel.com/400/200/food'
            },
            {
                image: 'http://lorempixel.com/400/200/sports'
            },
            {
                image: 'http://lorempixel.com/400/200/people'
            }
        ];

    }];