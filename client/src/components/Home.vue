<template>
<div>
<Content style="margin-top:60px;"></Content>
</div>
</template>
<script>
import Content from './common/Content.vue'
export default {
  name: 'home',
  components: {
    Content
  },
  data () {
    return {
    }
  },
  mounted () {
    // console.log(document.documentElement.clientHeight)
    // this.height = document.documentElement.clientHeight - 20 + 'px'
  },
  methods: {
  }
}
</script>
