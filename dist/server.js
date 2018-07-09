module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=19)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.SET_ALGORITHM_ACCURACY="SET_ALGORITHM_ACCURACY",a=(t.setAlgorithmAccuracy=function(e){return{type:n,payload:e}},t.SET_ILLEGAL_MEME_RATE="SET_ILLEGAL_MEME_RATE");t.setIllegalMemeRate=function(e){return{type:a,payload:e}}},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("reselect")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.falseNegative=t.falsePositive=t.truePositive=t.trueNegative=t.rate=t.accuracy=void 0;var n=r(4),a=function(e){return e.article13||{}},l=(0,n.createSelector)([a],function(e){return e.algorithmAccuracy}),u=(t.accuracy=(0,n.createSelector)([l],function(e){return Math.exp(Math.log(100)*e/100)}),(0,n.createSelector)([a],function(e){return e.illegalRate}));t.rate=(0,n.createSelector)([u],function(e){return 25-Math.pow(Math.log10(e),2)}),t.trueNegative=(0,n.createSelector)([l,u],function(e,t){return 1e7*(1-1/t)*e/100}),t.truePositive=(0,n.createSelector)([l,u],function(e,t){return 1/t*1e7*e/100}),t.falsePositive=(0,n.createSelector)([l,u],function(e,t){return 1e7*(1-1/t)*(1-e/100)}),t.falseNegative=(0,n.createSelector)([l,u],function(e,t){return 1/t*1e7*(1-e/100)})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){for(var t=""+Math.round(e),r=t[t.length-1],n=1;n<t.length;n++)n%3==0&&(r=","+r),r=t[t.length-n-1]+r;return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={CONSTANT:3}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(0)),a=(l(r(7)),l(r(6)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function(e){function t(){var e,r,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return r=l=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),l.componentDidMount=function(){l.forceUpdate()},l.getStyles=function(e){var t=e/100,r=l.bars?l.bars.getBoundingClientRect().width/4-10:100,n=Math.sqrt(t)>r?r:Math.sqrt(t);return{width:n,height:n?t/n:0}},l.render=function(){return n.default.createElement("div",{className:"article13"},n.default.createElement("div",null,n.default.createElement("input",{className:"slider",ref:function(e){return l.accuracySlider=e},type:"range",min:"1",max:"100",step:"any",value:l.props.accuracy,onChange:function(){return l.props.setAlgorithmAccuracy(l.accuracySlider.valueAsNumber)}}),n.default.createElement("span",null,"Accuracy: ",l.props.algorithmAccuracy.toFixed(2))),n.default.createElement("div",null,n.default.createElement("input",{className:"slider",ref:function(e){return l.incidenceSlider=e},type:"range",min:"0",max:"24",step:"any",value:l.props.rate,onChange:function(){return l.props.setIllegalMemeRate(l.incidenceSlider.valueAsNumber)}}),n.default.createElement("span",null,"Incidence: 1/",(0,a.default)(l.props.illegalRate))),n.default.createElement("div",{ref:function(e){return l.bars=e},className:"bar-container"},n.default.createElement("div",{className:"bar"},n.default.createElement("div",{className:"bar-label"},"True Negatives: ",(0,a.default)(l.props.trueNegative)),n.default.createElement("div",{className:"area-green",style:l.getStyles(l.props.trueNegative)})),n.default.createElement("div",{className:"bar"},n.default.createElement("div",{className:"bar-label"},"True Positives: ",(0,a.default)(l.props.truePositive)),n.default.createElement("div",{className:"area-blue",style:l.getStyles(l.props.truePositive)})),n.default.createElement("div",{className:"bar"},n.default.createElement("div",{className:"bar-label"},"False Negatives: ",(0,a.default)(l.props.falseNegative)),n.default.createElement("div",{className:"area-grey",style:l.getStyles(l.props.falseNegative)})),n.default.createElement("div",{className:"bar"},n.default.createElement("div",{className:"bar-label"},"False Positives: ",(0,a.default)(l.props.falsePositive)),n.default.createElement("div",{className:"area-red",style:l.getStyles(l.props.falsePositive)}))))},u(l,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),t}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),a=function(e){return e&&e.__esModule?e:{default:e}}(r(8)),l=r(1),u=r(5);var o=(0,n.connect)(function(e){return{algorithmAccuracy:e.article13.algorithmAccuracy,illegalRate:e.article13.illegalRate,accuracy:(0,u.accuracy)(e),rate:(0,u.rate)(e),truePositive:(0,u.truePositive)(e),trueNegative:(0,u.trueNegative)(e),falsePositive:(0,u.falsePositive)(e),falseNegative:(0,u.falseNegative)(e)}},function(e){return{setAlgorithmAccuracy:function(t){e((0,l.setAlgorithmAccuracy)(t))},setIllegalMemeRate:function(t){e((0,l.setIllegalMemeRate)(t))}}})(a.default);t.default=o},function(e,t){e.exports=require("dot-prop-immutable")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.article13InitialState=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(10)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(1));var l=t.article13InitialState={algorithmAccuracy:97.5,illegalRate:1e4};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case a.SET_ALGORITHM_ACCURACY:return n.default.set(e,"algorithmAccuracy",100*Math.log(t.payload)/Math.log(100));case a.SET_ILLEGAL_MEME_RATE:return n.default.set(e,"illegalRate",Math.pow(10,Math.sqrt(25-t.payload)));default:return e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=function(e){return e&&e.__esModule?e:{default:e}}(r(11));var l=(0,n.combineReducers)({article13:a.default});t.default=l},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=f(r(0)),u=r(3),o=r(2),i=f(r(13)),c=f(r(12)),s=f(r(9));function f(e){return e&&e.__esModule?e:{default:e}}var d=void 0,p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),a(t,[{key:"componentWillMount",value:function(){var e=("object"===("undefined"==typeof window?"undefined":n(window))&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name:"article13"}):o.compose)((0,o.applyMiddleware)(i.default)),t=this.props;d=(0,o.createStore)(c.default,t,e)}},{key:"render",value:function(){return l.default.createElement(u.Provider,{store:d},l.default.createElement(s.default,null))}}]),t}();t.default=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=function(e){return n.default.createElement("html",null,n.default.createElement("head",null,n.default.createElement("title",null,"Article 13"),n.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"styles.css"}),n.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),n.default.createElement("body",null,n.default.createElement("div",{id:"app"},e),n.default.createElement("script",{src:"bundle.js"})))}},function(e,t){e.exports=require("heroku-ssl-redirect")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";var n=c(r(0)),a=c(r(18)),l=c(r(17)),u=c(r(16)),o=c(r(15)),i=c(r(14));function c(e){return e&&e.__esModule?e:{default:e}}var s=(0,l.default)(),f=process.env.PORT||8080;s.use((0,u.default)()),s.use(l.default.static("dist")),s.get("/",function(e,t){a.default.renderToNodeStream((0,o.default)(n.default.createElement(i.default))).pipe(t)}),s.listen(f,function(){console.log("listening on port "+f+"...")})}]);