<template>
  <div>
     <Login v-show="showLogin"></Login>
     <el-col v-show="!showLogin" :style="{width:'100%', height: height, backgroundImage:'url('+ backgroundImg + ')', margin: '0 auto','background-size':'100% 100%','background-repeat':'no-repeat'}"></el-col>
     <el-col v-show="!showLogin" :span="20" :offset="2" style="border:1px solid #606060;height:1000px;background:#fefefe;">
     </el-col>
  </div>
</template>
<script>
import backgroundImg from '../images/3.jpeg'
import Login from './Login/Login.vue'
export default {
  components: {
    Login
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
