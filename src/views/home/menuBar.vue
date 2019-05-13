<template>
  <aside class="menu-scroll">
    <ul>
      <li v-for="(item, index) in menuList" :key="index">
        <div class="menu-item" :class="{'active': dropIdx === index}" @mouseover="select = index" @mouseout="select = null" @click="jumpRouter(item.routeName, index)">
          <span v-text="item.text"></span>
        </div>
        <div class="drop-list" v-for="(el, idx) in item.childs" :key="idx">
          <div class="drop-item" :class="{'active': secSelect === `${index}${idx}` && !el.isChild}" @click="jumpSecMenu(el.routeName, `${index}${idx}`, el.isChild)">
            <span class="title" v-text="el.text"></span>
            <ul class="comp-list" v-if="el.isChild">
              <li class="comp-item" v-for="(ch, i) in el.childs" :key="i" v-text="ch.text" @click.stop="chooseComp(ch, idx.toString() + i)" :class="{'active': chooseIdx === `${idx}${i}`}"></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script type="text/javascript">
import menuData from './menuData'
export default {
  data () {
    return {
      menuList: menuData,
      select: null,
      dropIdx: 0,
      secSelect: null,
      chooseIdx: null
    }
  },
  methods: {
    chooseComp (el, idx) {
      this.secSelect = null
      this.dropIdx = null
      this.chooseIdx = idx
      this.$emit('showCodeContent', el)
    },
    jumpSecMenu (routeName, index, isHandle) {
      if (routeName) {
        this.dropIdx = null
        this.chooseIdx = null
        this.secSelect = index
        this.$router.replace({name: routeName})
      }
    },
    jumpRouter (routeName, index) {
      const isJump = routeName !== void 0
      if (!isJump) return
      this.dropIdx = this.dropIdx === index ? null : index
      this.chooseIdx = null
      this.secSelect = null
      this.$router.replace({name: routeName})
    }
  }
}
</script>

<style lang="postcss" scoped>
  @media only screen and (max-width: 768px) {
    .menu-scroll {
      height: 100%;
      overflow-y: auto;
      position: absolute;
      left: -230px;
    }
  }
  @media only screen and (min-width: 768px) {
    .menu-scroll {
      cursor: pointer;
    }
  }
  .menu-scroll {
    float: left;
    width: 20%;
    min-width: 230px;
    box-sizing: border-box;
    ul {
      border-right: 1px solid #f0f1f2;
      li {
        font-size: 16px;
        line-height: 50px;
        box-sizing: border-box;
        &:first-child .menu-item:hover, &:nth-child(2) .drop-list .drop-item:hover{
          color: #0099ff!important;
        }
        .menu-item::after, .drop-item::after, .comp-item::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          width: 2px;
          height: 100%;
          transform: scale3d(1, 0, 1);
          background: #0099ff;
          transition: all 300ms ease;
        }
        .menu-item.active::after, .drop-item.active::after, .comp-item.active::after {
          transform: scale3d(1, 1, 1);
        }
        .menu-item {
          position: relative;
          padding-left: 40px;
        }
        .active {
          color: #0099ff;
          background: #e6f7ff;
        }
        .drop-list {
          overflow: hidden;
          color: #333;
          .drop-item {
            position: relative;
          }
          .title {
            padding-left: 80px;
            height: 40px;
            line-height: 40px;
          }
          .comp-list {
            .comp-item {
              position: relative;
              padding-left: 120px;
              font-size: 14px;
              &:hover {
                color: #0099ff;
              }
            }
            .choose-active {
              color: #0099ff;
            }
          }
        }
      }
      .select-active {
        background: DeepSkyBlue;
      }
    }
  }
</style>
