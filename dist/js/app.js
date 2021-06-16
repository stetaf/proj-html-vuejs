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
    introCounter: '0',
    introContent: {
      title: ['Contemporary Ideas', 'Trusted In-Home Tutoring', 'Learning Possibilities'],
      text: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil repellat incidunt velit eligendi nam quo voluptate soluta magni. Voluptates esse quos nesciunt alias quod?', 'Pellentesque arcu augue, pulvinar eget justo vitae, consectetur sodales quam. Mauris eu lorem cursus risus pellentesque maximus. Nulla quis nisl a urna gravida lobortis. Quisque quis magna velit. Proin ut.', 'Sed rhoncus dignissim accumsan. Mauris tristique est eu quam volutpat, sit amet imperdiet arcu efficitur. Praesent tincidunt ullamcorper mauris, eget tincidunt nisl. Ut ex metus, rutrum sed rhoncus sed, cursus.'],
      images: ["url('./dist/img/course-9-f-img.jpg')", "url('./dist/img/course-10-f-img.jpg')", "url('./dist/img/course-11-f-img.jpg')"]
    },
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
    var introSlider = setInterval(function () {
      _this.introCounter + 1 > _this.introContent.images.length - 1 ? _this.introCounter = 0 : _this.introCounter++;
      document.querySelector('header').style.backgroundImage = _this.introContent.images[_this.introCounter];
    }, 3000);
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;