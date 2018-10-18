export default {
    tabTitles: [{
            title: "全部",
            tab: '',
            icon: "/",
            activeIcon: "/"
        },
        {
            title: "精华",
            tab: 'good'
        },
        {
            title: "分享",
            tab: 'share'
        },
        {
            title: "问答",
            tab: 'ask'
        },
        {
            title: "招聘",
            tab: 'job'
        }
    ],
    tabBarTitles: [{
            title: "首页",
        },
        {
            title: "--",
        },
        {
            title: "我的",
        }
    ],
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
        },
        {
            name: "--",
            image: "other.png",
            router: "/"
        },
        {
            name: "我的",
            image: "own.png",
            router: "/own"
        }
    ],
    setBundleUrl(url, jsFile) {
        const bundleUrl = url;
        let host = '';
        let path = '';
        let nativeBase;
        const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist/';
        } else if (isiOSAssets) {
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            const matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            const matchFirstPath = /\/\/[^\/]+\/([^\/\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        let h5Base=""
        // h5Base = './index.html?page=';
        
        jsFile = jsFile.replace('.js', '.html')

        // in Native
        let base = nativeBase;
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

        const newUrl = base + jsFile;
        return newUrl;
    },
    req(weexUrl, paras) {
        const url = weexUrl;
        let paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        let paraObj = {}
        let j = ""
        for (let i = 0; j = paraString[i]; i++) {
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
        var returnValue = paraObj[paras.toLowerCase()];
        if (typeof (returnValue) == "undefined") {
            return null;
        } else {
            return returnValue;
        }
    }
}