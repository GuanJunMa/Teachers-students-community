<template>
  <div>
    <div style="height:200px;">123</div>
    <el-col span="12" :offset="6" style="border:1px solid;">
      <el-col style="border:1px solid;height:600px;">
        <el-col style="border:1px solid;height:50px;">title</el-col>
        <el-col style="border:1px solid;height:100px;">content</el-col>
        <el-col style="border:1px solid;height:400px;"><img src="../../images/1.jpg" width="100%" height="100%" alt=""></el-col>
        <el-col style="border:1px solid;height:50px;">time</el-col>
      </el-col>
      <el-col style="border:1px solid;height:600px;">
        <el-col style="border:1px solid;height:50px;">title</el-col>
        <el-col style="border:1px solid;height:100px;">content</el-col>
        <el-col style="border:1px solid;height:400px;"><img src="../../images/1.jpg" width="100%" height="100%" alt=""></el-col>
        <el-col style="border:1px solid;height:50px;">time</el-col>
      </el-col>
      <el-col style="border:1px solid;height:600px;">
        <el-col style="border:1px solid;height:50px;">title</el-col>
        <el-col style="border:1px solid;height:100px;">content</el-col>
        <el-col style="border:1px solid;height:400px;"><img src="../../images/1.jpg" width="100%" height="100%" alt=""></el-col>
        <el-col style="border:1px solid;height:50px;">time</el-col>
      </el-col>
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

