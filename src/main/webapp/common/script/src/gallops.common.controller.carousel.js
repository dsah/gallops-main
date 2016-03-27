
var gallops = (gallops === null || typeof (gallops) !== "object") ? {} : gallops;
gallops.common = gallops.common || {};
gallops.common.controller = gallops.common.controller || {};

gallops.common.controller.CarouselController = ['$scope',
    function ($scope) {



        $scope.myInterval = 2000;
        $scope.slides = [
            {
                image: 'src/main/webapp/resources/images/carousel/Picture1.png',
                id:0
            },
            {
                image: 'src/main/webapp/resources/images/carousel/adelaide.jpg',
                id:1
            },
            {
                image: 'src/main/webapp/resources/images/carousel/brisbane.png',
                id:2
            },
            {
                image: 'src/main/webapp/resources/images/carousel/canberra.jpg',
                id:3
            },
            {
                image: 'src/main/webapp/resources/images/carousel/NSW.jpg',
                id:4
            },
            {
                image: 'src/main/webapp/resources/images/carousel/macquarie.jpg',
                id:5
            }
            ,
            {
                image: 'src/main/webapp/resources/images/carousel/nt.jpg',
                id:6
            },
            {
                image: 'src/main/webapp/resources/images/carousel/Perth.jpg',
                id:7
            },
            {
                image: 'src/main/webapp/resources/images/carousel/surf.jpg',
                id:8
            },
            {
                image: 'src/main/webapp/resources/images/carousel/Victoria.jpg',
                id:9
            }
            
        ];

    }];