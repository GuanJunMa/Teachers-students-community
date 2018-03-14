<template>
  <div>
    <div style="height:200px;"></div>
    <el-col span="18" :offset="3">
      <el-col span="16" style="height:300px;">
        <el-carousel :height="getHeight()">
          <el-carousel-item v-for="(item,index) in value" :key="item" @click.native="handleClick(index)">
            <img :src="item" style="width:100%;" class="img_class">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col span="8" style="height:300px;">
        <el-col style="line-height:150px;border:1px solid;">1</el-col>
        <el-col style="line-height:150px;border:1px solid;">2</el-col>
      </el-col>
      <el-col style="line-height:150px;">
        <el-col span="8" style="border:1px solid;">1</el-col>
        <el-col span="8" style="border:1px solid;">2</el-col>
        <el-col span="8" style="border:1px solid;">3</el-col>
      </el-col>

      <!-- 具体内容 -->
      <el-col style="height:300px;">
        <el-col span="16" style="border:1px solid;">
          <el-col style="border:1px solid;height:50px;">xxxxxxx</el-col>
          <!-- 具体内容 -->
          <el-col style="border:1px solid;height:200px;">
            <el-col span="8" style="border:1px solid;height:200px;"><img src="../../images/1.jpg" width="100%" height="100%" alt=""></el-col>
            <el-col span="16" style="border:1px solid;height:200px;">
              <el-col style="border:1px solid;height:50px;">x</el-col>
              <el-col style="border:1px solid;height:120px;">x</el-col>
              <el-col style="border:1px solid;height:30px;">x</el-col>
            </el-col>
          </el-col>
          <el-col style="border:1px solid;height:50px;">xxxxxxx</el-col>
        </el-col>
        <el-col span="8" style="border:1px solid;">
          <el-col style="border:1px solid;height:50px;">x</el-col>
          <el-col style="border:1px solid;height:200px;"><img src="../../images/1.jpg" width="100%" height="100%" alt=""></el-col>
          <el-col style="border:1px solid;height:50px;">x</el-col>
        </el-col>
      </el-col>

      <!-- 具体内容 -->
      <el-col style="height:300px;">
        <el-col span="16" style="border:1px solid;">
          <el-col style="border:1px solid;height:50px;">xxxxxxx</el-col>
          <!-- 具体内容 -->
          <el-col style="border:1px solid;height:200px;">
            <el-col span="8" style="border:1px solid;height:200px;"><img src="../../images/1.jpg" width="100%" height="100%" alt=""></el-col>
            <el-col span="16" style="border:1px solid;height:200px;">
              <el-col style="border:1px solid;height:50px;">x</el-col>
              <el-col style="border:1px solid;height:120px;">x</el-col>
              <el-col style="border:1px solid;height:30px;">x</el-col>
            </el-col>
          </el-col>
          <el-col style="border:1px solid;height:50px;">xxxxxxx</el-col>
        </el-col>
        <el-col span="8" style="border:1px solid;">
          <el-col style="border:1px solid;height:50px;">x</el-col>
          <el-col style="border:1px solid;height:200px;"><img src="../../images/1.jpg" width="100%" height="100%" alt=""></el-col>
          <el-col style="border:1px solid;height:50px;">x</el-col>
        </el-col>
      </el-col>

    </el-col>
  </div>
</template>
<script>
import banner from '../../images/1.jpg'
import banner2 from '../../images/2.jpeg'
import banner3 from '../../images/3.jpeg'
export default {
  name: 'HeadBanner',
  data () {
    return {
      value: [banner, banner2, banner3]
    }
  },
  methods: {
    getHeight () {
      return 300 + 'px'
    },
    handleClick (index) {
    //   if (index === 0) {
    //     this.$router.push('content?path=/static/content/content_0.html')
    //   }
    //   if (index === 1) {
    //     this.$router.push('content?path=/static/content/content_3.html')
    //   }
    //   if (index === 2) {
    //     this.$router.push('content?path=/static/content/content_2.html')
    //   }
    }
  }
}
</script>
<style scoped>
.img_class {}

.img_class:hover {
  cursor: pointer;
}
</style>

