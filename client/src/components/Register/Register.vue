<template>
  <div>
    <div style="height:200px;">123</div>
    <div style="height:700px;">
      <el-form :model="formData" status-icon ref="formData" label-width="120px" class="login_item">
        <el-form-item label="Phone">
            <el-input placeholder="请输入手机号" v-model="formData.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="SMS_Code">
          <el-input placeholder="请输入验证码" v-model="formData.sms_code">
            <el-button slot="append">获取验证码</el-button>
          </el-input>
        </el-form-item>

        <el-form-item label="Type">
          <el-radio v-model="radio" label="1">学生</el-radio>
          <el-radio v-model="radio" label="2">老师</el-radio>
        </el-form-item>
        <el-form-item label="Stu_ID/Tea_ID">
            <el-input placeholder="请输入学号/工号" v-model="formData.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Name">
            <el-input placeholder="请输入姓名" v-model="formData.phone" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="Password">
            <el-input placeholder="请输入密码" v-model="formData.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Confirm">
            <el-input placeholder="请再次输入密码" type="password" v-model="formData.confirm" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Login()">Register</el-button>
        </el-form-item>
        <el-form-item>
          <router-link to="/Login">Login</router-link>
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
      },
      radio: ''
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

