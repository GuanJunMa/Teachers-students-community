<template>
  <div>
    <div style="height:200px;">123</div>
    <el-button type="primary">英语</el-button>
    <el-button type="primary">高数</el-button>
    <el-button type="primary">专业课</el-button>
    <el-button type="primary">体育</el-button>
    <el-button type="primary">劳动</el-button>
    <el-button type="primary">音乐</el-button>
    <el-col span="18" :offset="3" style="border:1px solid;">
      <el-col span="16" style="border:1px solid;">
        <el-col style="border:1px solid;height:150px;">12313</el-col>
        <el-col style="border:1px solid;height:200px;">12313</el-col>
        <el-col style="border:1px solid;height:200px;">12313</el-col>
        <el-col style="border:1px solid;height:200px;">12313</el-col>
      </el-col>
      <el-col span="7" :offset="1" style="border:1px solid;">
        <el-col style="border:1px solid;height:150px;"><img src="../../images/1.jpg" width="100%" height="100%" alt=""></el-col>
        <el-col style="border:1px solid;height:2000px;"></el-col>
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

