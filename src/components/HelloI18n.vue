<template>
  <p><span>{{ $t('hello') }}</span></p>
</template>

<script>
export default {
  name: 'HelloI18n'
}
</script>

<!--<i18n>-->
<!--{-->
  <!--"en": {-->
    <!--"hello": "Hello i18n in SFC!"-->
  <!--}-->
<!--}-->
<!--</i18n>-->

<style lang="scss" scoped>
  p {
    > span {
      color: green;
    }
  }
</style>
