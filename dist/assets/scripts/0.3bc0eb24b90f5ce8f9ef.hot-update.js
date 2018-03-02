webpackHotUpdate(0,{

/***/ 9:
/***/ (function(module, exports) {

	'use strict';
	
	var textarea = document.querySelector('.message__field-message');
	
	textarea.addEventListener('keydown', autosize);
	
	function autosize() {
	    var el = this;
	    setTimeout(function () {
	        el.style.cssText = 'height:auto; padding:0';
	        el.style.cssText = 'height:' + el.scrollHeight + 'px';
	    }, 0);
	}

/***/ })

})
//# sourceMappingURL=0.3bc0eb24b90f5ce8f9ef.hot-update.js.map