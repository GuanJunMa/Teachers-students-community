<template>
  <div>
    <el-col style="height:100px;"></el-col>
    <el-col span="18" :offset="3">

      <el-col span="16" style="height:450px;">
        <el-carousel :height="getHeight()">
          <el-carousel-item v-for="(item,index) in value" :key="item" @click.native="handleClick(index)">
            <img :src="item" style="width:100%;height:450px;" class="img_class">
          </el-carousel-item>
        </el-carousel>
      </el-col>

      <el-col span="8" style="height:450px;">
        <el-col style="height:150px;border:1px solid #E4E7ED;" @click.native="handleClick(0)">
          <el-col style="line-height:50px;font-weight:bold;">如约而至，Java 10 正式发布</el-col>
          <el-col style="height:100px;color:#606266;font-size:14px;text-align:left;padding-left:10px;">期待已久，没有跳票的 Java 10 已正式发布！你可以通过这里下载 Java 10 正式版。Java 的版本发布周期变更为每六个月一次，并且承诺不会跳票。新的发布周期也会严格遵循时间点，将在每年的 3 月份和 9 月份发布。</el-col>
        </el-col>
        <el-col style="height:150px;border:1px solid #E4E7ED;" @click.native="handleClick(1)">
          <el-col style="line-height:50px;font-weight:bold;">Mozilla 正在 Firefox 中测试 DNS over HTTPs</el-col>
          <el-col style="height:100px;color:#606266;font-size:14px;text-align:left;padding-left:10px;">在短暂的测试期间，Mozilla 使用了 Cloudflare 的 DNS 解析服务，Cloudflare 是一家美国云服务公司，因此一些用户对此感到不爽，表示对于像 Cloudflare 这样的第三方公司可以看到几千人的 DNS 查询感到烦恼。</el-col>
        </el-col>
        <el-col style="height:150px;border:1px solid #E4E7ED;" @click.native="handleClick(2)">
          <el-col style="line-height:50px;font-weight:bold;">Ubuntu 18.04 默认壁纸已提供下载</el-col>
          <el-col style="height:100px;color:#606266;font-size:14px;text-align:left;padding-left:10px;">Ubuntu 18.04 “全新炫酷”的默认壁纸已正式公布，并已提供下载。到 2018 年 4 月 26 日，新的默认壁纸将会随着 Ubuntu 18.04 LTS 的发布而出现在数千万个桌面。</el-col>
        </el-col>
      </el-col>

      <el-col style="height:100px;"></el-col>

      <el-col style="height:400px;" v-for="item in getList" :key="item.id" @click.native="goToBlog(item.href)">
        <el-col :span="12">
          <el-col class="display_title" style="line-height:50px;font-weight:bold;font-size: 18px;"><a target="_blank" :href="item.href">{{item.title}}</a></el-col>
          <el-col style="height:200px;text-align:left;padding:10px;">{{item.content}}</el-col>
          <el-col style="line-height:50px;text-align:left;font-size:14px;color:#909399;padding-left:10px;">更新于：<span>{{item.time}}</span></el-col>
        </el-col>
        <el-col :span="12">
          <img src="../../images/1.jpg" width="100%;" height="300px;" alt="">
        </el-col>
        <el-col style="height:100px;"></el-col>
      </el-col>

      <el-col style="height:400px;" v-for="item in getList" :key="item.id">
        <el-col :span="12">
          <img src="../../images/1.jpg" width="100%;" height="300px;" alt="">
        </el-col>
        <el-col :span="12">
          <el-col class="display_title" style="line-height:50px;font-weight:bold;font-size: 18px;"><a target="_blank" :href="item.href">{{item.title}}</a></el-col>
          <el-col style="height:200px;text-align:left;padding:10px;">{{item.content}}</el-col>
          <el-col style="line-height:50px;text-align:left;font-size:14px;color:#909399;padding-left:10px;">更新于：<span>{{item.time}}</span></el-col>
        </el-col>
        <el-col style="height:100px;"></el-col>
      </el-col>

      <el-col style="height:400px;" v-for="item in getList" :key="item.id" @click.native="goToBlog(item.href)">
        <el-col :span="12">
          <el-col class="display_title" style="line-height:50px;font-weight:bold;font-size: 18px;"><a target="_blank" :href="item.href">{{item.title}}</a></el-col>
          <el-col style="height:200px;text-align:left;padding:10px;">{{item.content}}</el-col>
          <el-col style="line-height:50px;text-align:left;font-size:14px;color:#909399;padding-left:10px;">更新于：<span>{{item.time}}</span></el-col>
        </el-col>
        <el-col :span="12">
          <img src="../../images/1.jpg" width="100%;" height="300px;" alt="">
        </el-col>
        <el-col style="height:100px;"></el-col>
      </el-col>

    </el-col>
  </div>
</template>
<script>
import banner from '../../images/java10.png'
import banner2 from '../../images/mozilla.png'
import banner3 from '../../images/ubuntu.png'
export default {
  name: 'HeadBanner',
  data () {
    return {
      value: [banner, banner2, banner3],
      newsList: []
    }
  },
  mounted() {
    this.getNewsList()
  },
  computed: {
    getList() {
      return this.newsList
    }
  },
  methods: {
    getHeight () {
      return 450 + 'px'
    },
    getNewsList() {
      var self = this;
      this.$http.get("http://displaydata.cn").then(
        successData => {
          self.newsList = successData.body.newsList;
        },
        fileData => {
          console.log(fileData);
        }
      );
    },
    handleClick (index) {
      console.log(index)
      if (index === 0) {
        window.open('https://www.oschina.net/news/94402/java-10-released-mar-21')
      }
      if (index === 1) {
        window.open('https://www.oschina.net/news/94449/mozilla-is-testing-dns-over-https-support-in-firefox')
      }
      if (index === 2) {
        window.open('https://www.oschina.net/news/94484/ubuntu-18-04-default-wallpaper')
      }
    },
    goToBlog(href) {
      window.open(href)
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

