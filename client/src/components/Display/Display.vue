<template>
  <div>
    <div style="height:100px;">123</div>
    <el-col span="12" :offset="6">

      <el-col style="height:670px;" class="content-item" v-for="item in getList" :key="item.id">
        <el-col class="display_title" style="line-height:50px;text-align:left;font-weight:bold;font-size: 18px;"><a target="_blank" :href="item.href">{{item.title}}</a></el-col>
        <el-col style="border-top:1px solid #EBEEF5;height:20px;"></el-col>
        <el-col style="height:100px;text-align:left;">{{item.content}}</el-col>
        <el-col style="height:400px;"><img :src="getImage(item.image)" width="100%" height="100%" alt=""></el-col>
        <el-col style="line-height:50px;text-align:left;font-size:14px;color:#909399;">更新于：<span>{{item.time}}</span>  评分：<span>{{item.grade}}</span></el-col>
        <el-col style="height:50px;">&nbsp;</el-col>
      </el-col>
    </el-col>
  </div>
</template>
<script>
import MockData from "../../util/mock";
import vue from "../../images/vue.png";
import blockchain from "../../images/blockchain.png";
import go from "../../images/go.png";
export default {
  data() {
    return {
      displayList: [],
      formData: {
        name: "",
        password: ""
      },
      vue: vue,
      blockchain: blockchain,
      go: go
    };
  },
  mounted() {
    console.log(this.$route.path);
    this.getDisplayList();
  },
  computed: {
    showLogin() {
      return this.$route.path === "/Login";
    },
    getList() {
      return this.displayList;
    }
  },
  methods: {
    Login() {
      this.$router.push("/");
    },
    getDisplayList() {
      var self = this;
      this.$http.get("http://displaydata.cn").then(
        successData => {
          self.displayList = successData.body.displayData;
        },
        fileData => {
          console.log(fileData);
        }
      );
    },
    getImage(name) {
      switch (name) {
        case "vue":
          return this.vue;
          break;
        case "blockchain":
          return this.blockchain;
          break;
        case "go":
          return this.go;
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style scoped>
.login_item {
  width: 450px;
  margin: 0 auto;
}

.content-item a {
  color: #2c3e50;
}
</style>

