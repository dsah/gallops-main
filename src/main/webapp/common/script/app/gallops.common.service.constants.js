var gallops = gallops || {};
gallops.common = gallops.common || {};
gallops.common.service = gallops.common.service || {};

gallops.common.service.constants = {
    HEADER_URL: "common/view/heading.html",
    FOOTER_URL: "common/view/footer.html",
    SERVICE_NAME: {
        ROOT_SCOPE: "$rootScope",
        SCOPE: "$scope",
        HTTP: "$http",
        URLS: "URLS"
    },
    URLS: {
        SERVICE_BASE_URL: "../"

    },
    PATH_MAPS: {
        MAIN: {
            HOME: {path: "/", templateUrl: "home/view/home.html"},
            SERVICES: {path: "/services", templateUrl: "src/main/webapp/services/view/services.html"},
            ABOUT: {path: "/about", templateUrl: "about/view/about.html"},
            CONTACT: {path: "/contact", templateUrl: "contact/view/contact.html"},
            FAQ: {path: "/faq/", templateUrl: "faq/view/faq.html"},
            NOT_FOUND: {path: "/404", templateUrl: "common/view/404.html"}
        }
    }



};

gallops.common.service.constants.menus = {
    "home": [
        {title: "home", path: "#/"},
    ],
    "services": [
        {title: "services", path: "#/services"},
    ],
    "contact": [
        {title: "contact", path: "#/contanct"},
    ]
};