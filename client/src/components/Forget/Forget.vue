<template>
  <div>
    <div style="height:200px;">123</div>
    <div style="height:500px;">
      <el-form :model="formData" status-icon ref="formData" label-width="120px" class="login_item">
        <el-form-item label="手机号">
            <el-input placeholder="请输入手机号" v-model="formData.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input placeholder="请输入验证码" v-model="formData.sms_code">
            <el-button slot="append">获取验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="formData.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码确认">
            <el-input placeholder="请再次输入密码" type="password" v-model="formData.confirm" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Login()">确定</el-button>
        </el-form-item>
        <el-form-item>
          <router-link to="/Login">登录</router-link>
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
        phone: '',
        sms_code: '',
        password: '',
        confirm: ''
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

