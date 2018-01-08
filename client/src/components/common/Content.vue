<template>
  <div style="background-color:#fefefe;height:auto;">
    <HeadBanner></HeadBanner>
    <News></News>
  </div>
</template>
<script>
import HeadBanner from './HeadBanner'
import News from './News'
export default {
  name: 'Content',
  components: {
    HeadBanner,
    News
  }
}
</script>

