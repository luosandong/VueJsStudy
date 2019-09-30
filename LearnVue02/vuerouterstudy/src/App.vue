<template>
  <div id="app">
    <div id="nav">
      <!-- tag属性用于将router-link替换为指定的标签 replace禁用浏览器的返回按钮 -->
      <router-link to="/" replace>Home</router-link>|
      <router-link to="/book/hello" replace>书箱</router-link>|
      <router-link to="/about" replace>About</router-link>

      <!-- 动态路由方式 -->
      <!-- <button @click="runHome">首页</button>
      <router-link to="/book/csd">书箱</router-link>
      <button @click="runAbout">关于</button>-->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookId: "hello"
    };
  },
  computed: {
    // bookId() {
    //   return "hello";
    // }
  },
  methods: {
    runHome() {
      //this.$router.push("./");
      this.$router.replace("./");
    },
    runAbout() {
      //this.$router.push("./about");
      this.$router.replace("./about");
    }
  },
  created() {
    console.log(this.$route.params.id);
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.active {
  color: red;
}
.linkExactActiveClass {
  color: blue;
}
</style>
