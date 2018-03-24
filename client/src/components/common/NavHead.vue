<template>
  <div>
      <el-col style="height-line:65px;heigth:65px;position:fixed;top:0px;left:0px;background:#fefefe;;text-align:left;">
        <el-col span="2">&nbsp;</el-col>
        <i @click="goToHome()" class="iconfont icon-school3" style="font-size:38px;float:left;line-height:60px;"></i>
        <el-col @click.native="goToHome()" span="4" style="color:#606060;padding-left:10px;margin-top:10px;">
          <el-row style="font-weight:bold;">Community</el-row>
          <el-row style="font-size:14px;">For students & Teacher</el-row>
        </el-col>
        <el-col class="navFind" span="3" style="height:40px;line-height:60px;">
            <!-- <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input> -->
        </el-col>
        <el-col span="9">
          <!-- <el-menu mode="horizontal" class="nav_header_col" :default-active="$route.path" style="height:60px;">
            <el-menu-item style="width:80px;margin-left:5px;" index="home" @click="navClick('/')"><router-link to="/">首页</router-link></el-menu-item>
            <el-menu-item style="width:80px;margin-left:5px;" index="message" @click="navClick('message')"><router-link to="/Message">作业</router-link></el-menu-item>
            <el-menu-item style="width:80px;margin-left:5px;" index="display" @click="navClick('display')"><router-link to="/Display">发现</router-link></el-menu-item>
            <el-menu-item style="width:80px;margin-left:5px;" index="news" @click="navClick('news')"><router-link to="/News" index="news">新闻</router-link></el-menu-item>
            <el-menu-item style="width:80px;" index="myself" @click="navClick('myself')"><router-link to="/MySelf" index="myself">个人中心</router-link></el-menu-item>
          </el-menu> -->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="首页" name="/"></el-tab-pane>
            <el-tab-pane label="课后实践" name="message"></el-tab-pane>
            <el-tab-pane label="开源项目" name="display"></el-tab-pane>
            <el-tab-pane label="业内资讯" name="news"></el-tab-pane>
            <el-tab-pane label="个人中心" name="mySelf"></el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col span="2" style="">&nbsp;</el-col>
        <el-col span="3" style="height:40px;padding:5px;line-height:50px;" class="routerLink">
          <router-link to="/Login">登陆</router-link>
          <router-link to="/Register">注册</router-link>
        </el-col>
      </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: ""
    };
  },
  mounted() {},
  methods: {
    goToLogin() {
      this.$router.push("/Login");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToMySelf() {
      this.$router.push("Login");
    },
    navClick(name) {
      this.$router.push(name);
    },
    handleClick(tab, event) {
      this.$router.push(this.activeName);
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}

.el-tabs__nav {
  margin-top: 10px;
}
</style>

