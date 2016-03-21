var gallops = gallops || {};
gallops.common = gallops.common || {};
gallops.common.service = gallops.common.service || {};

gallops.common.service.constants = {
    HEADER_URL: "src/main/webapp/common/view/heading.html",
    FOOTER_URL: "src/main/webapp/common/view/footer.html",
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
            HOME: {path: "/", templateUrl: "src/main/webapp/home/view/home.html"},
            SERVICES: {path: "/services", templateUrl: "src/main/webapp/services/view/services.html"},
            ABOUT: {path: "/about", templateUrl: "src/main/webapp/about/view/about.html"},
            CONTACT: {path: "/contact", templateUrl: "src/main/webapp/contact/view/contact.html"},
           // FAQ: {path: "/faq", templateUrl: "src/main/webapp/faq/view/faq.html"},
            NOT_FOUND: {path: "/404", templateUrl: "src/main/webapp/common/view/404.html"}
        }
    }



};

gallops.common.service.constants.SECTION_TABS = [
            {title: "Home", path: "/", active: false, disabled: true},
            {title: "Services", path: "/services", active: false, disabled: true},
            {title: "About", path: "/about", active: false, disabled: true},
            {title: "Contact", path: "/contact", active: false, disabled: true}
           // {title: "FAQ", path: "/faq", active: false, disabled: true}
        ];

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