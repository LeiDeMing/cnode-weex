<template>
  <div class="wrapper">
    <div class="test">
      <text class="testText">测试</text>
    </div>
    <text class="greeting"></text>
    <router-view/>
    <div class="navBar">
      <div v-for="(item,key) in tabBar" :key="key">
        <text>{{item.name}}</text>
        <!-- <image src="local:///test"></image> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      tabBar: [
        {
          name: '首页',
          image: 'local:///test'
        },
        {
          name: '--',
          image: 'local:///test'
        },
        {
          name: '我的',
          image: 'local:///test'
        }
      ]
    }
  }
}
</script>

<style scoped>
.test{
  margin-top:200px;
}
.test .testText{
  font-size: 80px;
}
  .navBar{
    position: fixed;
    bottom: 0;
    left:0;
    width:750px;
    background-color: skyblue;
    flex-direction: row;
  }
  .navBar div{
    flex:1;
    flex-direction: column;
  }
  .navBar div .weex-text{
    text-align: center;
    font-size:60px;
  }
  .navBar div .weex-image{
    width:50px;
    height: 50px;
  }
</style>
