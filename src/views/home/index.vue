<template>
  <div id="home-wrapper" class="clearfix">
    <div class="home-content">
      <div class="menu-ctrl" @click="ctrlMenu">
        <i class="iconfont">&#xe790;</i>
      </div>
      <div class="pc-wrapper">
        <menu-bar class="menu" slot="navbar" @showCodeContent="showContent"></menu-bar>
        <section class="content-wrapper clearfix" slot="content">
          <router-view class="doc-info"/>
        </section>
      </div>
      <drawer class="drawer" v-model="showMenu">
        <menu-bar class="menu" slot="navbar" @showCodeContent="showContent"></menu-bar>
        <section class="content-wrapper clearfix" slot="content">
          <router-view class="doc-info"/>
        </section>
      </drawer>
    </div>
  </div>
</template>

<script type="text/javascript">
import menuBar from './menuBar.vue'
import drawer from '../../components/drawer'
export default {
  name: 'home',
  data () {
    return {
      showMenu: false,
      showIdContent: null
    }
  },
  components: {
    menuBar,
    drawer
  },
  methods: {
    ctrlMenu () {
      this.showMenu = !this.showMenu
    },
    showContent (itemInfo) {
      this.$router.replace({name: itemInfo.routeName})
    }
  }
}
</script>

<style lang="postcss" scoped>
  @media only screen and (max-width: 768px) {
    .menu-ctrl {
      position: fixed;
      left: 0;
      top: 75px;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      box-shadow: 0 0 5px #ccc;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      background: white;
      z-index: 3000;
      i {
        font-size: 26px;
        color: #666;
      }
    }
    .drawer {
      display: block;
    }
    .pc-wrapper {
      display: none;
    }
    .content-wrapper {
      width: 100%!important;
      max-width: none!important;
    }
  }
  @media only screen and (min-width: 768px) {
    .menu-ctrl {
      display: none;
    }
    .drawer {
      display: none;
    }
    .pc-wrapper {
      display: block;
    }
  }
  #home-wrapper {
    .home-content {
      height: calc(100vh - 99px);
      padding-top: 35px;
      .drawer {
        height: 100%;
      }
      .content-wrapper {
        height: 100%;
        overflow-y: auto;
        float: left;
        width: 80%;
        max-width: calc(100% - 230px);
        box-sizing: border-box;
      }
    }
  }
</style>
