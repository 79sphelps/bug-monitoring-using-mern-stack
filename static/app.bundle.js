/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/Client.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/Client.jsx":
/*!***************************!*\
  !*** ./client/Client.jsx ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Routes_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Routes.jsx */ "./src/Routes.jsx");
/* harmony import */ var _src_ContextWrapper_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/ContextWrapper.jsx */ "./src/ContextWrapper.jsx");
//import 'babel-polyfill';





 // import HelloWorld from '../src/HelloWorld.jsx';

var WrappedApp = function WrappedApp(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ContextWrapper_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], props, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Router"], {
    history: react_router__WEBPACK_IMPORTED_MODULE_3__["browserHistory"]
  }, _src_Routes_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]));
};

var contentNode = document.getElementById('contents'); //ReactDOM.render(<HelloWorld />, contentNode);
//ReactDOM.render(<HelloWorld {...window.__INITIAL_STATE__} />, contentNode);

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedApp, {
  initialState: window.__INITIAL_STATE__
}), contentNode);

if (false) {}

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.jsx */ "./src/Header.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

//import 'babel-polyfill';


/*
import ReactDOM from "react-dom";
import {
  Router,
  Route,
  Redirect,
  browserHistory,
  withRouter
} from "react-router";
*/
//import { Route, Redirect, HashRouter, Switch, withRouter, BrowserRouter } from 'react-router-dom';

/*
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
*/

 //import IssueList from "./IssueList.jsx";
//import IssueEdit from "./IssueEdit.jsx";
//import IssueAddNavItem from './IssueAddNavItem.jsx';
//import withToast from './withToast.jsx';
//const contentNode = document.getElementById("contents");
//const continents = ['Africa','America','Asia','Australia','Europe', 'Oregon'];
//const message = continents.map(c => `Hello ${c}!`).join(' ');
//const component = <p>{message}</p>;           // A simple component, written in JSX
//ReactDOM.render(component, contentNode);      // Render the component inside the content Node
//ReactDOM.render(<IssueList />, contentNode); // Render the component inside the content Node
//const NoMatch = () => <p>Page Not Found</p>;

/*
const Header = (props) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/issues">
        <NavItem>Issues</NavItem>
      </LinkContainer>
      <LinkContainer to="/reports">
        <NavItem>Reports</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <IssueAddNavItem showError={props.showError} />
      <NavDropdown
        id="user-dropdown"
        title={<Glyphicon glyph="option-horizontal" />}
        noCaret
      >
        <MenuItem>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

Header.propTypes = {
  showError: PropTypes.func.isRequired,
};

const HeaderWithToast = withToast(Header);
*/


/*
const App = props => (
  <div>
    <div className="header">
      <h1>Issue Tracker</h1>
    </div>
    <Header />
    <div className="container-fluid">
      {props.children}
      <hr />
      <h5>
        <small>
          Full source code available at this{" "}
          <a href="https://github.com/vasansr/pro-mern-stack">
            GitHub repository
          </a>
          .
        </small>
      </h5>
    </div>
  </div>
);
*/

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  _createClass(App, null, [{
    key: "dataFetcher",
    value: function dataFetcher(_ref) {
      var urlBase = _ref.urlBase,
          cookie = _ref.cookie;
      var headers = cookie ? {
        headers: {
          Cookie: cookie
        }
      } : null;
      return fetch("".concat(urlBase || '', "/api/users/me"), headers).then(function (response) {
        if (!response.ok) return response.json().then(function (error) {
          return Promise.reject(error);
        });
        return response.json().then(function (data) {
          return {
            App: data
          };
        });
      });
    }
  }]);

  function App(props, context) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props, context));
    var user = context.initialState.App ? context.initialState.App : {};
    _this.state = {
      //user: { signedIn: false, name: '' },
      user: user
    };
    _this.onSignin = _this.onSignin.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSignout = _this.onSignout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      App.dataFetcher({}).then(function (data) {
        var user = data.App;

        _this2.setState({
          user: user
        });
      });
    }
  }, {
    key: "onSignin",
    value: function onSignin(name) {
      this.setState({
        user: {
          signedIn: true,
          name: name
        }
      });
    }
  }, {
    key: "onSignout",
    value: function onSignout() {
      this.setState({
        user: {
          signedIn: false,
          name: ''
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var childrenWithUser = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(this.props.children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, {
          user: _this3.state.user
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        user: this.state.user,
        onSignin: this.onSignin,
        onSignout: this.onSignout
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container-fluid"
      }, childrenWithUser, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "Full source code available at this ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/vasansr/pro-mern-stack"
      }, "GitHub repository"), "."))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


App.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired //children: React.PropTypes.object.isRequired,

};
App.contextTypes = {
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

/***/ }),

