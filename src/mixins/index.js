const stream = weex.requireModule("stream");
const navigator = weex.requireModule("navigator");
const modal = weex.requireModule("modal");
export default {
    data: () => ({
        rootUrl: 'https://cnodejs.org/api/v1',
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
                title: "首页"
            },
            {
                title: "--"
            },
            {
                title: "我的"
            },
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
        ]
    }),
    methods: {
        GET(obj, call = null) {
            let {
                params
            } = obj
            stream.fetch({
                    method: "GET",
                    url: this.rootUrl + params
                },
                res => {
                    let itemList = JSON.parse(res.data).data;
                    call && call(itemList);
                },
                err => {

                }
            );
        },
        NAVIGATOR(url, animatedFlag = true) {
            navigator.push({
                    url: url,
                    animated: animatedFlag.toString()
                },
                event => {
                    // modal.toast({ message: "callback: " + event });
                }
            );
        },
        TOAST(msg, time) {
            modal.toast({
                message: msg,
                duration: time
            })
        },
        setBundleUrl(url, jsFile) {
            const bundleUrl = url;
            let host = '';
            let path = '';
            let nativeBase;
            const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
            const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
            if (isAndroidAssets) {
                nativeBase = 'file://assets/dist';
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
            const h5Base = '';
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
            console.log(newUrl)
            return newUrl;
        }
    },
    filters: {
        handleDate(time = "2000-03-22T02:35:23.073Z") {
            const t = new Date(time)
            return t.toISOString()
        },
        timeago(data = "2000-03-22T02:35:23.073Z") { //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
            //var str = data;
            //将字符串转换成时间格式
            var timePublish = new Date(data);
            var timeNow = new Date();
            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var month = day * 30;
            var diffValue = timeNow - timePublish;
            var diffMonth = diffValue / month;
            var diffWeek = diffValue / (7 * day);
            var diffDay = diffValue / day;
            var diffHour = diffValue / hour;
            var diffMinute = diffValue / minute;
            var result=""
            if (diffValue < 0) {
                alert("错误时间");
            } else if (diffMonth > 3) {
                result = timePublish.getFullYear() + "-";
                result += timePublish.getMonth() + "-";
                result += timePublish.getDate();
            } else if (diffMonth > 1) {
                result = parseInt(diffMonth) + "月前";
            } else if (diffWeek > 1) {
                result = parseInt(diffWeek) + "周前";
            } else if (diffDay > 1) {
                result = parseInt(diffDay) + "天前";
            } else if (diffHour > 1) {
                result = parseInt(diffHour) + "小时前";
            } else if (diffMinute > 1) {
                result = parseInt(diffMinute) + "分钟前";
            }
            return result;
        }
    }
}