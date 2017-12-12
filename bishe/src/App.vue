<template>
  <div id="app">
    <Head></Head>
    <Content></Content>
    <FloatFoot></FloatFoot>
    <Foot></Foot>
  </div>
</template>

<script>
import FloatFoot from './components/common/FloatFoot.vue'
import Foot from './components/common/Foot.vue'
import Head from './components/common/Head.vue'
import Content from './components/common/Content.vue'
export default {
  name: 'app',
  components: {
    FloatFoot,
    Foot,
    Head,
    Content
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