/***/ "./src/ContextWrapper.jsx":
/*!********************************!*\
  !*** ./src/ContextWrapper.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContextWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ContextWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContextWrapper, _React$Component);

  function ContextWrapper() {
    _classCallCheck(this, ContextWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContextWrapper).apply(this, arguments));
  }

  _createClass(ContextWrapper, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        initialState: this.props.initialState
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ContextWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


ContextWrapper.childContextTypes = {
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
ContextWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/DateInput.jsx":
/*!***************************!*\
  !*** ./src/DateInput.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var DateInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateInput).call(this, props));
    _this.state = {
      value: _this.editFormat(props.value),
      focused: false,
      valid: true
    };
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DateInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.value !== this.props.value) {
        this.setState({
          value: this.editFormat(newProps.value)
        });
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var value = this.unformat(this.state.value);
      var valid = this.state.value === '' || value != null;

      if (valid !== this.state.valid && this.props.onValidityChange) {
        this.props.onValidityChange(e, valid);
      }

      this.setState({
        focused: false,
        valid: valid
      });
      if (valid) this.props.onChange(e, value);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value.match(/^[\d-]*$/)) {
        this.setState({
          value: e.target.value
        });
      }
    }
  }, {
    key: "displayFormat",
    value: function displayFormat(date) {
      return date != null ? date.toDateString() : '';
    }
  }, {
    key: "editFormat",
    value: function editFormat(date) {
      return date != null ? date.toISOString().substr(0, 10) : '';
    }
  }, {
    key: "unformat",
    value: function unformat(str) {
      var val = new Date(str);
      return isNaN(val.getTime()) ? null : val;
    }
  }, {
    key: "render",
    value: function render() {
      //const className = (!this.state.valid && !this.state.focused) ? 'invalid' : null;
      var value = this.state.focused || !this.state.valid ? this.state.value : this.displayFormat(this.props.value);
      var childProps = Object.assign({}, this.props);
      delete childProps.onValidityChange;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
        type: "text"
      }, childProps, {
        value: value,
        placeholder: this.state.focused ? 'yyyy-mm-dd' : null,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange
      }));
    }
  }]);

  return DateInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


DateInput.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onValidityChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./src/Header.jsx":
/*!************************!*\
  !*** ./src/Header.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/lib/Select.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _IssueAddNavItem_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IssueAddNavItem.jsx */ "./src/IssueAddNavItem.jsx");
/* harmony import */ var _SigninNavItem_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SigninNavItem.jsx */ "./src/SigninNavItem.jsx");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");










var Header = function Header(props) {
  function searchIssues(input) {
    var _this = this;

    if (input.length < 2) return Promise.resolve({
      options: []
    });
    return fetch("/api/issues?search=".concat(input)).then(function (response) {
      if (!response.ok) return response.json().then(function (error) {
        return Promise.reject(error);
      });
      return response.json().then(function (data) {
        var options = data.records.map(function (issue) {
          return {
            value: issue._id,
            label: "".concat(issue._id.substr(-4), ": ").concat(issue.title)
          };
        });
        return {
          options: options
        };
      }).catch(function (error) {
        _this.props.showError("Error fetching data from server: ".concat(error));
      });
    });
  }

  function filterOptions(options) {
    return options;
  }

  function selectIssue(item) {
    if (item) props.router.push("/issues/".concat(item.value));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, null, "Issue Tracker")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__["LinkContainer"], {
    to: "/issues"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, "Issues")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__["LinkContainer"], {
    to: "/reports"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, "Reports")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4___default.a.Async, {
    instanceId: "search",
    placeholder: "Search ...",
    autoload: false,
    cache: false,
    loadOptions: searchIssues,
    filterOptions: filterOptions,
    onChange: selectIssue
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 3
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    pullRight: true
  }, props.user.signedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueAddNavItem_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    showError: props.showError
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SigninNavItem_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: props.user,
    onSignin: props.onSignin,
    onSignout: props.onSignout,
    showError: props.showError,
    showSuccess: props.showSuccess
  }))));
};

Header.propTypes = {
  showError: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  showSuccess: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  onSignin: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  onSignout: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  router: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(_withToast_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])(Header)));

/***/ }),

/***/ "./src/IssueAddNavItem.jsx":
/*!*********************************!*\
  !*** ./src/IssueAddNavItem.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 //import Toast from "./Toast.jsx";



var IssueAddNavItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueAddNavItem, _React$Component);

  function IssueAddNavItem(props) {
    var _this;

    _classCallCheck(this, IssueAddNavItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueAddNavItem).call(this, props));
    _this.state = {
      showing: false //toastVisible: false,
      //toastMessage: "",
      //toastType: "success"

    };
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.hideModal = _this.hideModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submit = _this.submit.bind(_assertThisInitialized(_assertThisInitialized(_this))); //this.showError = this.showError.bind(this);
    //this.dismissToast = this.dismissToast.bind(this);

    return _this;
  }

  _createClass(IssueAddNavItem, [{
    key: "showModal",
    value: function showModal() {
      this.setState({
        showing: true
      });
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.setState({
        showing: false
      });
    }
    /*
    showError(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: "danger"
      });
    }
      dismissToast() {
      this.setState({ toastVisible: false });
    }
    */

  }, {
    key: "submit",
    value: function submit(e) {
      var _this2 = this;

      e.preventDefault();
      this.hideModal();
      var form = document.forms.issueAdd;
      var newIssue = {
        owner: form.owner.value,
        title: form.title.value,
        status: "New",
        created: new Date()
      };
      fetch("/api/issues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newIssue)
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (updatedIssue) {
            _this2.props.router.push("/issues/".concat(updatedIssue._id));
          });
        } else {
          response.json().then(function (error) {
            _this2.props.showError("Failed to add issue: ".concat(error.message));
          });
        }
      }).catch(function (err) {
        _this2.props.showError("Error in sending data to server: ".concat(err.message));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        onClick: this.showModal
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Glyphicon"], {
        glyph: "plus"
      }), " Create Issue", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        keyboard: true,
        show: this.state.showing,
        onHide: this.hideModal
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        closeButton: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, null, "Create Issue")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        name: "issueAdd"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ControlLabel"], null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
        name: "title",
        autoFocus: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ControlLabel"], null, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
        name: "owner"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "button",
        bsStyle: "primary",
        onClick: this.submit
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        bsStyle: "link",
        onClick: this.hideModal
      }, "Cancel")))));
    }
  }]);

  return IssueAddNavItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

