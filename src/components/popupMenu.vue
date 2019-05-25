<template>
  <div class="menu-popup">
    <ul class="popup-content">
      <li class="menu-item" :class="{'select': selIdx === 0}" @click="selectTab(0, 'guide')">首页</li>
      <li class="menu-item" :class="{'select': selIdx === 1}" @click="selectTab(1, 'home')">组件</li>
      <li class="menu-item" @click="jumpGithub">Github</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['value'],
    computed: {
      selIdx () {
        return this.value
      }
    },
    methods: {
      jumpGithub () {
        window.open('https://github.com/reming0227/atom-design')
      },
      selectTab (idx, routeName) {
        this.$emit('jumpRoute', idx, routeName)
        this.$emit('closeMenu')
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @media only screen and (min-width: 768px) {
    .menu-popup {
      display: none;
    }
  }
  .menu-popup {
    position: absolute;
    right: 10px;
    top: 58px;
    width: 150px;
    .popup-content {
      position: relative;
      box-shadow: 0 0 5px #ccc;
      background: white;
      font-size: 18px;
      color: #333;
      border-radius: 5px;
      background: white;
      z-index: 10;
      .menu-item {
        height: 45px;
        line-height: 45px;
        text-align: center;
      }
      .menu-item {
        border-bottom: 1px solid #f0f1f2;
      }
      .menu-item:last-child {
        border-bottom: none;
      }
      .select {
        color: #0099FF;
        border-right: 2px solid #0099ff;
      }
      &::before {
        content: ' ';
        position: absolute;
        top: -2px;
        right: 20px;
        transform: rotate3d(0, 0, 1, 45deg) translate3d(0, -50%, 0);
        border-left: 1px solid #ccc;
        width: 12px;
        height: 12px;
        background: white;
      }
    }
  }
</style>
