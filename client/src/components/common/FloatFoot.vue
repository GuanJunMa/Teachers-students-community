<template>
<div>
    <el-col id="foot" style="height:20px;position:fixed;background:#fefefe;text-align:left;"><span style="font-size:13px;">"A friend walk in when the rest of the world walks out." </span></el-col>
</div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    document.getElementById('foot').style.top = document.documentElement.clientHeight - 20 + 'px'
  }
}
</script>

