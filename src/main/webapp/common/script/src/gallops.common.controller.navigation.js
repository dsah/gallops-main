/**
 * logic for navigation controller
 * @type @exp;gallops
 */
var gallops = (gallops === null || typeof (gallops) !== "object") ? {} : gallops;
gallops.common = gallops.common || {};
gallops.common.controller = gallops.common.controller || {};

gallops.common.controller.NavigationController = ['$scope',
    '$location',
    '$window',
    'HEADER_URL',
    'FOOTER_URL',
    function ($scope,
            $location,
            $window,
            HEADER_URL,
            FOOTER_URL) {

        var path = $location.path();

        function initialise() {
            $scope.sectionTabs = gallops.common.service.constants.SECTION_TABS;

            $scope.sectionTabs.forEach(function (tab) {
                tab.active = false;
                if (tab.path === path) {
                    tab.active = true;
                }
            });

            $(".view-container").css({"min-height": $window.innerHeight - 200 + "px"});

        }

        function navigate(toWhere) {
            $location.url(toWhere);
        }

        $scope.copyrightYear = new Date().getFullYear();
        $scope.headingURL = HEADER_URL;
        $scope.footerURL = FOOTER_URL;
        $scope.navigate = navigate;
        $scope.initialise = initialise;

    }];