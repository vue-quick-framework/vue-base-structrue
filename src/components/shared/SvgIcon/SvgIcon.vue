<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners"></div>
  <svg v-else class="svg-icon" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
// import { isExternal } from '@/utils/validate'
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    isExternal () {
      return /^(https?:|mailto:|tel:)/.test(this.icon)
    },
    iconName () {
      return `#icon-${this.icon}`
    },
    styleExternalIcon () {
      return {
        mask: `url(${this.icon}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.icon}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
  }
</style>
