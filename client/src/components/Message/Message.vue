<template>
  <div>
    <div style="height:100px;">&nbsp;</div>
    <el-col span="18" :offset="3" style="border:1px solid #E4E7ED;">
      <el-col span="16">
        <el-tabs v-model="this.activeName" type="card" @tab-click="handleClick">
          
          <el-tab-pane label="C语言" name="first" style="text-align:left;">
            <el-col v-for="item in getC" :key="item.id" style="margin-left:5%;width:90%;">
              <el-col style="border:1px solid;line-height:50px;font-weight:bold;padding-left:10px;">{{item.title}}</el-col>
              <el-col style="border:1px solid;color:#606266;padding:10px;">{{item.content}}</el-col>
              <el-col style="height:50px;">&nbsp;</el-col>
            </el-col>
          </el-tab-pane>

          <el-tab-pane label="高等数学" name="second" style="text-align:left;">
            <el-col v-for="item in getMath" :key="item.id" style="margin-left:5%;width:90%;">
              <el-col style="border:1px solid;line-height:50px;font-weight:bold;padding-left:10px;">{{item.title}}</el-col>
              <el-col style="border:1px solid;color:#606266;padding:10px;">{{item.content}}</el-col>
              <el-col style="height:50px;">&nbsp;</el-col>
            </el-col>
          </el-tab-pane>

          <el-tab-pane label="通信原理" name="third" style="text-align:left;">
            <el-col v-for="item in getCommunicatopn" :key="item.id" style="margin-left:5%;width:90%;">
              <el-col style="border:1px solid;line-height:50px;font-weight:bold;padding-left:10px;">{{item.title}}</el-col>
              <el-col style="border:1px solid;color:#606266;padding:10px;">{{item.content}}</el-col>
              <el-col style="height:50px;">&nbsp;</el-col>
            </el-col>
          </el-tab-pane>

          <el-tab-pane label="大学英语" name="fourth" style="text-align:left;">
            <el-col v-for="item in getEnglish" :key="item.id" style="margin-left:5%;width:90%;">
              <el-col style="border:1px solid;line-height:50px;font-weight:bold;padding-left:10px;">{{item.title}}</el-col>
              <el-col style="border:1px solid;color:#606266;padding:10px;">{{item.content}}</el-col>
              <el-col style="height:50px;">&nbsp;</el-col>
            </el-col>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col span="7" :offset="1" style="border:1px solid #DCDFE6;">
        <el-col style="height:150px;"><img src="../../images/1.jpg" width="100%" height="100%" alt=""></el-col>
        <el-col style="height:500px;">
          <el-col style="height:150px;">
            <el-col style="line-height:50px;font-weight:bold;text-align:left;padding-left:10px;color:#E6A23C;">重要通知！</el-col>
            <el-col style="height:100px;text-align:left;padding-left:10px;font-size:14px;">下周三下午三点，南体育场进行体育测试，请大家准时检录。</el-col>
          </el-col>
          <el-col style="height:150px;">
            <el-col style="line-height:50px;font-weight:bold;text-align:left;padding-left:10px;color:#E6A23C;">重要通知！</el-col>
            <el-col style="height:100px;text-align:left;padding-left:10px;font-size:14px;">下周四上午三四两节课将进行高数期中测评。请大家做好复习准备。</el-col>
          </el-col>
          <el-col style="height:500px;"></el-col>
        </el-col>
      </el-col>
    </el-col>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      formData: {
        name: '',
        password: ''
      },
      cList: [],
      mathList: [],
      englishList: [],
      communicationsList: []
    }
  },
  mounted () {
    this.getList('cList')
    this.getList('englishList')
    this.getList('communicationsList')
    this.getList('mathList')
  },
  computed: {
    showLogin () {
      return this.$route.path === '/Login'
    },
    getC() {
      return this.cList
    },
    getMath() {
      return this.mathList
    },
    getEnglish() {
      return this.englishList
    },
    getCommunicatopn() {
      return this.communicationsList
    }
  },
  methods: {
    handleClick() {},
    getList(subject) {
      var self = this;
      this.$http.get("http://displaydata.cn").then(
        successData => {
          switch (subject) {
            case 'cList':
              self.cList = successData.body.cList
              break;
            case 'mathList':
              self.mathList = successData.body.mathList
              break;
            case 'englishList':
              self.englishList = successData.body.englishList
              break;
            case 'communicationsList':
              self.communicationsList = successData.body.communicationsList
              break;
          
            default:
              break;
          }
        },
        fileData => {
          console.log(fileData);
        }
      );
    },
    Login() {
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

