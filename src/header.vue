<template>
  <header id="header" class="clearfix">
    <a href="#/" id="logo">
      <img class="logo-icon" src="@/assets/img/logo.png" alt="">
      <span class="title">Atom Design</span>
    </a>
    <i class="iconfont menu-icon" @click="menuCtrl">&#xe790;</i>
    <div id="menu">
      <ul class="atom-menu clearfix" id="nav" role="menu">
        <li :class="{'select': selIdx === 0}" @click="selectTab(0, 'guide')">首页</li>
        <li :class="{'select': selIdx === 1}" @click="selectTab(1, 'home')">组件</li>
        <li @click="jumpGithub"><i class="iconfont">&#xe677;</i><span class="text">Github</span></li>
      </ul>
    </div>
    <popup-menu v-show="showMenu" @closeMenu="showMenu = false" @jumpRoute="selectTab" v-model="selIdx"></popup-menu>
  </header>
</template>

<script type="text/javascript">
import popupMenu from './components/popupMenu.vue'
export default {
  data () {
    return {
      showMenu: false,
      selIdx: ~~localStorage.selIdx || 0
    }
  },
  components: {
    popupMenu
  },
  mounted () {
    if (this.selIdx === 1) this.$router.replace({name: 'home'})
    else this.$router.replace({name: 'guide'})
  },
  methods: {
    selectTab (idx, routeName) {
      this.selIdx = idx
      localStorage.selIdx = idx
      this.$router.replace({name: routeName})
    },
    jumpGithub () {
      window.open('https://github.com/Reming960227/atom-design')
    },
    menuCtrl () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="postcss" scoped>
  @media only screen and (max-width: 768px) {
    #header #menu .atom-menu {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    #header .menu-icon {
      display: none;
    }
  }
  #header {
    position: relative;
    padding: 0 12px;
    box-shadow: 0 1px 2px #f0f1f2;
    box-sizing: border-box;
    #logo {
      float: left;
      width: 30%;
      white-space: nowrap;
      display: flex;
      align-items: center;
      .logo-icon {
        width: 40px;
        height: 40px;
      }
      .title {
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
        height: 64px;
        line-height: 64px;
        white-space: nowrap;
      }
    }
  }
  .menu-icon {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translate3d(0, -50%, 0);
    font-size: 32px;
  }
  #menu {
    float: right;
    width: 70%;
    .atom-menu {
      float: right;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      li {
        display: inline-block;
        min-width: 80px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        box-sizing: border-box;
        vertical-align: top;
        &:hover {
          color: #0099FF;
          border-bottom: 2px solid #0099ff;
        }
        &:nth-child(3) {
          .iconfont {
            font-size: 16px;
          }
          .text {
            margin-left: 5px;
            font-weight: bold;
            font-size: 14px;
          }
        }
      }
      li.select {
        color: #0099FF;
        border-bottom: 2px solid #0099ff;
      }
    }
  }
</style>
