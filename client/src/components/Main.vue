<template>
  <div>
     <Forget v-show="showForget"></Forget>
     <Register v-show="showRegister"></Register>
     <Login v-show="showLogin"></Login>
     <el-col v-show="!showLogin" :style="{width:'100%', height: height, backgroundImage:'url('+ backgroundImg + ')', margin: '0 auto','background-size':'100% 100%','background-repeat':'no-repeat'}"></el-col>
     <el-col v-show="!showLogin" :span="20" :offset="2" style="border:1px solid #606060;height:1000px;background:#fefefe;">
     </el-col>
  </div>
</template>
<script>
import backgroundImg from '../images/3.jpeg'
import Login from './Login/Login.vue'
import Register from './Register/Register.vue'
import Forget from './Forget/Forget.vue'
export default {
  components: {
    Login,
    Register,
    Forget
  },
  data () {
    return {
      backgroundImg: backgroundImg,
      height: '500px;'
    }
  },
  computed: {
    showLogin () {
      return this.$route.path === '/Login'
    },
    showRegister () {
      return this.$route.path === '/Register'
    },
    showForget () {
      return this.$route.path === '/Forget'
    }
  },
  mounted () {
    console.log(this.$route.path)
    console.log(document.documentElement.clientHeight)
    this.height = document.documentElement.clientHeight - 20 + 'px'
    // document.getElementById('foot').style.top = document.documentElement.clientHeight - 20 + 'px'
  },
  methods: {
  }
}
</script>
