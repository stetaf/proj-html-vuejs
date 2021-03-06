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
    reviewsContent: {
      name: ['Joan Collins', 'Jeri Gallagher', 'Nydia Leilah'],
      text: ['"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis earum iusto iure cum tenetur aspernatur quod dolorem nesciunt consectetur. In consequatur ratione cum praesentium quidem nesciunt minus aperiam reprehenderit porro laboriosam! Ut voluptatem sequi atque."', '"Proin ac ullamcorper quam. In urna enim, accumsan eget quam a, mollis auctor quam. Vestibulum mi est, porta ac felis ut, vestibulum sodales sapien. Praesent aliquam rhoncus neque nec porta. Pellentesque congue ante justo, ac."', '"Vestibulum condimentum facilisis ullamcorper. Sed pharetra diam eget metus faucibus, id rutrum magna placerat. Fusce pharetra, ipsum a lobortis feugiat, nulla nulla venenatis turpis, et euismod urna magna ac neque. Nunc imperdiet mauris vitae orci iaculis, ut aliquam libero tincidunt."'],
      images: ["./dist/img/testimonials-standard-2.png", "./dist/img/testimonials-standard-3.png", "./dist/img/testimonials-standard-4.png"]
    },
    onlineCourses: [{
      title: 'Android Developer',
      teacher: 'David Sanders',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
      students: '1',
      tag: 'programming',
      img: './dist/img/course-5-f-img.jpg',
      price: '0'
    }, {
      title: 'Web Designing',
      teacher: 'Jennifer Powell',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
      students: '1',
      tag: 'programming',
      img: './dist/img/course-6-f-img.jpg',
      price: '0'
    }, {
      title: 'Financial Modeling',
      teacher: 'Edward Bowman',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
      students: '1',
      tag: 'business',
      img: './dist/img/blog-post-2.jpg',
      price: '20'
    }, {
      title: 'Business Management',
      teacher: 'Charley Hughie',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
      students: '1',
      tag: 'business',
      img: './dist/img/course-2-f-img.jpg',
      price: '39'
    }, {
      title: 'HTML5 Coding',
      teacher: 'Talbot Garret',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
      students: '1',
      tag: 'programming',
      img: './dist/img/course-11-f-img.jpg',
      price: '0'
    }, {
      title: 'Marketing Fundamentals',
      teacher: 'Barnaby Roscoe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
      students: '1',
      tag: 'business',
      img: './dist/img/course-9-f-img.jpg',
      price: '19'
    }, {
      title: 'Animation 101',
      teacher: 'Zackary Matthew',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
      students: '1',
      tag: 'programming',
      img: './dist/img/course-3-f-img.jpg',
      price: '0'
    }, {
      title: 'Budgeting Rules',
      teacher: 'Martin Dallas',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
      students: '1',
      tag: 'business',
      img: './dist/img/blog-post-5.jpg',
      price: '59'
    }, {
      title: 'Learn-by-Doing',
      teacher: 'Milburn Ern',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti inventore unde pariatur vitae ipsa expedita earum explicabo esse sed?',
      students: '1',
      tag: 'business',
      img: './dist/img/blog-post-1.jpg',
      price: '20'
    }],
    currPoss: {
      title: 'Learning Possibilities',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti sunt at placeat accusamus ipsam suscipit delectus ipsum officiis animi harum hic, eum, voluptatem quisquam consequuntur, reiciendis ex ullam. Eum?',
      list: ['We enrich lives through learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training', 'People teach. People learn. This is where they connect.'],
      img: './dist/img/h12-tabs-icon-1.png'
    },
    possibilities: [{
      title: 'Learning Possibilities',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti sunt at placeat accusamus ipsam suscipit delectus ipsum officiis animi harum hic, eum, voluptatem quisquam consequuntur, reiciendis ex ullam. Eum?',
      list: ['We enrich lives through learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training', 'People teach. People learn. This is where they connect.'],
      img: './dist/img/h12-tabs-icon-1.png'
    }, {
      title: 'Degree Program',
      text: 'Cras molestie sapien eu ante ornare, quis eleifend augue consectetur. Proin in justo eu orci vestibulum pulvinar ut a odio. Mauris diam augue, malesuada fringilla orci ut, egestas imperdiet purus. Curabitur euismod odio et ante.',
      list: ['Sed eu congue tortor, at posuere eros. Nam rhoncus nunc.We enrich lives through learning.', 'Nam sollicitudin tempus leo, ut placerat sapien semper sed. Mauris.', 'Aliquam non condimentum metus. Duis sit amet volutpat enim. Duis.', 'Suspendisse eget mattis mauris. Sed aliquet velit nisi. Maecenas hendrerit.'],
      img: './dist/img/h12-tabs-icon-2.png'
    }, {
      title: 'Career Achievements',
      text: 'In ultrices nibh lorem, sagittis egestas nulla vehicula et. In mattis est a sem faucibus, at interdum felis consequat. Vivamus urna sem, egestas in tincidunt.',
      list: ['Pellentesque in lectus sit amet risus sodales imperdiet aliquam vitae.', 'In mattis efficitur risus sit amet commodo. Fusce nisi lacus.', 'Nunc ultricies risus eget porttitor vestibulum. Nunc varius fermentum libero.', 'Fusce ultricies ex lorem, in ullamcorper elit ultrices eu. Praesent.'],
      img: './dist/img/h12-tabs-icon-3.png'
    }, {
      title: 'Personal Management',
      text: 'Donec dapibus odio eget aliquam varius. Fusce elementum risus vel ligula vulputate pellentesque. Nunc porttitor, ex nec luctus bibendum, mauris turpis sollicitudin est, id malesuada.',
      list: ['Vestibulum eget quam felis. Nullam placerat lectus ipsum, et dapibus.', 'Suspendisse nibh metus, condimentum ac pulvinar bibendum, vulputate rutrum magna.', 'Interdum et malesuada fames ac ante ipsum primis in faucibus.', 'Etiam nec libero rhoncus, vestibulum justo et, tempor nunc. Morbi.'],
      img: './dist/img/h12-tabs-icon-4.png'
    }, {
      title: 'Steps To Success',
      text: 'Sed sit amet tempor risus. Sed in ipsum id dolor sollicitudin sagittis ac eu lacus. Vestibulum maximus lacinia sem et bibendum. Donec vel suscipit nisi.',
      list: ['Maecenas luctus magna ac aliquam lobortis. Donec tortor enim, suscipit.', 'Vestibulum pretium nisi posuere nibh euismod, id pulvinar lacus convallis.', 'Phasellus tincidunt bibendum laoreet. Ut scelerisque lectus interdum, sollicitudin turpis.', 'Cras eleifend varius tincidunt. Integer eget elit lacus. Pellentesque mollis.'],
      img: './dist/img/h12-tabs-icon-5.png'
    }, {
      title: 'Knowledge Transfer',
      text: 'Donec gravida in nisl a feugiat. Vivamus porta cursus ligula, eget pretium sem consectetur sit amet. Nulla facilisi. Ut a dui consequat, dictum lacus nec.',
      list: ['Sed malesuada interdum augue laoreet lobortis. Aliquam dapibus nulla libero.', 'Phasellus ligula dui, malesuada vel rutrum sit amet, cursus quis.', 'Ut pretium purus sed euismod sodales. Integer nec felis mi.', 'Phasellus vel laoreet lectus. Vestibulum commodo vulputate vestibulum. Vivamus eget.'],
      img: './dist/img/h12-tabs-icon-6.png'
    }],
    poss: '0',
    scrolled: false
  },
  methods: {
    /**
     * ### scrollUp
     * Scrolls the window object to X:Y [0:0]
     */
    scrollUp: function scrollUp() {
      window.scrollTo(0, 0);
    },

    /**
     * ### getCartItems
     * Returns the amount of items in the shopping cart
     * @returns number of cartItems
     */
    getCartItems: function getCartItems() {
      return this.cartItems;
    },

    /**
     * ### changePoss
     * Change the current possibilities screen
     * @param {Number} id 
     */
    changePoss: function changePoss(id) {
      this.currPoss = this.possibilities[id];
      this.poss = id;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Adds an event listener to catch the scroll action and show/hide the scroll-top button
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        _this.scrolled = true;
      } else if (window.scrollY < 400) {
        _this.scrolled = false;
      }
    }); // Handles the counter for the multiple slider in the website, and changes the header background-image accordingly

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