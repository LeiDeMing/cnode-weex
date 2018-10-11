<template>
  <div>
    <div class="home_nav">
      <div class="home_nav_item"  v-for="(item,key) in home_nav" :key="key">
        <text class="home_nav_text">{{item.name}}</text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      home_nav: [
        {
          name: '全部'
        },
        {
          name: '精华'
        },
        {
          name: '分享'
        },
        {
          name: '问答'
        },
        {
          name: '招聘'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
$pd10:20px;
  .home_nav{
    position: fixed;
    top:0;
    left:0;
    flex-direction: row;
    width:750px;
    font-size:80px;
    background-color: #026FFF;
    padding-left:20px;
  }
  .home_nav_text{
    color:#eeeeee;
    font-size:30px;
    padding-top:$pd10;
    padding-bottom:$pd10;
    padding-left:$pd10;
    padding-right:$pd10;
    // border-bottom-width:2px;
  }
</style>
