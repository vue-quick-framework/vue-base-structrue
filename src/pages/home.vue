<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloI18n/>
    <SvgIcon icon="search"></SvgIcon>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloI18n from '@/components/HelloI18n.vue'
import '@/components/shared/SvgIcon'

export default {
  name: 'Home',
  components: {
    HelloI18n
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
