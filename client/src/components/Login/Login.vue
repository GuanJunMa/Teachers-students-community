<template>
  <div>
    <div style="height:200px;">123</div>
    <div style="height:500px;">
      <el-form :model="formData" status-icon ref="formData" label-width="120px" class="login_item">
        <el-form-item label="UserName">
            <el-input placeholder="请输入用户名" v-model="formData.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="PassWord">
            <el-input placeholder="请输入密码" type="password" v-model="formData.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Login()">Login</el-button>
        </el-form-item>
        <el-form-item>
          <router-link to="/Register">register &nbsp;</router-link>
          <router-link to="/Forget">&nbsp; forget?</router-link>
        </el-form-item>
      </el-form>
    </div>
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

