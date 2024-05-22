(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Article.js":
/*!*******************************!*\
  !*** ./components/Article.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\W\\news-blog-next\\components\\Article.js";


const Article = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Sample News Title"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Sample news content goes here. This is a simple news article."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

/***/ }),

/***/ "./components/NewsCard.js":
/*!********************************!*\
  !*** ./components/NewsCard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\W\\news-blog-next\\components\\NewsCard.js";




const NewsCard = ({
  title,
  image
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      src: image,
      alt: "News Image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default()["card-content"]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsCard);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Article */ "./components/Article.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewsCard */ "./components/NewsCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\W\\news-blog-next\\pages\\index.js";





function Home() {
  const newsData = [{
    title: "Vi phạm nồng độ cồn, tài xế xe công nghệ bỏ luôn phương tiện.",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mRb8c.img?w=768&h=512&m=6&x=120&y=120&s=280&d=280"
  }, {
    title: "Hai vợ chồng bị phạt 180 triệu đồng vì gây cháy rừng",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mQCXJ.img?w=768&h=576&m=6"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "News Blog - NextJS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("header", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        children: "News Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),
      children: newsData.map((news, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_NewsCard__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: news.title,
        image: news.image
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: "\xA9 2024 News Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"custom-article": "Home_custom-article__1IBe4",
	"header": "Home_header__3vlZW",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"card": "Home_card__2SdtB",
	"card-content": "Home_card-content__32hKn"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ2xCLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU1ILENBUEQ7O0FBU0EsaUVBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFFQSxNQUFNRyxRQUFRLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxLQUFGO0FBQVNDLEVBQUFBO0FBQVQsQ0FBRCxLQUFzQjtBQUNuQyxzQkFDSTtBQUFLLGFBQVMsRUFBRUgscUVBQWhCO0FBQUEsNEJBQ0k7QUFBSyxTQUFHLEVBQUVHLEtBQVY7QUFBaUIsU0FBRyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLGVBQVMsRUFBRUgsZ0ZBQWhCO0FBQUEsNkJBQ0k7QUFBQSxrQkFBS0U7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVNILENBVkQ7O0FBWUEsaUVBQWVELFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNLLElBQVQsR0FBZ0I7QUFDM0IsUUFBTUMsUUFBUSxHQUFHLENBQ2I7QUFBRUwsSUFBQUEsS0FBSyxFQUFFLCtEQUFUO0FBQTBFQyxJQUFBQSxLQUFLLEVBQUU7QUFBakYsR0FEYSxFQUViO0FBQUVELElBQUFBLEtBQUssRUFBRSxzREFBVDtBQUFpRUMsSUFBQUEsS0FBSyxFQUFFO0FBQXhFLEdBRmEsQ0FBakI7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUgsMEVBQWhCO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQVEsZUFBUyxFQUFFQSx1RUFBbkI7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQU9JO0FBQU0sZUFBUyxFQUFFQSxxRUFBakI7QUFBQSxnQkFDS08sUUFBUSxDQUFDSSxHQUFULENBQWEsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLGtCQUNWLDhEQUFDLHlEQUFEO0FBQXNCLGFBQUssRUFBRUQsSUFBSSxDQUFDVixLQUFsQztBQUF5QyxhQUFLLEVBQUVVLElBQUksQ0FBQ1Q7QUFBckQsU0FBZVUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFZSTtBQUFRLGVBQVMsRUFBRWIsdUVBQW5CO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7Ozs7Ozs7Ozs7QUM1QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3cy1ibG9nLW5leHQvLi9jb21wb25lbnRzL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vbmV3cy1ibG9nLW5leHQvLi9jb21wb25lbnRzL05ld3NDYXJkLmpzIiwid2VicGFjazovL25ld3MtYmxvZy1uZXh0Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV3cy1ibG9nLW5leHQvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL25ld3MtYmxvZy1uZXh0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV3cy1ibG9nLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25ld3MtYmxvZy1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXJ0aWNsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgIDxoMj5TYW1wbGUgTmV3cyBUaXRsZTwvaDI+XHJcbiAgICAgICAgICAgIDxwPlNhbXBsZSBuZXdzIGNvbnRlbnQgZ29lcyBoZXJlLiBUaGlzIGlzIGEgc2ltcGxlIG5ld3MgYXJ0aWNsZS48L3A+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IE5ld3NDYXJkID0gKHsgdGl0bGUsIGltYWdlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJOZXdzIEltYWdlXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjYXJkLWNvbnRlbnQnXX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzQ2FyZDtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IE5ld3NDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3c0NhcmQnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgbmV3c0RhdGEgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogXCJWaSBwaOG6oW0gbuG7k25nIMSR4buZIGPhu5NuLCB0w6BpIHjhur8geGUgY8O0bmcgbmdo4buHIGLhu48gbHXDtG4gcGjGsMahbmcgdGnhu4duLlwiLCBpbWFnZTogXCJodHRwczovL2ltZy1zLW1zbi1jb20uYWthbWFpemVkLm5ldC90ZW5hbnQvYW1wL2VudGl0eWlkL0JCMW1SYjhjLmltZz93PTc2OCZoPTUxMiZtPTYmeD0xMjAmeT0xMjAmcz0yODAmZD0yODBcIiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwiSGFpIHbhu6MgY2jhu5NuZyBi4buLIHBo4bqhdCAxODAgdHJp4buHdSDEkeG7k25nIHbDrCBnw6J5IGNow6F5IHLhu6tuZ1wiLCBpbWFnZTogXCJodHRwczovL2ltZy1zLW1zbi1jb20uYWthbWFpemVkLm5ldC90ZW5hbnQvYW1wL2VudGl0eWlkL0JCMW1RQ1hKLmltZz93PTc2OCZoPTU3NiZtPTZcIiB9LFxyXG4gICAgICAgIFxyXG4gICAgXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5OZXdzIEJsb2cgLSBOZXh0SlM8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMT5OZXdzIEJsb2c8L2gxPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICB7bmV3c0RhdGEubWFwKChuZXdzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXdzQ2FyZCBrZXk9e2luZGV4fSB0aXRsZT17bmV3cy50aXRsZX0gaW1hZ2U9e25ld3MuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICA8cD4mY29weTsgMjAyNCBOZXdzIEJsb2c8L3A+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJjdXN0b20tYXJ0aWNsZVwiOiBcIkhvbWVfY3VzdG9tLWFydGljbGVfXzFJQmU0XCIsXG5cdFwiaGVhZGVyXCI6IFwiSG9tZV9oZWFkZXJfXzN2bFpXXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImNhcmQtY29udGVudFwiOiBcIkhvbWVfY2FyZC1jb250ZW50X18zMmhLblwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQXJ0aWNsZSIsIlJlYWN0Iiwic3R5bGVzIiwiTmV3c0NhcmQiLCJ0aXRsZSIsImltYWdlIiwiY2FyZCIsIkhlYWQiLCJIb21lIiwibmV3c0RhdGEiLCJjb250YWluZXIiLCJoZWFkZXIiLCJtYWluIiwibWFwIiwibmV3cyIsImluZGV4IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==