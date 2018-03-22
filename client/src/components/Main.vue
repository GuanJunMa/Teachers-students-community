<template>
  <div>
     <Forget v-show="showForget"></Forget>
     <Register v-show="showRegister"></Register>
     <Login v-show="showLogin"></Login>
     <el-col v-show="showHome" :style="{width:'100%', height: height, backgroundImage:'url('+ backgroundImg + ')', margin: '0 auto','background-size':'100% 100%','background-repeat':'no-repeat'}"></el-col>
     <el-col v-show="showHome" span="20" :offset="2" style="height:1000px;background:#fefefe;">
       
       <el-col style="height:400px;" v-for="item in getList" :key="item.id" class="content-item">
         <el-col style="height:50px;">&nbsp;</el-col>
         <el-col style="line-height:50px;font-size:20px;font-weight:bold;text-align:left;">{{item.title}}</el-col>
         <el-col span="10" style="height:300px;"><img :src="getImage(item.image)" width="100%;" height="100%;" alt=""></el-col>
         <el-col span="14">
           <el-col span="22" :offset="1" style="line-height:50px;text-align:left;font-weight:bold;"><a target="_blank" :href="item.href">{{item.contentTitle}}</a></el-col>
           <el-col span="22" :offset="1" style="border-top:1px solid #909399;">&nbsp;</el-col>
           <el-col span="22" :offset="1" style="height:180px;text-align:left;">{{item.content}}</el-col>
           <el-col span="22" :offset="1" style="border-top:1px solid #909399;line-height:50px;text-align:left;font-size:14px;color:#909399;">更新于：{{item.time}} </el-col>
         </el-col>
       </el-col>

     </el-col>
  </div>
</template>
<script>
import MockData from '../util/mock'
import computer from '../images/computer.png'
import schoolBrithday from '../images/schoolBrithday.png'
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
      height: '500px;',
      computer: computer,
      schoolBrithday: schoolBrithday,
      homeList: []
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
    },
    showHome () {
      return this.$route.path === '/'
    },
    getList () {
      return this.homeList
    }
  },
  mounted () {
    console.log(this.$route.path)
    this.getHomeList()
    console.log(document.documentElement.clientHeight)
    this.height = document.documentElement.clientHeight - 20 + 'px'
    // document.getElementById('foot').style.top = document.documentElement.clientHeight - 20 + 'px'
  },
  methods: {
    getImage (name) {
      switch (name) {
        case 'computer':
          return this.computer
          break
        case 'schoolBrithday':
          return this.schoolBrithday
          break
        default:
          break
      }
    },
    getHomeList () {
      var self = this
      this.$http.get('http://displaydata.cn').then(
      (successData) => {
        self.homeList = successData.body.homeData
      },
      (fileData) => {
        console.log(fileData)
      })
    }
  }
}
</script>
<style scoped>
  .content-item a {
    color: #2c3e50;
  }
</style>

