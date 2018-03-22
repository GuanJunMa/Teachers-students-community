<template lang="html">
  <el-col span="24">
    <el-carousel :height="getHeight()">
        <el-carousel-item v-for="(item,index) in value" :key="item" @click.native="handleClick(index)">
          <img :src="item" style="width:100%;" class="img_class">
        </el-carousel-item>
      </el-carousel>
    </el-col>
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
      var h = window.innerWidth / 1920 * 1000
      return h + 'px'
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
