/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

/* App */
var app = new Vue({
  el: '#app',
  data: {
    siteLogo: './dist/img/logo-light.png',
    cartItems: '0',
    mainLinks: [{
      value: 'Home',
      url: '#'
    }, {
      value: 'Courses',
      url: '#'
    }, {
      value: 'Instructors',
      url: '#'
    }, {
      value: 'Events',
      url: '#'
    }, {
      value: 'Pages',
      url: '#'
    }, {
      value: 'Elements',
      url: '#'
    }],
    supportLinks: [{
      value: 'User dashboard',
      url: '#'
    }, {
      value: 'Contact Us',
      url: '#'
    }, {
      value: 'FAQ',
      url: '#'
    }, {
      value: 'Course Offer',
      url: '#'
    }, {
      value: 'Events',
      url: '#'
    }],
    packages: [{
      name: 'Standard',
      price: '12',
      courses: '2',
      time: '15',
      products: [{
        name: 'Web Designing',
        value: true
      }, {
        name: 'Human-centered Design',
        value: true
      }, {
        name: 'Basic Marketing',
        value: false
      }, {
        name: 'Python for Everybody',
        value: false
      }, {
        name: 'Android developer',
        value: false
      }, {
        name: 'Business English',
        value: false
      }],
      img: './dist/img/h5-custom-icon-7.png'
    }, {
      name: 'Professional',
      price: '59',
      courses: '4',
      time: '30',
      products: [{
        name: 'Web Designing',
        value: true
      }, {
        name: 'Human-centered Design',
        value: true
      }, {
        name: 'Basic Marketing',
        value: true
      }, {
        name: 'Python for Everybody',
        value: true
      }, {
        name: 'Android developer',
        value: false
      }, {
        name: 'Business English',
        value: false
      }],
      img: './dist/img/h5-custom-icon-8.png'
    }, {
      name: 'Advanced',
      price: '88',
      courses: '6',
      time: '30',
      products: [{
        name: 'Web Designing',
        value: true
      }, {
        name: 'Human-centered Design',
        value: true
      }, {
        name: 'Basic Marketing',
        value: true
      }, {
        name: 'Python for Everybody',
        value: true
      }, {
        name: 'Android developer',
        value: true
      }, {
        name: 'Business English',
        value: true
      }],
      img: './dist/img/h5-custom-icon-9.png'
    }],
    mainPost: {
      title: 'Contemporary Ideas',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil repellat incidunt velit eligendi nam quo voluptate soluta magni. Voluptates esse quos nesciunt alias quod?'
    },
    popularCourses: [{
      name: 'Business English',
      author: 'Preston Marshall',
      url: '#'
    }, {
      name: 'Social Computing',
      author: 'David Sanders',
      url: '#'
    }, {
      name: 'Learn Spanish',
      author: 'Jennie King',
      url: '#'
    }],
    socialLinks: [{
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: '#'
    }, {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: '#'
    }, {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: '#'
    }],
    scrolled: false
  },
  methods: {
    scrollUp: function scrollUp() {
      window.scrollTo(0, 0);
    },
    getCartItems: function getCartItems() {
      return this.cartItems;
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        _this.scrolled = true;
      } else if (window.scrollY < 400) {
        _this.scrolled = false;
      }
    });
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined mixin.\n   ╷\n23 │ .blue_btn { @include blue_btn; }\r\n   │             ^^^^^^^^^^^^^^^^^\n   ╵\n  src\\partials\\_common.scss 23:13  @import\n  src\\app.scss 2:9                 root stylesheet\n    at processResult (C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:701:19)\n    at C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:807:5\n    at C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:93405:16)\n    at _render_closure1.call$2 (C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:81763:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:27547:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Ste\\Documents\\Boolean\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:26096:19)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.scss"]();
/******/ 	
/******/ })()
;