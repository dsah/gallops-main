/**
 * Declares the main application module and configues it.
 */
angular.module("gallops",
        ["ngRoute",
            "ngAria",
            "ngMaterial",
            "ngAnimate",
            "ui.bootstrap",
            "gallops.controller",
            "gallops.service",
            "gallops.values"])
        .config(["$routeProvider",
            "$locationProvider",
            "$compileProvider", function ($routeProvider,
                    $locationProvider,
                    $compileProvider) {
                $locationProvider.html5Mode(true)
                var CONSTANTS = gallops.common.service.constants;
                var MAIN_PATH_MAPS = CONSTANTS.PATH_MAPS.MAIN;
                $compileProvider.debugInfoEnabled(false);
                $routeProvider
                        .when(MAIN_PATH_MAPS.HOME.path, {controller: "NavigationCtrl", templateUrl: MAIN_PATH_MAPS.HOME.templateUrl})
                        .when(MAIN_PATH_MAPS.SERVICES.path, {controller: "NavigationCtrl", templateUrl: MAIN_PATH_MAPS.SERVICES.templateUrl})
                        .when(MAIN_PATH_MAPS.ABOUT.path, {controller: "NavigationCtrl", templateUrl: MAIN_PATH_MAPS.ABOUT.templateUrl})
                        .when(MAIN_PATH_MAPS.CONTACT.path, {controller: "NavigationCtrl", templateUrl: MAIN_PATH_MAPS.CONTACT.templateUrl})
                        //.when(MAIN_PATH_MAPS.FAQ.path, {controller: "NavigationCtrl", templateUrl: MAIN_PATH_MAPS.FAQ.templateUrl})
                        .when(MAIN_PATH_MAPS.NOT_FOUND.path, {templateUrl: MAIN_PATH_MAPS.NOT_FOUND.templateUrl})
                        .otherwise({redirectTo: MAIN_PATH_MAPS.NOT_FOUND.path});

            }])
        .run(function ($rootScope, $route, $location) {
            'use strict';
        });
