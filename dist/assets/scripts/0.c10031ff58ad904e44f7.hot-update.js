webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
	    (0, _svg4everybody2.default)();
	});
	
	// $('.search-button__btn-search').click(function() {
	//     $('.search-button__search-form').animate({ right: 0 }, 50);
	//     $('.search-button__search-popup').show();
	//     $('.search-button__search-bg').click(function() {
	//         $('.search-button__search-popup').hide();
	//         $('.search-button__search-form').animate({ right: '-100%' }, 50);
	//     });
	// });
	
	// $(document).ready(function() {
	//     $(".burger").on("click", function() {
	//         $(".burger__line").toggleClass("burger__line_active");
	//         $(".main-menu").toggleClass("main-menu_mobile");
	//         $(".main-menu__wrap").toggleClass("main-menu__wrap_mobile");
	//         $(".main-menu__link").toggleClass("main-menu__link_mobile");
	//         $(".main-menu__item").toggleClass("main-menu__item_mobile");
	//         $(".header__hg-group").toggleClass("header__hg-group_mobile");
	//     });
	// });

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(document).ready(function () {
	    (0, _jquery2.default)(".burger").on("click", function () {
	        (0, _jquery2.default)(".burger__line").toggleClass("burger__line_active");
	        (0, _jquery2.default)(".main-menu").toggleClass("main-menu_mobile");
	        (0, _jquery2.default)(".main-menu__wrap").toggleClass("main-menu__wrap_mobile");
	        (0, _jquery2.default)(".main-menu__link").toggleClass("main-menu__link_mobile");
	        (0, _jquery2.default)(".main-menu__item").toggleClass("main-menu__item_mobile");
	        (0, _jquery2.default)(".header__hg-group").toggleClass("header__hg-group_mobile");
	    });
	});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)('.search-button__btn-search').click(function () {
	    (0, _jquery2.default)('.search-button__search-form').animate({ right: 0 }, 50);
	    (0, _jquery2.default)('.search-button__search-popup').show();
	    (0, _jquery2.default)('.search-button__search-bg').click(function () {
	        (0, _jquery2.default)('.search-button__search-popup').hide();
	        (0, _jquery2.default)('.search-button__search-form').animate({ right: '-100%' }, 50);
	    });
	});

/***/ })
])
//# sourceMappingURL=0.c10031ff58ad904e44f7.hot-update.js.map