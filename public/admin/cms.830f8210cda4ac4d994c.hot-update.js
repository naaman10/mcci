webpackHotUpdate("cms",{

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: IndexPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Feature */ "./src/components/Feature.js");
/* harmony import */ var _components_Credits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Credits */ "./src/components/Credits.js");
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Quote */ "./src/components/Quote.js");
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Video */ "./src/components/Video.js");
/* harmony import */ var _components_Friends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Friends */ "./src/components/Friends.js");
/* harmony import */ var _components_HomepageHero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HomepageHero */ "./src/components/HomepageHero.js");
/* harmony import */ var _components_FullWidthImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FullWidthImage */ "./src/components/FullWidthImage.js");

var _jsxFileName = "/Users/naamanhudson/Downloads/coffee-4-craig-website-master/src/templates/index-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};











var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var homepageHero = _ref.homepageHero,
      fullWidthImage = _ref.fullWidthImage,
      quote = _ref.quote,
      video = _ref.video,
      feature = _ref.feature,
      friends = _ref.friends,
      credits = _ref.credits;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HomepageHero__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, homepageHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FullWidthImage__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, fullWidthImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Quote__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, quote, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Video__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, video, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Feature__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, feature, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Friends__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, friends, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Credits__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, credits, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IndexPageTemplate, {
    homepageHero: frontmatter.homepageHero,
    fullWidthImage: frontmatter.fullWidthImage,
    quote: frontmatter.quote,
    video: frontmatter.video,
    feature: frontmatter.feature,
    friends: frontmatter.friends,
    credits: frontmatter.credits,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "779164878";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "/Users/naamanhudson/Downloads/coffee-4-craig-website-master/src/templates/index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "/Users/naamanhudson/Downloads/coffee-4-craig-website-master/src/templates/index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/naamanhudson/Downloads/coffee-4-craig-website-master/src/templates/index-page.js");
  reactHotLoader.register(_default, "default", "/Users/naamanhudson/Downloads/coffee-4-craig-website-master/src/templates/index-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.830f8210cda4ac4d994c.hot-update.js.map