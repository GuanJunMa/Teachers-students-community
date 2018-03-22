<template>
  <div>
    <div style="height:100px;"></div>
    <el-col span="20" :offset="2" style="border:1px solid;">
      <el-col span="6">
        <el-col style="height:20px;">&nbsp;</el-col>
        <el-col span="20" :offset="2" style="height:200px;">
          <img src="../../images/2.jpeg" width="100%;" height="100%;" alt="">
        </el-col>
        <el-col span="20" :offset="2">time911</el-col>
        <el-col span="20" :offset="2" style="border-top:1px solid;margin-top:20px;">&nbsp;</el-col>
        <el-col span="20" :offset="2" style="height:500px;border:1px solid;"></el-col>

        <el-col span="20" :offset="2">其他方面管理</el-col>
        <el-col span="20" :offset="2" style="border-top:1px solid;margin-top:20px;">&nbsp;</el-col>
        <el-col span="20" :offset="2" style="height:500px;border:1px solid;"></el-col>
      </el-col>
      <el-col span="18" style="background:green;height:500px;"></el-col>
    </el-col>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formData: {
        name: '',
        password: ''
      }
    }
  },
  mounted () {
    console.log(this.$route.path)
  },
  computed: {
    showLogin () {
      return this.$route.path === '/Login'
    }
  },
  methods: {
    Login () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
  .login_item {
    width: 450px;
    margin: 0 auto;
  }
</style>