IssueAddNavItem.propTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  showError: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(IssueAddNavItem));

/***/ }),

/***/ "./src/IssueEdit.jsx":
/*!***************************!*\
  !*** ./src/IssueEdit.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NumInput_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumInput.jsx */ "./src/NumInput.jsx");
/* harmony import */ var _DateInput_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateInput.jsx */ "./src/DateInput.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 //import { Link } from "react-router";
//import { Link } from 'react-router-dom'

 //import Toast from "./Toast.jsx";





 //export default class IssueEdit extends React.Component {

var IssueEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueEdit, _React$Component);

  _createClass(IssueEdit, null, [{
    key: "dataFetcher",
    value: function dataFetcher(_ref) {
      var params = _ref.params,
          urlBase = _ref.urlBase;
      return fetch("".concat(urlBase || "", "/api/issues/").concat(params.id)).then(function (response) {
        if (!response.ok) return response.json().then(function (error) {
          return Promise.reject(error);
        });
        return response.json().then(function (data) {
          return {
            IssueEdit: data
          };
        });
      });
    }
  }]);

  function IssueEdit(props, context) {
    var _this;

    _classCallCheck(this, IssueEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueEdit).call(this, props, context));
    /*
    const issue = context.initialState.data;
    issue.created = new Date(issue.created);
    issue.completionDate = issue.completionDate != null ?
      new Date(issue.completionDate) : null;
    */

    var issue;

    if (context.initialState.IssueEdit) {
      issue = context.initialState.IssueEdit;
      issue.created = new Date(issue.created);
      issue.completionDate = issue.completionDate != null ? new Date(issue.completionDate) : null;
    } else {
      issue = {
        _id: "",
        title: "",
        status: "",
        owner: "",
        effort: null,
        completionDate: null,
        created: null
      };
    }

    _this.state = {
      /*
      issue: {
        _id: "",
        title: "",
        status: "",
        owner: "",
        effort: null,
        completionDate: null,
        created: null
      },
      */
      issue: issue,
      invalidFields: {},
      //toastVisible: false,
      //toastMessage: "",
      //toastType: "success",
      showingValidation: false
    };
    _this.dismissValidation = _this.dismissValidation.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.showValidation = _this.showValidation.bind(_assertThisInitialized(_assertThisInitialized(_this))); //this.showSuccess = this.showSuccess.bind(this);
    //this.showError = this.showError.bind(this);
    //this.dismissToast = this.dismissToast.bind(this);

    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onValidityChange = _this.onValidityChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(IssueEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.params.id !== this.props.params.id) {
        this.loadData();
      }
    }
    /*
    onChange(event) {
      const issue = Object.assign({}, this.state.issue);
      issue[event.target.name] = event.target.value;
      this.setState({ issue });
    }
    */

  }, {
    key: "onChange",
    value: function onChange(event, convertedValue) {
      var issue = Object.assign({}, this.state.issue); //issue[event.target.name] = event.target.value;

      var value = convertedValue !== undefined ? convertedValue : event.target.value;
      issue[event.target.name] = value;
      this.setState({
        issue: issue
      });
    }
  }, {
    key: "onValidityChange",
    value: function onValidityChange(event, valid) {
      var invalidFields = Object.assign({}, this.state.invalidFields);

      if (!valid) {
        invalidFields[event.target.name] = true;
      } else {
        delete invalidFields[event.target.name];
      }

      this.setState({
        invalidFields: invalidFields
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      this.showValidation();

      if (Object.keys(this.state.invalidFields).length !== 0) {
        return;
      }

      fetch("/api/issues/".concat(this.props.params.id), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.issue)
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (updatedIssue) {
            updatedIssue.created = new Date(updatedIssue.created);

            if (updatedIssue.completionDate) {
              updatedIssue.completionDate = new Date(updatedIssue.completionDate);
            }

            _this2.setState({
              issue: updatedIssue
            }); //alert("Updated issue successfully.");


            _this2.props.showSuccess("Updated issue successfully.");
          });
        } else {
          response.json().then(function (error) {
            //alert(`Failed to update issue: ${error.message}`);
            _this2.props.showError("Failed to update issue: ".concat(error.message));
          });
        }
      }).catch(function (err) {
        //alert(`Error in sending data to server: ${err.message}`);
        _this2.props.showError("Error in sending data to server: ".concat(err.message));
      });
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      /*
      fetch(`/api/issues/${this.props.params.id}`)
        .then(response => {
          if (response.ok) {
            response.json().then(issue => {
              issue.created = new Date(issue.created);
              issue.completionDate =
                issue.completionDate != null
                  ? new Date(issue.completionDate)
                  : null;
              //issue.effort = issue.effort != null ? issue.effort.toString() : '';
              this.setState({ issue });
            });
          } else {
            response.json().then(error => {
              //alert(`Failed to fetch issue: ${error.message}`);
              this.showError(`Failed to fetch issue: ${error.message}`);
            });
          }
        })
        .catch(err => {
          //alert(`Error in fetching data from server: ${err.message}`);
          this.showError(`Error in fetching data from server: ${err.message}`);
        });
      */
      IssueEdit.dataFetcher({
        params: this.props.params
      }).then(function (data) {
        var issue = data.IssueEdit;
        issue.created = new Date(issue.created);
        issue.completionDate = issue.completionDate != null ? new Date(issue.completionDate) : null;

        _this3.setState({
          issue: issue
        });
      }).catch(function (err) {
        _this3.props.showError("Error in fetching data from server: ".concat(err.message));
      });
    }
  }, {
    key: "showValidation",
    value: function showValidation() {
      this.setState({
        showingValidation: true
      });
    }
  }, {
    key: "dismissValidation",
    value: function dismissValidation() {
      this.setState({
        showingValidation: false
      });
    }
    /*
    showSuccess(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: "success"
      });
    }
      showError(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: "danger"
      });
    }
      dismissToast() {
      this.setState({ toastVisible: false });
    }
    */

  }, {
    key: "render",
    value: function render() {
      var issue = this.state.issue;
      /*
      const validationMessage =
        Object.keys(this.state.invalidFields).length === 0 ? null : (
          <div className="error">
            Please correct invalid fields before submitting.
          </div>
        );
      */

      var validationMessage = null;

      if (Object.keys(this.state.invalidFields).length !== 0 && this.state.showingValidation) {
        validationMessage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
          bsStyle: "danger",
          onDismiss: this.dismissValidation
        }, "Please correct invalid fields before submitting.");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
        header: "Edit Issue"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        horizontal: true,
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"],
        sm: 3
      }, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        sm: 9
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"].Static, null, issue._id))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"],
        sm: 3
      }, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        sm: 9
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"].Static, null, issue.created ? issue.created.toDateString() : ""))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"],
        sm: 3
      }, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        sm: 9
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
        componentClass: "select",
        name: "status",
        value: issue.status,
        onChange: this.onChange
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "New"
      }, "New"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Open"
      }, "Open"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Assigned"
      }, "Assigned"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Fixed"
      }, "Fixed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Verified"
      }, "Verified"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Closed"
      }, "Closed")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"],
        sm: 3
      }, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        sm: 9
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
        name: "owner",
        value: issue.owner,
        onChange: this.onChange
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"],
        sm: 3
      }, "Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        sm: 9
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
        componentClass: _NumInput_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],
        name: "effort",
        value: issue.effort,
        onChange: this.onChange
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
        validationState: this.state.invalidFields.completionDate ? "error" : null
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"],
        sm: 3
      }, "Completion Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        sm: 9
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
        componentClass: _DateInput_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],
        name: "completionDate",
        value: issue.completionDate,
        onChange: this.onChange,
        onValidityChange: this.onValidityChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"].Feedback, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"],
        sm: 3
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        sm: 9
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
        name: "title",
        value: issue.title,
        onChange: this.onChange
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        smOffset: 3,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        bsStyle: "primary",
        type: "submit",
        disabled: !this.props.user.signedIn
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_4__["LinkContainer"], {
        to: "/issues"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        bsStyle: "link"
      }, "Back"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        smOffset: 3,
        sm: 9
      }, validationMessage))));
    }
  }]);

  return IssueEdit;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

