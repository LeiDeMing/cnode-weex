<template>
    <div class="detail">
        1
    </div>
</template>
<script>
import mixin from "../../mixins";
import Config from "../../config";
export default {
  mixins:[mixin],
  data: () => ({
      topicId:""
  }),
  created(){
      this.topicId=Config.req(weex.config.bundleUrl,'id')
      this.GET({
          params:`/topic/${this.topicId}`
      },res=>{
          console.log(res)
      })
  },
  mounted(){
    //   this.TOAST(Config.req(weex.config.bundleUrl,'id'),30)
  }
};
</script>
<style lang="scss" scoped>

</style>
