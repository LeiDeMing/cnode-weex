// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 248);
/******/ })
/************************************************************************/
/******/ ({

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Detail = __webpack_require__(249);

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Detail2.default.el = '#root';
new Vue(_Detail2.default);

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(250)
)

/* script */
__vue_exports__ = __webpack_require__(251)

/* template */
var __vue_template__ = __webpack_require__(252)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\cnode-weex\\src\\components\\detail\\Detail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-217f8a9c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(7);

var _mixins2 = _interopRequireDefault(_mixins);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

exports.default = {
    mixins: [_mixins2.default],
    data: function data() {
        return {
            topicId: ""
        };
    },
    created: function created() {
        this.topicId = _config2.default.req(weex.config.bundleUrl, 'id');
        this.GET({
            params: "/topic/" + this.topicId
        }, function (res) {
            console.log(res);
        });
    },
    mounted: function mounted() {
        //   this.TOAST(Config.req(weex.config.bundleUrl,'id'),30)
    }
};

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["detail"]
  }, [_vm._v("\n    1\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tabTitles: [{
        title: "全部",
        tab: '',
        icon: "/",
        activeIcon: "/"
    }, {
        title: "精华",
        tab: 'good'
    }, {
        title: "分享",
        tab: 'share'
    }, {
        title: "问答",
        tab: 'ask'
    }, {
        title: "招聘",
        tab: 'job'
    }],
    tabBarTitles: [{
        title: "首页"
    }, {
        title: "--"
    }, {
        title: "我的"
    }],
    tabStyles: {
        bgColor: "#026fff",
        titleColor: "#eeeeee",
        activeTitleColor: "#ffffff",
        activeBgColor: "#026fff",
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 120,
        height: 80,
        fontSize: 24,
        hasActiveBottom: true,
        activeBottomColor: "#ffffff",
        activeBottomHeight: 6,
        activeBottomWidth: 120,
        textPaddingLeft: 10,
        textPaddingRight: 10
    },
    tabBar: [{
        name: "首页",
        image: "home.png",
        router: "/"
    }, {
        name: "--",
        image: "other.png",
        router: "/"
    }, {
        name: "我的",
        image: "own.png",
        router: "/own"
    }],
    setBundleUrl: function setBundleUrl(url, jsFile) {
        var bundleUrl = url;
        var host = '';
        var path = '';
        var nativeBase = void 0;
        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist/';
        } else if (isiOSAssets) {
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            var matchFirstPath = /\/\/[^\/]+\/([^\/\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        var h5Base = "";
        // h5Base = './index.html?page=';

        jsFile = jsFile.replace('.js', '.html');

        // in Native
        var base = nativeBase;
        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path ? path + '/' : '');
        }

        var newUrl = base + jsFile;
        return newUrl;
    },
    req: function req(weexUrl, paras) {
        var url = weexUrl;
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        var paraObj = {};
        var j = "";
        for (var i = 0; j = paraString[i]; i++) {
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
        var returnValue = paraObj[paras.toLowerCase()];
        if (typeof returnValue == "undefined") {
            return null;
        } else {
            return returnValue;
        }
    }
};

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var stream = weex.requireModule("stream");
var navigator = weex.requireModule("navigator");
var modal = weex.requireModule("modal");
exports.default = {
    data: function data() {
        return {
            rootUrl: 'https://cnodejs.org/api/v1',
            tabTitles: [{
                title: "全部",
                tab: '',
                icon: "/",
                activeIcon: "/"
            }, {
                title: "精华",
                tab: 'good'
            }, {
                title: "分享",
                tab: 'share'
            }, {
                title: "问答",
                tab: 'ask'
            }, {
                title: "招聘",
                tab: 'job'
            }],
            tabBarTitles: [{
                title: "首页"
            }, {
                title: "--"
            }, {
                title: "我的"
            }],
            tabStyles: {
                bgColor: "#026fff",
                titleColor: "#eeeeee",
                activeTitleColor: "#ffffff",
                activeBgColor: "#026fff",
                isActiveTitleBold: true,
                iconWidth: 70,
                iconHeight: 70,
                width: 120,
                height: 80,
                fontSize: 24,
                hasActiveBottom: true,
                activeBottomColor: "#ffffff",
                activeBottomHeight: 6,
                activeBottomWidth: 120,
                textPaddingLeft: 10,
                textPaddingRight: 10
            },
            tabBar: [{
                name: "首页",
                image: "home.png",
                router: "/"
            }, {
                name: "--",
                image: "other.png",
                router: "/"
            }, {
                name: "我的",
                image: "own.png",
                router: "/own"
            }]
        };
    },
    methods: {
        GET: function GET(obj) {
            var call = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var params = obj.params;

            stream.fetch({
                method: "GET",
                url: this.rootUrl + params
            }, function (res) {
                var itemList = JSON.parse(res.data).data;
                call && call(itemList);
            }, function (err) {});
        },
        NAVIGATOR: function NAVIGATOR(url) {
            var animatedFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            navigator.push({
                url: url,
                animated: animatedFlag.toString()
            }, function (event) {
                // modal.toast({ message: "callback: " + event });
            });
        },
        TOAST: function TOAST(msg, time) {
            modal.toast({
                message: msg,
                duration: time
            });
        },
        setBundleUrl: function setBundleUrl(url, jsFile) {
            var bundleUrl = url;
            var host = '';
            var path = '';
            var nativeBase = void 0;
            var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
            var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
            if (isAndroidAssets) {
                nativeBase = 'file://assets/dist';
            } else if (isiOSAssets) {
                nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
            } else {
                var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
                var matchFirstPath = /\/\/[^\/]+\/([^\/\s]+)\//.exec(bundleUrl);
                if (matches && matches.length >= 2) {
                    host = matches[1];
                }
                if (matchFirstPath && matchFirstPath.length >= 2) {
                    path = matchFirstPath[1];
                }
                nativeBase = 'http://' + host + '/';
            }
            var h5Base = '';
            // in Native
            var base = nativeBase;
            if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
                // check if in weexpack project
                if (path === 'web' || path === 'dist') {
                    base = h5Base + '/dist/';
                } else {
                    base = h5Base + '';
                }
            } else {
                base = nativeBase + (!!path ? path + '/' : '');
            }

            var newUrl = base + jsFile;
            console.log(newUrl);
            return newUrl;
        }
    },
    filters: {
        handleDate: function handleDate() {
            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "2000-03-22T02:35:23.073Z";

            var t = new Date(time);
            return t.toISOString();
        },
        timeago: function timeago() {
            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "2000-03-22T02:35:23.073Z";
            //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
            var dateTimeStamp = new Date(time).getTime();
            var result = "";
            var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
            var hour = minute * 60;
            var day = hour * 24;
            var week = day * 7;
            var halfamonth = day * 15;
            var month = day * 30;
            var now = new Date().getTime(); //获取当前时间毫秒
            var diffValue = now - dateTimeStamp; //时间差

            if (diffValue < 0) {
                return;
            }
            var minC = diffValue / minute; //计算时间差的分，时，天，周，月
            var hourC = diffValue / hour;
            var dayC = diffValue / day;
            var weekC = diffValue / week;
            var monthC = diffValue / month;
            if (monthC >= 1 && monthC <= 3) {
                result = " " + parseInt(monthC) + "月前";
            } else if (weekC >= 1 && weekC <= 3) {
                result = " " + parseInt(weekC) + "周前";
            } else if (dayC >= 1 && dayC <= 6) {
                result = " " + parseInt(dayC) + "天前";
            } else if (hourC >= 1 && hourC <= 23) {
                result = " " + parseInt(hourC) + "小时前";
            } else if (minC >= 1 && minC <= 59) {
                result = " " + parseInt(minC) + "分钟前";
            } else if (diffValue >= 0 && diffValue <= minute) {
                result = "刚刚";
            } else {
                var datetime = new Date();
                datetime.setTime(dateTimeStamp);
                var Nyear = datetime.getFullYear();
                var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
                var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
                var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
                var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
                var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
                result = Nyear + "-" + Nmonth + "-" + Ndate;
            }
            return result;
        }
    }
};

/***/ })

/******/ });