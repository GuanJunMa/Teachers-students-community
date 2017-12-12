<template>
  <div>
     <el-col :style="{width:'100%', height: height, backgroundImage:'url('+ backgroundImg + ')', margin: '0 auto','background-size':'100% 100%','background-repeat':'no-repeat'}"></el-col>
     <el-col :span="20" :offset="2" style="border:1px solid #606060;height:1000px;background:#fefefe;"></el-col>
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
  },
  mounted () {
    console.log(document.documentElement.clientHeight)
    this.height = document.documentElement.clientHeight - 20 + 'px'
    // document.getElementById('foot').style.top = document.documentElement.clientHeight - 20 + 'px'
  }
}
</script>
