<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<!-- mobile -->
<style lang="scss" scoped>
  @include mobile-device {
    h1 {
      color: yellow;
    }
  }
</style>

<!-- pc -->
<style lang="scss" scoped>
  @include desktop-device {
    h1 {
      color: green;
    }
  }
</style>
