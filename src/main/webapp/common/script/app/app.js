/**
 * Declares the main application module and configues it.
 */
angular.module("gallops",
        ["ngRoute",
            "gallops.controller"])
        .config(["$routeProvider", function ($routeProvider) {
                console.log("config init.");
                var CONSTANTS = gallops.common.service.constants;
                var MAIN_PATH_MAPS = CONSTANTS.PATH_MAPS.MAIN;
                $routeProvider
                        .when(MAIN_PATH_MAPS.SERVICES.path, {controller: "NavigationCtrl", templateUrl: MAIN_PATH_MAPS.SERVICES.templateUrl})
                        .otherwise({redirectTo: MAIN_PATH_MAPS.NOT_FOUND.path});



            }])
        .run(function ($rootScope, $route, $location) {
            'use strict';
            console.log("app run.");

        });
