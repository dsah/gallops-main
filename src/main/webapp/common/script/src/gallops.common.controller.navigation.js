
var gallops = (gallops === null || typeof (gallops) !== "object") ? {} : gallops;
gallops.common = gallops.common || {};
gallops.common.controller = gallops.common.controller || {};

gallops.common.controller.NavigationController = ['$scope', '$location',
    '$rootScope', 'HEADER_URL', 'FOOTER_URL',
    function ($scope,
            $location,
            $rootScope,
            HEADER_URL,
            FOOTER_URL) {

        $scope.sectionTabs = gallops.common.service.constants.SECTION_TABS;
        var path = $location.path();
        $scope.sectionTabs.forEach(function (tab) {
            tab.active = false;
            if (tab.path === path) {
                tab.active = true;
            }
        });

        function navigate(toWhere) {
            $location.url(toWhere);
        }
        $scope.headingURL = HEADER_URL;
        $scope.footerURL = FOOTER_URL;
        $scope.navigate = navigate;

    }];