IssueEdit.propTypes = {
  params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  showSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
IssueEdit.contextTypes = {
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
var IssueEditWithToast = Object(_withToast_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])(IssueEdit);
IssueEditWithToast.dataFetcher = IssueEdit.dataFetcher;
/* harmony default export */ __webpack_exports__["default"] = (IssueEditWithToast);

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 //import { Link } from 'react-router-dom'




var IssueFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter(props) {
    var _this;

    _classCallCheck(this, IssueFilter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).call(this, props));
    _this.state = {
      status: props.initFilter.status || '',
      effort_gte: props.initFilter.effort_gte || '',
      effort_lte: props.initFilter.effort_lte || '',
      changed: false
    };
    _this.onChangeStatus = _this.onChangeStatus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeEffortGte = _this.onChangeEffortGte.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeEffortLte = _this.onChangeEffortLte.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.applyFilter = _this.applyFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.resetFilter = _this.resetFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearFilter = _this.clearFilter.bind(_assertThisInitialized(_assertThisInitialized(_this))); //this.setFilterOpen = this.setFilterOpen.bind(this);
    //this.setFilterAssigned = this.setFilterAssigned.bind(this);

    return _this;
  }
  /*
  setFilterOpen(e) {
    e.preventDefault();
    this.props.setFilter({ status: 'Open' });
  }
  */


  _createClass(IssueFilter, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        status: newProps.initFilter.status || '',
        effort_gte: newProps.initFilter.effort_gte || '',
        effort_lte: newProps.initFilter.effort_lte || '',
        changed: false
      });
    }
    /*
    setFilterAssigned(e) {
      e.preventDefault();
      this.props.setFilter({ status: 'Assigned' });
    }
    */

  }, {
    key: "onChangeStatus",
    value: function onChangeStatus(e) {
      this.setState({
        status: e.target.value,
        changed: true
      });
    }
  }, {
    key: "onChangeEffortGte",
    value: function onChangeEffortGte(e) {
      var effortString = e.target.value;

      if (effortString.match(/^\d*$/)) {
        this.setState({
          effort_gte: e.target.value,
          changed: true
        });
      }
    }
  }, {
    key: "onChangeEffortLte",
    value: function onChangeEffortLte(e) {
      var effortString = e.target.value;

      if (effortString.match(/^\d*$/)) {
        this.setState({
          effort_lte: e.target.value,
          changed: true
        });
      }
    }
  }, {
    key: "applyFilter",
    value: function applyFilter() {
      var newFilter = {};
      if (this.state.status) newFilter.status = this.state.status;
      if (this.state.effort_gte) newFilter.effort_gte = this.state.effort_gte;
      if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
      this.props.setFilter(newFilter);
    }
  }, {
    key: "clearFilter",
    value: function clearFilter() {
      this.props.setFilter({});
    }
    /*
    clearFilter(e) {
      e.preventDefault();
      this.props.setFilter({});
    }
    */

  }, {
    key: "resetFilter",
    value: function resetFilter() {
      this.setState({
        status: this.props.initFilter.status || '',
        effort_gte: this.props.initFilter.effort_gte || '',
        effort_lte: this.props.initFilter.effort_lte || '',
        changed: false
      });
    } // eslint-disable-line

  }, {
    key: "render",
    value: function render() {
      //const Separator = () => <span> | </span>;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ControlLabel"], null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
        componentClass: "select",
        value: this.state.status,
        onChange: this.onChangeStatus
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ""
      }, "(Any)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "New"
      }, "New"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Open"
      }, "Open"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Assigned"
      }, "Assigned"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Fixed"
      }, "Fixed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Verified"
      }, "Verified"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Closed"
      }, "Closed")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ControlLabel"], null, "Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
        value: this.state.effort_gte,
        onChange: this.onChangeEffortGte
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Addon, null, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
        value: this.state.effort_lte,
        onChange: this.onChangeEffortLte
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ControlLabel"], null, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        bsStyle: "primary",
        onClick: this.applyFilter
      }, "Apply"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.resetFilter,
        disabled: !this.state.changed
      }, "Reset"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.clearFilter
      }, "Clear")))));
    }
  }]);

  return IssueFilter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


