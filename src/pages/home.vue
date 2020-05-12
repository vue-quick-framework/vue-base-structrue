<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <EChartsWorld></EChartsWorld>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import EChartsWorld from '../components/echarts/世界地图点亮坐标/World'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    EChartsWorld
  }
}
</script>

<style lang="scss" scoped>
  // hello
  @include desktop-device {
    img {
      width: 500px;
    }
  }
  img {
    width: 50px;
  }
</style>
