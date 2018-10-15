export default{
    tabTitles: [
        {
          title: "全部",
          tab:'',
          icon: "/",
          activeIcon:
            "/"
        },
        {
          title: "精华",
          tab:'good'
        },
        {
          title: "分享",
          tab:'share'
        },
        {
          title: "问答",
          tab:'ask'
        },
        {
          title: "招聘",
          tab:'job'
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
      tabBar: [
        {
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
      rootUrl:'https://cnodejs.org/api/v1'
}