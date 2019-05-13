<template>
  <div id="mobile-wrapper" class="clearfix">
    <img class="mobile-top" src="./../assets/img/mobile_top_bar.png" alt="mobile top bar">
    <iframe :src="`https://atom-design.github.io/mobile/#/${routerName}`" width="100%" height="600px" frameborder="0"></iframe>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['routerName']
}
</script>

<style lang="postcss" scoped>
  @media only screen and (max-width: 992px) {
    #mobile-wrapper {
      display: none;
    }
  }
  #mobile-wrapper {
    float: right;
    position: relative;
    width: 375px;
    height: 620px;
    border: 1px solid #f0f1f2;
    border-radius: 5px;
    overflow: hidden;
    background: #f0f1f2;
    box-sizing: border-box;
    .mobile-top {
      display: block;
      width: 100%;
      height: 20px;
      background: black;
      padding: 5px 20px;
      box-sizing: border-box;
    }
  }
</style>
