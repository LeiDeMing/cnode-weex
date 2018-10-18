<template>
  <wxc-tab-page ref="wxc-tab-page"
                :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                title-type="text"
                :tab-page-height="tabPageHeight"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
    <list v-for="(v,index) in tabList"
          :key="index"
          class="item-container"
          :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
      <cell class="border-cell"></cell>
      <cell v-for="(item,key) in v"
            class="cell"
            :key="key">
        <wxc-pan-item :ext-id="'1-' + (v) + '-' + (key)"
                      @wxcPanItemPan="wxcPanItemPan"
                      @wxcPanItemClicked="wxcPanItemClicked(item)"
                      >
         <div class="content">
           <div class="content-Top">
             <div class="ct-left">
               <image class="ct-left-img" resize="cover" :src="item.author.avatar_url"></image>
               <text class="ct-left-txt">{{item.author.loginname}}</text>
             </div>
             <div class="ct-right">
               <text class="ct-r-txt">分类</text>
             </div>
           </div>
           <div class="content-Mid">
             <text class="content-Mid-txt">{{item.title}}</text>
           </div>
           <div class="content-Bottom">
             <div class="content-Bottom-left">
               <text class="cbl-txt">{{item.reply_count}}</text><text class="cbl-split cbl-txt">/</text ><text class="cbl-txt">{{item.visit_count}}</text>
               <text class="cbl-split cbl-txt">•</text ><text class="cbl-txt timeago">{{item.last_reply_at | timeago}}</text>
             </div>
             <div class="content-Bottom-right">
               <text class="cbr-txt">{{item.create_at | handleDate}}</text>
             </div>
           </div>
         </div>
        </wxc-pan-item>
      </cell>
    </list>
  </wxc-tab-page>
</template>
<script>
const dom = weex.requireModule("dom");
import { WxcTabPage, WxcPanItem, Utils, BindEnv } from "weex-ui";
import Config from "../../config";
import mixin from "../../mixins";
export default {
  mixins: [mixin],
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    tabList: [],
    itemList: ["-"],
    tabPageHeight: 1334,
    topicParams: {
      page: 0,
      tab: "good",
      limit: 10,
      mdrender: "true"
    }
  }),
  created() {
    this.bundleUrl = weex.config.bundleUrl;
    this.tabPageHeight = Utils.env.getPageHeight();
    //创建二维数组
    this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);

    let { page, tab, limit } = this.topicParams;
    this.GET(
      {
        params: `/topics?page=${page}&tab=${tab}&limit=${limit}`
      },
      res => {
        this.$set(this.tabList, 0, res);
      }
    );
  },
  mounted() {
  },
  methods: {
    wxcTabPageCurrentTabSelected(e) {
      const self = this;
      const index = e.page;
      const { tabTitles } = Config;
      this.GET(
        {
          params: `/topics?page=${1}&tab=${tabTitles[index]["tab"]}&limit=${
            this.topicParams.limit
          }`
        },
        res => {
          this.$set(self.tabList, index, res);
        }
      );
      /* Unloaded tab analog data request */
    },
    wxcPanItemClicked(item) {
      let {id}=item
      this.NAVIGATOR(Config.setBundleUrl(weex.config.bundleUrl, `components/detail/Detail.js?id=${id}`))
    },
    wxcPanItemPan(e) {
      if (BindEnv.supportsEBForAndroid()) {
        this.$refs["wxc-tab-page"].bindExp(e.element);
      }
    }
  },
  components: { WxcTabPage, WxcPanItem }
};
</script>
<style scoped lang="scss">
$pd10: 20px;
$pdtxt: 10px;
.com-padding {
  padding-top: $pd10;
  padding-bottom: $pd10;
  padding-left: $pd10;
  padding-right: $pd10;
}
.home_nav {
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: row;
  width: 750px;
  font-size: 80px;
  background-color: #026fff;
  padding-left: 20px;
}
.home_nav_text {
  color: #eeeeee;
  font-size: 30px;
  @extend .com-padding;
  // border-bottom-width:2px;
}
.border-cell {
  background-color: #f2f3f4;
  width: 750px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
}
.content {
  width: 750px;
  @extend .com-padding;
  background-color: #ffffff;
  margin-bottom: 24px;
}
.content-Top,
.content-Bottom,
.content-Bottom-left {
  flex-direction: row;
  justify-content: space-between;
}
.ct-left {
  flex-direction: row;
}
.ct-left-txt {
  margin-left: 10px;
}
.ct-left-img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.ct-r-txt {
  color: #a29898;
  font-size: 24px;
}
.content-Mid {
  margin-top: 26px;
  margin-bottom: 12px;
}
.content-Mid-txt {
  font-weight: 700;
  font-size: 30px;
}
.cbl-split {
  margin-left: 4px;
  margin-right: 4px;
}
.cbl-txt,
.cbr-txt {
  font-size: 20px;
  color: #a9a9a9;
}
</style>
