<template lang="html">
  <div id="plate">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Plate'
}
</script>
