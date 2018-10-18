<template>
    <div class="detail">
        <web :src="webUrl" :style="contentStyle" ></web>
    </div>
</template>
<script>
import mixin from "../../mixins";
import Config from "../../config";
import { Utils } from "weex-ui";
export default {
  mixins: [mixin],
  data: () => ({
    topicId: "",
    contentStyle: {},
    webUrl: "http://52xuanxuan.com:3000/html/cnode-weex-detail.html"
  }),
  created() {
    const pageHeight = Utils.env.getPageHeight();
    this.contentStyle = {width:"750px", height: pageHeight + "px" };
    this.topicId = Config.req(weex.config.bundleUrl, "id");
    this.webUrl += `?id=${this.topicId}`;
    this.GET(
      {
        params: `/topic/${this.topicId}`
      },
      res => {
        console.log(res);
      }
    );
  },
  mounted() {
    //   this.TOAST(Config.req(weex.config.bundleUrl,'id'),30)
  }
};
</script>
<style lang="scss" scoped>
</style>