IssueFilter.propTypes = {
  setFilter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  initFilter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 //import "whatwg-fetch";


 //import { Link } from 'react-router-dom'

 //import ReactDOM from 'react-dom';
//import { Route, Redirect, HashRouter, Switch, withRouter, BrowserRouter } from 'react-router-dom';
//import IssueAdd from "./IssueAdd.jsx";

 //import Toast from "./Toast.jsx";



/*
const IssueRow = (props) => (
  <tr>
    <td><Link to={`/issues/${props.issue._id}`}>{props.issue._id.substr(-4)}</Link></td>
    <td>{props.issue.status}</td>
    <td>{props.issue.owner}</td>
    <td>{props.issue.created.toDateString()}</td>
    <td>{props.issue.effort}</td>
    <td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
    <td>{props.issue.title}</td>
  </tr>
);
*/

var IssueRow = function IssueRow(props) {
  function onDeleteClick() {
    props.deleteIssue(props.issue._id);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/issues/".concat(props.issue._id)
  }, props.issue._id.substr(-4))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.issue.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.issue.owner), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.issue.created.toDateString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.issue.effort), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.issue.completionDate ? props.issue.completionDate.toDateString() : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.issue.title), props.deleteIssue ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    bsSize: "xsmall",
    onClick: onDeleteClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Glyphicon"], {
    glyph: "trash"
  }))) : null);
};

IssueRow.propTypes = {
  //issue: React.PropTypes.object.isRequired,
  issue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  deleteIssue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};

