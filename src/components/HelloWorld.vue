<template>
  <div>
    <div class="home_nav">
      <div  v-for="(item,key) in home_nav" :key="key">
        <text>{{item.name}}</text>
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
<style scoped>
  .home_nav{
    position: fixed;
    top:0;
    left:0;
    flex-direction: row;
    width:750px;
    font-size:80px;
    background-color: skyblue;
  }
</style>
