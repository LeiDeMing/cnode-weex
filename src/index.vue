<template>
  <div class="wrapper">
    <text class="greeting"></text>
    <router-view/>
    <div class="navBar">
      <div class="navBarLine" v-for="(item,key) in tabBar" :key="key" @click="jump(item.router)">
        <image class="navBarImg" :src="urlImg+item.image"></image>
        <text class="navBarText">{{item.name}}</text>
      </div>
    </div>    
  </div>
</template>
<script>
import Config from './config'
export default {
  name: "App",
  data: () => ({
    tabBar:Config.tabBar,
    urlImg: "http://52xuanxuan.com:3000/images/"
  }),
  created() {
    
  },
  methods: {
    jump(r) {
      this.$router.push(r);
    }
  }
};
</script>

<style scoped lang="scss">
$pd20: 20px;
$pd10: 8px;
$wh50: 34px;
.navBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750px;
  background-color: #ffffff;
  flex-direction: row;
  padding-left: $pd20;
  padding-right: $pd20;
  padding-top: $pd10;
  padding-bottom: $pd10;
  border-top-width: 1px;
  border-top-color: #eeeeee;
}
.navBarText {
  text-align: center;
  font-size: 20px;
  margin-top: 4px;
}
.navBarImg {
  width: $wh50;
  height: $wh50;
}
.navBarLine {
  flex: 1;
  align-items: center;
}

.item-container {
  width: 750px;
  background-color: #f2f3f4;
}


</style>