function IssueTable(props) {
  //const issueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />)
  var issueRows = props.issues.map(function (issue) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueRow, {
      key: issue._id,
      issue: issue,
      deleteIssue: props.deleteIssue
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    bordered: true,
    condensed: true,
    hover: true,
    responsive: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Completion Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"), props.deleteIssue ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null) : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, issueRows));
}

IssueTable.propTypes = {
  //issues: React.PropTypes.array.isRequired,
  issues: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  deleteIssue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
var PAGE_SIZE = 10; //export default class IssueList extends React.Component {

var IssueList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueList, _React$Component);

  _createClass(IssueList, null, [{
    key: "dataFetcher",
    value: function dataFetcher(_ref) {
      var urlBase = _ref.urlBase,
          location = _ref.location;

      /*
      return fetch(`${urlBase || ""}/api/issues${location.search}`).then(
        response => {
          if (!response.ok)
            return response.json().then(error => Promise.reject(error));
          return response.json().then(data => ({ IssueList: data }));
        }
      );
      */
      var query = Object.assign({}, location.query);
      var pageStr = query._page;

      if (pageStr) {
        delete query._page;
        query._offset = (parseInt(pageStr, 10) - 1) * PAGE_SIZE;
      }

      query._limit = PAGE_SIZE;
      var search = Object.keys(query).map(function (k) {
        return "".concat(k, "=").concat(query[k]);
      }).join("&");
      return fetch("".concat(urlBase || "", "/api/issues?").concat(search)).then(function (response) {
        if (!response.ok) return response.json().then(function (error) {
          return Promise.reject(error);
        });
        return response.json().then(function (data) {
          return {
            IssueList: data
          };
        });
      });
    }
  }]);

  function IssueList(props, context) {
    var _this;

    _classCallCheck(this, IssueList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this, props, context)); //const issues = context.initialState.data.records;

    /*
    const issues = context.initialState.IssueList
      ? context.initialState.IssueList.records
      : [];
    */

    var data = context.initialState.IssueList ? context.initialState.IssueList : {
      metadata: {
        totalCount: 0
      },
      records: []
    };
    var issues = data.records;
    issues.forEach(function (issue) {
      issue.created = new Date(issue.created);

      if (issue.completionDate) {
        issue.completionDate = new Date(issue.completionDate);
      }
    }); //this.state = { issues: [] };

    _this.state = {
      //issues: [],
      issues: issues,
      //toastVisible: false,
      //toastMessage: "",
      //toastType: "success",
      totalCount: data.metadata.totalCount
    }; //this.createIssue = this.createIssue.bind(this);

    _this.setFilter = _this.setFilter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.selectPage = _this.selectPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.deleteIssue = _this.deleteIssue.bind(_assertThisInitialized(_assertThisInitialized(_this))); //this.showError = this.showError.bind(this);
    //this.dismissToast = this.dismissToast.bind(this);

    return _this;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
    /*
    Writing in es6 and using react 0.14.6 / react-router 2.0.0-rc5. 
    I use this command to lookup the query params in my components:
      this.props.location.query
    It creates a hash of all available query params in the url.
      Update:
    For React-Router v4, see this answer. 
    Basically, use this.props.location.search to get the query string, and parse with the query-string package or URLSearchParams -
      const params = new URLSearchParams(paramsString); 
    const tags = params.get('tags');`
    */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      //console.log(prevProps);
      var oldQuery = prevProps.location.query;
      var newQuery = this.props.location.query;
      /*
      const oldQuery = prevProps.location.search;
      const newQuery = this.props.location.search;
      const params1 = new URLSearchParams(oldQuery); 
      const tags1 = params1.get('tags');
      const params2 = new URLSearchParams(newQuery); 
      const tags2 = params2.get('tags');
      */
      //console.log(tags1);
      //console.log(tags2);

      /*
      if (oldQuery.status === newQuery.status) {
        return;
      }
      */

      if (oldQuery.status === newQuery.status && oldQuery.effort_gte === newQuery.effort_gte && oldQuery.effort_lte === newQuery.effort_lte && oldQuery._page === newQuery._page) {
        return;
      } //if (params1 === params2) return;


      this.loadData();
    }
  }, {
    key: "setFilter",
    value: function setFilter(query) {
      this.props.router.push({
        pathname: this.props.location.pathname,
        query: query
      });
    }
  }, {
    key: "selectPage",
    value: function selectPage(eventKey) {
      var query = Object.assign(this.props.location.query, {
        _page: eventKey
      });
      this.props.router.push({
        pathname: this.props.location.pathname,
        query: query
      });
    }
    /*
    showError(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: "danger"
      });
    }
      dismissToast() {
      this.setState({ toastVisible: false });
    }
    */

  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      IssueList.dataFetcher({
        location: this.props.location
      }).then(function (data) {
        var issues = data.IssueList.records;
        issues.forEach(function (issue) {
          issue.created = new Date(issue.created);

          if (issue.completionDate) {
            issue.completionDate = new Date(issue.completionDate);
          }
        }); //this.setState({ issues });

        _this2.setState({
          issues: issues,
          totalCount: data.IssueList.metadata.totalCount
        });
      }).catch(function (err) {
        _this2.props.showError("Error in fetching data from server: ".concat(err));
      });
    }
  }, {
    key: "deleteIssue",
    value: function deleteIssue(id) {
      var _this3 = this;

      fetch("/api/issues/".concat(id), {
        method: "DELETE"
      }).then(function (response) {
        //if (!response.ok) alert("Failed to delete issue");
        if (!response.ok) _this3.props.showError("Failed to delete issue");else _this3.loadData();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
        collapsible: true,
        header: "Filter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        setFilter: this.setFilter,
        initFilter: this.props.location.query
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
        items: Math.ceil(this.state.totalCount / PAGE_SIZE),
        activePage: parseInt(this.props.location.query._page || "1", 10),
        onSelect: this.selectPage,
        maxButtons: 7,
        next: true,
        prev: true,
        boundaryLinks: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueTable, {
        issues: this.state.issues,
        deleteIssue: this.props.user.signedIn ? this.deleteIssue : null
      }));
    }
  }]);

  return IssueList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

