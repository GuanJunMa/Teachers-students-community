<template>
  <div>
    <div style="height:300px;">123</div>
    <div style="height:1000px;">
      <el-form :model="formData" status-icon ref="formData" label-width="120px" class="login_item">
        <el-form-item label="UserName">
            <el-input type="password" v-model="formData.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="PassWord">
            <el-input type="password" v-model="formData.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">Login</el-button>
        </el-form-item>
        <el-form-item>
          <router-link to="/Login">register</router-link>
          <router-link to="/Login">forget</router-link>
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
  methods: {}
}
</script>
<style scoped>
  .login_item {
    width: 450px;
    margin: 0 auto;
  }
</style>

