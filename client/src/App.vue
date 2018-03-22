<template>
  <div id="app">
    <NavHead></NavHead>
    <Plate></Plate>
    <FloatFoot></FloatFoot>
    <Foot></Foot>
  </div>
</template>

<script>
import FloatFoot from './components/common/FloatFoot.vue'
import Foot from './components/common/Foot.vue'
import NavHead from './components/common/NavHead.vue'
import Plate from './components/common/Plate.vue'
export default {
  name: 'app',
  components: {
    FloatFoot,
    Foot,
    NavHead,
    Plate
  },
  methods: {
    consoleMessage (data) {
      console.log(data)
    }
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