IssueList.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  showError: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
IssueList.contextTypes = {
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
var IssueListWithToast = Object(_withToast_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(IssueList);
IssueListWithToast.dataFetcher = IssueList.dataFetcher;
/* harmony default export */ __webpack_exports__["default"] = (IssueListWithToast);

/***/ }),

/***/ "./src/IssueReport.jsx":
/*!*****************************!*\
  !*** ./src/IssueReport.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 //import Toast from './Toast.jsx';


var statuses = ["New", "Open", "Assigned", "Fixed", "Verified", "Closed"];

var StatRow = function StatRow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.owner), statuses.map(function (status, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      key: index
    }, props.counts[status]);
  }));
};

StatRow.propTypes = {
  owner: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  counts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
}; //export default class IssueReport extends React.Component {

var IssueReport =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueReport, _React$Component);

  _createClass(IssueReport, null, [{
    key: "dataFetcher",
    value: function dataFetcher(_ref) {
      var urlBase = _ref.urlBase,
          location = _ref.location;
      var search = location.search ? "".concat(location.search, "&_summary") : "?_summary";
      return fetch("".concat(urlBase || "", "/api/issues").concat(search)).then(function (response) {
        if (!response.ok) return response.json().then(function (error) {
          return Promise.reject(error);
        });
        return response.json().then(function (data) {
          return {
            IssueReport: data
          };
        });
      });
    }
  }]);

  function IssueReport(props, context) {
    var _this;

    _classCallCheck(this, IssueReport);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueReport).call(this, props, context));
    var stats = context.initialState.IssueReport ? context.initialState.IssueReport : {};
    _this.state = {
      stats: stats //toastVisible: false,
      //toastMessage: "",
      //toastType: "success"

    };
    _this.setFilter = _this.setFilter.bind(_assertThisInitialized(_assertThisInitialized(_this))); //this.showError = this.showError.bind(this);
    //this.dismissToast = this.dismissToast.bind(this);

    return _this;
  }

  _createClass(IssueReport, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var oldQuery = prevProps.location.query;
      var newQuery = this.props.location.query;

      if (oldQuery.status === newQuery.status && oldQuery.effort_gte === newQuery.effort_gte && oldQuery.effort_lte === newQuery.effort_lte) {
        return;
      }

      this.loadData();
    }
  }, {
    key: "setFilter",
    value: function setFilter(query) {
      this.props.router.push({
        pathname: this.props.location.pathname,
        query: query
      });
    }
    /*
    showError(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: "danger"
      });
    }
      dismissToast() {
      this.setState({ toastVisible: false });
    }
    */

  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      IssueReport.dataFetcher({
        location: this.props.location
      }).then(function (data) {
        _this2.setState({
          stats: data.IssueReport
        });
      }).catch(function (err) {
        _this2.props.showError("Error in fetching data from server: ".concat(err));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Panel"], {
        collapsible: true,
        header: "Filter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        setFilter: this.setFilter,
        initFilter: this.props.location.query
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        bordered: true,
        condensed: true,
        hover: true,
        responsive: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), statuses.map(function (status, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: index
        }, status);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.keys(this.state.stats).map(function (owner, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatRow, {
          key: index,
          owner: owner,
          counts: _this3.state.stats[owner]
        });
      }))));
    }
  }]);

  return IssueReport;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

IssueReport.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  showError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
IssueReport.contextTypes = {
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
var IssueReportWithToast = Object(_withToast_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])(IssueReport);
IssueReportWithToast.dataFetcher = IssueReport.dataFetcher;
/* harmony default export */ __webpack_exports__["default"] = (IssueReportWithToast);

/***/ }),

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var NumInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumInput, _React$Component);

  function NumInput(props) {
    var _this;

    _classCallCheck(this, NumInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumInput).call(this, props));
    _this.state = {
      value: _this.format(props.value)
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(NumInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        value: this.format(newProps.value)
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      this.props.onChange(e, this.unformat(this.state.value));
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value.match(/^\d*$/)) {
        this.setState({
          value: e.target.value
        });
      }
    }
  }, {
    key: "format",
    value: function format(num) {
      return num != null ? num.toString() : '';
    }
  }, {
    key: "unformat",
    value: function unformat(str) {
      var val = parseInt(str, 10);
      return isNaN(val) ? null : val;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
        type: "text"
      }, this.props, {
        value: this.state.value,
        onBlur: this.onBlur,
        onChange: this.onChange
      }));
    }
  }]);

  return NumInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


NumInput.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./src/Routes.jsx":
/*!************************!*\
  !*** ./src/Routes.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.jsx */ "./src/App.jsx");
/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueList.jsx */ "./src/IssueList.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/IssueEdit.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/IssueReport.jsx");







var NoMatch = function NoMatch() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Page Not Found");
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/",
  component: _App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["IndexRedirect"], {
  to: "/issues"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "issues",
  component: Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(_IssueList_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "issues/:id",
  component: _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "reports",
  component: Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(_IssueReport_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "*",
  component: NoMatch
})));

/***/ }),

