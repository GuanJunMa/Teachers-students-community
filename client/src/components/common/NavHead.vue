<template>
  <div>
      <el-col style="height-line:65px;heigth:65px;position:fixed;top:0px;left:0px;background:#fefefe;text-align:left;">
        <el-col :span="2">&nbsp;</el-col>
        <i @click="goToHome()" class="iconfont icon-school3" style="font-size:38px;float:left;"></i>
        <el-col @click.native="goToHome()" :span="4" style="color:#606060;padding-left:10px;">
          <el-row style="font-weight:bold;">Community</el-row>
          <el-row style="font-size:14px;">For students & Teacher</el-row>
        </el-col>
        <el-col class="navFind" :span="5" style="height:40px;line-height:40px;">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </el-col>
        <el-col :span="7">
          <el-col :span="4">
            <router-link to="/">首页</router-link>
          </el-col>
          <el-col :span="4">
            <router-link to="/Message">动态</router-link>
          </el-col>
          <el-col :span="4">
            <router-link to="/Display">发现</router-link>
          </el-col>
          <el-col :span="4">
            <router-link to="/News">新闻</router-link>
          </el-col>
          <el-col :span="4">
            <router-link to="/MySelf">个人中心</router-link>
          </el-col>
        </el-col>
        <el-col :span="2" style="">&nbsp;</el-col>
        <el-col :span="3" style="height:40px;padding:5px;">
          <router-link to="/Login">login</router-link>
          <router-link to="/Register">register</router-link>
        </el-col>
      </el-col>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {},
  methods: {
    goToLogin () {
      this.$router.push('/Login')
    },
    goToHome () {
      this.$router.push('/')
    },
    goToMySelf () {
      this.$router.push('Login')
    }
  }
}
</script>

