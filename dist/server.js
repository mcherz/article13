module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=16)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.ADD_BOILERPLATE_STRING="ADD_BOILERPLATE_STRING";t.addBoilerplateString=function(e){return{type:n,payload:e}}},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={CONSTANT:3}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(0));o(r(4));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=Array(l),a=0;a<l;a++)i[a]=arguments[a];return r=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.componentDidMount=function(){o.props.addBoilerplateString("Hello, Article13")},o.render=function(){return n.default.createElement("div",{className:"boilerplate"},o.props.boilerplateString)},u(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),t}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=function(e){return e&&e.__esModule?e:{default:e}}(r(5)),u=r(1);var l=(0,n.connect)(function(e){return{boilerplateString:e.boilerplate.boilerplateString}},function(e){return{addBoilerplateString:function(t){e((0,u.addBoilerplateString)(t))}}})(o.default);t.default=l},function(e,t){e.exports=require("dot-prop-immutable")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.boilerplateInitialState=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(7)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(1));var u=t.boilerplateInitialState={boilerplateString:""};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case o.ADD_BOILERPLATE_STRING:return n.default.set(e,"boilerplateString",t.payload);default:return e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r(8));var u=(0,n.combineReducers)({boilerplate:o.default});t.default=u},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=d(r(0)),l=r(3),i=r(2),a=d(r(10)),f=d(r(9)),c=d(r(6));function d(e){return e&&e.__esModule?e:{default:e}}var s=void 0,p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"componentWillMount",value:function(){var e=("object"===("undefined"==typeof window?"undefined":n(window))&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name:"boilerplate"}):i.compose)((0,i.applyMiddleware)(a.default)),t=this.props;s=(0,i.createStore)(f.default,t,e)}},{key:"render",value:function(){return u.default.createElement(l.Provider,{store:s},u.default.createElement(c.default,null))}}]),t}();t.default=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=function(e){return n.default.createElement("html",null,n.default.createElement("head",null,n.default.createElement("title",null,"Matt Herz"),n.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"styles.css"}),n.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),n.default.createElement("body",null,n.default.createElement("div",{id:"app"},e),n.default.createElement("script",{src:"bundle.js"})))}},function(e,t){e.exports=require("heroku-ssl-redirect")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";var n=f(r(0)),o=f(r(15)),u=f(r(14)),l=f(r(13)),i=f(r(12)),a=f(r(11));function f(e){return e&&e.__esModule?e:{default:e}}var c=(0,u.default)(),d=process.env.PORT||8080;c.use((0,l.default)()),c.use(u.default.static("dist")),c.get("/",function(e,t){o.default.renderToNodeStream((0,i.default)(n.default.createElement(a.default))).pipe(t)}),c.listen(d,function(){console.log("listening on port "+d+"...")})}]);