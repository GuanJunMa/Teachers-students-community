<template>
  <div>
     <!-- <el-col :style="{backgroundImage:'url(' + backgroundImg + ')'}"> -->
     <el-col :style="{width:'100%', height: '500px', backgroundImage:'url('+ backgroundImg + ')', margin: '0 auto','background-size':'100% 100%','background-repeat':'no-repeat'}">
       <!-- <img style="height:550px;width:100%;" src="../images/background.jpg"/> -->
     </el-col>
     <el-col :span="20" :offset="2" style="border:1px solid #606060;height:1000px;background:#fefefe;"></el-col>
     <el-col style="height:100px;background:#606060;border-bottom:1px solid #878D99;"></el-col>
     <el-col style="height:40px;background:#606060;"></el-col>
  </div>
</template>
<script>
import backgroundImg from '../images/background.jpg'
export default {
  data () {
    return {
      backgroundImg: backgroundImg,
      height: '500px;'
    }
  }
}
</script>
