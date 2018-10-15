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
                      url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                      @wxcPanItemPan="wxcPanItemPan">
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
           <div class="content-Mid"></div>
           <div class="content-Bottom"></div>
         </div>
        </wxc-pan-item>
      </cell>
    </list>
  </wxc-tab-page>
</template>
<script>
const stream = weex.requireModule("stream");
const dom = weex.requireModule("dom");
import { WxcTabPage, WxcPanItem, Utils, BindEnv } from "weex-ui";
import Config from "../../config";
export default {
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    tabList: [],
    itemList: ['-'],
    tabPageHeight: 1334,
    topicParams: {
      page: 0,
      tab: "good",
      limit: 10,
      mdrender: "true"
    }
  }),
  created() {
    this.tabPageHeight = Utils.env.getPageHeight();
    //创建二维数组
    this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
    this.reqTopic({
      page:1,
      tab:this.topicParams.tab,
      limit:this.topicParams.limit
    },()=>{
      this.$set(this.tabList, 0, this.itemList);
      console.log(this.itemList)
    });

  },
  mounted() {},
  methods: {
    wxcTabPageCurrentTabSelected(e) {
      const self = this;
      const index = e.page;
      /* Unloaded tab analog data request */
      if (!Utils.isNonEmptyArray(self.tabList[index])) {
        setTimeout(() => {
          this.$set(self.tabList, index, self.itemList);
        }, 100);
      }
    },
    wxcPanItemPan(e) {
      if (BindEnv.supportsEBForAndroid()) {
        this.$refs["wxc-tab-page"].bindExp(e.element);
      }
    },
    reqTopic(opt,call) {
      let {page,tab,limit}=opt
      stream.fetch(
        {
          method: "GET",
          url: `${
            Config.rootUrl
          }/topics?page=${page}&tab=${tab}&limit=${limit}`
        },
        res => {
          this.itemList = JSON.parse(res.data).data;
          call && call()
        },
        err => {}
      );
    }
  },
  components: { WxcTabPage, WxcPanItem }
};
</script>
<style scoped lang="scss">
$pd10: 20px;
$pdtxt:10px;
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
  padding-top: $pd10;
  padding-bottom: $pd10;
  padding-left: $pd10;
  padding-right: $pd10;
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

.cell {
}

.content {
  width: 750px;
  height: 300px;
  padding-top: $pd10;
  padding-bottom: $pd10;
  padding-left: $pd10;
  padding-right: $pd10;
  background-color: #ffffff;
  margin-bottom: 24px;
}
.content-Top{
  flex-direction: row;
  justify-content:space-between;
}
.ct-left{
  flex-direction: row;
}
.ct-left-txt{
  margin-left:10px;
}
.ct-left-img{
  width:40px;
  height: 40px;
  border-radius: 100%;
}
.ct-r-txt{
  color:#A29898;
  font-size: 24px;
}
</style>
