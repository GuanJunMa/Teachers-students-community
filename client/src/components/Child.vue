<template>
  <div>
    <p>this page is child</p>
    <p>props:{{message}}</p>
    <el-button @click="sendMessage">传值到父组件</el-button>
  </div>
</template>
<script>
export default {
  props: ['message'],
  methods: {
    sendMessage () {
      this.$emit('childMessage', 'this is a message from child')
    }
  }
}
</script>

