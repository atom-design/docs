<template>
  <div id="mobile-model">
    <svg></svg>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {}
  },
  methods: {
    animLogo () {}
  }
}
</script>

<style lang="postcss" scoped>
#mobile-model {
  margin: 80px 100px 0 0;
  #logo_img {
    width: 300px;
    height: 300px;
    // animation: logoAnim 3s infinite linear alternate;
  }
}
/* @keyframes logoAnim {
  from {
    transform: rotate3d(1, 1, 0, 0deg);
  },
  to {
    transform: rotate3d(1, 1, 0, 30deg);
  }
} */
</style>
