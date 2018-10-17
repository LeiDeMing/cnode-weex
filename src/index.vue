<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="text"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!--The first page content-->
    <div class="item-container" :style="contentStyle">
      <vue-home/>
    </div>

    <!--The second page content-->
    <div class="item-container" :style="contentStyle"><text>Hot</text></div>

    <!-- The third page content-->
    <div class="item-container" :style="contentStyle"><text>Message</text></div>
  </wxc-tab-bar>
</template>

<script>
import Config from "./config";
import { WxcTabBar, Utils } from "weex-ui";
import Home from'./components/home/Home.vue'
export default {
  name: "App",
  data() {
    return {
      tabTitles: Config.tabBarTitles,
      tabStyles: Config.tabStyles
    };
  },
  created() {
    const tabPageHeight = Utils.env.getPageHeight();
    // If the page doesn't have a navigation bar
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this;
    this.contentStyle = { height: tabPageHeight+ "px" };
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      const index = e.page;
      // console.log(index);
    }
    // jump() {
    //   modal.toast({
    //     message: Config.setBundleUrl(
    //       weex.config.bundleUrl,
    //       "/components/own/Own.js"
    //     ),
    //     duration: 4
    //   });
    //   navigator.push({
    //     url: Util.setBundleUrl(weex.config.bundleUrl, "/components/own/Own.js")
    //   });
    // },
  },
  components: { 
    WxcTabBar,
    'vue-home':Home
     }
};
</script>

<style scoped>
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: center;
}
</style>