/***/ "./src/SigninNavItem.jsx":
/*!*******************************!*\
  !*** ./src/SigninNavItem.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SigninNavItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var SigninNavItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SigninNavItem, _React$Component);

  function SigninNavItem(props) {
    var _this;

    _classCallCheck(this, SigninNavItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SigninNavItem).call(this, props));
    _this.state = {
      showing: false,
      disabled: true
    };
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.hideModal = _this.hideModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.signout = _this.signout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.signin = _this.signin.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SigninNavItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.gapi.load("auth2", function () {
        if (!window.gapi.auth2.getAuthInstance()) {
          if (!window.config || !window.config.googleClientId) {
            _this2.props.showError("Missing Google Client ID or config file /static.config.js");
          } else {
            window.gapi.auth2.init({
              client_id: window.config.googleClientId
            }).then(function () {
              _this2.setState({
                disabled: false
              });
            });
          }
        }
      });
    }
  }, {
    key: "signin",
    value: function signin() {
      var _this3 = this;

      this.hideModal();
      var auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signIn().then(function (googleUser) {
        //this.props.onSignin(googleUser.getBasicProfile().getGivenName());
        fetch("/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id_token: googleUser.getAuthResponse().id_token
          })
        }).then(function (response) {
          if (response.ok) {
            response.json().then(function (user) {
              _this3.props.onSignin(user.name);
            });
          } else {
            response.json().then(function (error) {
              _this3.props.showError("App login failed: ".concat(error));
            });
          }
        }).catch(function (err) {
          _this3.props.showError("Error posting login to app: ".concat(err));
        });
      }, function (error) {
        _this3.props.showError("Error authenticating with Google: ".concat(error));
      });
    }
  }, {
    key: "signout",
    value: function signout() {
      var _this4 = this;

      var auth2 = window.gapi.auth2.getAuthInstance();
      /*
      auth2.signOut().then(() => {
        this.props.showSuccess('Successfully signed out.');
        this.props.onSignout();
      });
      */

      fetch("/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        if (response.ok) {
          auth2.signOut().then(function () {
            _this4.props.showSuccess("Successfully signed out.");

            _this4.props.onSignout();
          });
        }
      });
    }
  }, {
    key: "showModal",
    value: function showModal() {
      if (this.state.disabled) {
        this.props.showError("Missing Google Client ID or config file /static.config.js");
      } else {
        this.setState({
          showing: true
        });
      }
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.setState({
        showing: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.user.signedIn) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
          title: this.props.user.name,
          id: "user-dropdown"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
          onClick: this.signout
        }, "Sign out"));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
        onClick: this.showModal
      }, "Sign in", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        keyboard: true,
        show: this.state.showing,
        onHide: this.hideModal,
        bsSize: "sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
        closeButton: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, "Sign in")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        disabled: this.state.disabled,
        onClick: this.signin
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/btn_google_signin_dark_normal_web.png",
        alt: "Sign in"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        bsStyle: "link",
        onClick: this.hideModal
      }, "Cancel"))));
    }
  }]);

  return SigninNavItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


SigninNavItem.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onSignin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSignout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  showError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  showSuccess: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/***/ }),

/***/ "./src/Toast.jsx":
/*!***********************!*\
  !*** ./src/Toast.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.showing) {
        clearTimeout(this.dismissTimer);
        this.dismissTimer = setTimeout(this.props.onDismiss, 5000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.dismissTimer);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
        in: this.props.showing
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "fixed",
          top: 30,
          left: 0,
          right: 0,
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
        style: {
          display: "inline-block",
          width: 500
        },
        bsStyle: this.props.bsStyle,
        onDismiss: this.props.onDismiss
      }, this.props.message)));
    }
  }]);

  return Toast;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Toast.propTypes = {
  showing: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.bool.isRequired,
  onDismiss: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.func.isRequired,
  bsStyle: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.string,
  message: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.any.isRequired
};
Toast.defaultProps = {
  bsStyle: "success"
};

/***/ }),

/***/ "./src/withToast.jsx":
/*!***************************!*\
  !*** ./src/withToast.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withToast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



function withToast(OriginalComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WithToast, _React$Component);

      function WithToast(props) {
        var _this;

        _classCallCheck(this, WithToast);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(WithToast).call(this, props));
        _this.state = {
          toastVisible: false,
          toastMessage: "",
          toastType: "success"
        };
        _this.showSuccess = _this.showSuccess.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        _this.showError = _this.showError.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        _this.dismissToast = _this.dismissToast.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        return _this;
      }

      _createClass(WithToast, [{
        key: "showSuccess",
        value: function showSuccess(message) {
          this.setState({
            toastVisible: true,
            toastMessage: message,
            toastType: "success"
          });
        }
      }, {
        key: "showError",
        value: function showError(message) {
          this.setState({
            toastVisible: true,
            toastMessage: message,
            toastType: "danger"
          });
        }
      }, {
        key: "dismissToast",
        value: function dismissToast() {
          this.setState({
            toastVisible: false
          });
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OriginalComponent, _extends({
            showError: this.showError,
            showSuccess: this.showSuccess
          }, this.props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
            showing: this.state.toastVisible,
            message: this.state.toastMessage,
            onDismiss: this.dismissToast,
            bsStyle: this.state.toastType
          }));
        }
      }]);

      return WithToast;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
}

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map