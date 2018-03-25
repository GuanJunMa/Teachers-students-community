<template>
  <div>
    <div style="height:100px;"></div>
    <el-col span="20" :offset="2" style="border:1px solid #DCDFE6;">
      <el-col span="6">
        <el-col style="height:20px;">&nbsp;</el-col>
        <el-col span="20" :offset="2" style="height:200px;">
          <img src="../../images/2.jpeg" width="100%;" height="100%;" alt="">
        </el-col>
        <el-col span="20" :offset="2" style="border-top:1px solid #E4E7ED;margin-top:20px;">&nbsp;</el-col>
        <el-col span="20" :offset="2" style="height:500px;border:1px solid #E4E7ED;">
          <el-col class="info_title">姓名:  <span>{{getMyself.name}}</span></el-col>
          <el-col class="info_title">类型:  <span>{{getMyself.type}}</span></el-col>
          <el-col class="info_title">学号/工号:  <span>{{getMyself.no}}</span></el-col>
          <el-col class="info_title">电话:  <span>{{getMyself.phone}}</span></el-col>
          <el-col class="info_title">专业:  <span>{{getMyself.major}}</span></el-col>
        </el-col>
        <el-col span="20" :offset="2" style="height:50px;">
        </el-col>
      </el-col>
      <el-col span="18" style="height:500px;"></el-col>
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
      },
      myselfData: {}
    }
  },
  mounted () {
    console.log(this.$route.path)
    this.getMySelf()
  },
  computed: {
    showLogin () {
      return this.$route.path === '/Login'
    },
    getMyself() {
      return this.myselfData
    }
  },
  methods: {
    Login () {
      this.$router.push('/')
    },
    getMySelf() {
      var self = this;
      this.$http.get("http://displaydata.cn").then(
        successData => {
          self.myselfData = successData.body.myselfData;
        },
        fileData => {
          console.log(fileData);
        }
      );
    }
  }
}
</script>
<style scoped>
  .login_item {
    width: 450px;
    margin: 0 auto;
  }
  .info_title {
    text-align:left;
    line-height:30px;
    padding:10px;
    font-weight:bold;
  }
  span {
    font-size: 14px;
    margin-left: 5px;
    color: #606266;
  }
</style>

