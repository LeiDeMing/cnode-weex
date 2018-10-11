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
var navigator = weex.requireModule("navigator");
export default {
  name: "App",
  data() {
    return {
      urlImg: "http://52xuanxuan.com:3000/images/",
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
      ]
    };
  },
  created() {
  },
  methods: {
    jump(r) {
      // this.$router.push(r)
      navigator.push(
        {
          url: "http://172.16.162.114:8081/weex/own.js",
          animated: "true"
        },
        event => {
          modal.toast({ message: "callback: " + event });
        }
      );
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
</style>
