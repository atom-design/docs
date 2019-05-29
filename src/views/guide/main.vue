<template>
  <div id="guide-wrapper">
    <div class="main-page">
      <atom-model class="atom-model"></atom-model>
      <div class="text-wrapper">
        <h1>Atom Design</h1>
        <p>如果您喜欢可自定义的移动端组件库来开发你的产品，您可以选择Atom-Design。提供给Vue移动端开发者的一套简单、易用的组件库。</p>
        <div class="btn" @click="jumpMobile">立即体验</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import atomModel from '@/components/atomModel.vue'
export default {
  components: {
    atomModel
  },
  methods: {
    jumpMobile () {
      window.open('https://atom-design.github.io/mobile/#/')
    }
  }
}
</script>

<style lang="postcss" scoped>
@media only screen and (max-width: 768px) {
  #guide-wrapper {
    .main-page {
      height: 580px;
      padding: 0 50px;
      .text-wrapper {
        float: left;
        margin-top: 0!important;
        h1 {
          display: none;
        }
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .main-page {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: 0 70px;
    .text-wrapper {
      margin-right: 80px;
    }
    .atom-model {
      display: inline-block;
      margin: 100px 150px 0 0;
    }
  }
}

#guide-wrapper {
  .main-page {
    box-sizing: border-box;
    .text-wrapper {
      float: left;
      min-width: 300px;
      max-width: 500px;
      margin-top: 120px;
      width: 55%;
      h1 {
        margin-top: 0;
        font-size: 46px;
        line-height: 80px;
        color: #101010;
      }
      p {
        font-size: 18px;
        line-height: 36px;
        color: #314659;
      }
      .btn {
        margin-top: 20px;
        width: 100px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        background: #0099FF;
        color: white;
        font-size: 14px;
        border-radius: 6px;
        cursor: pointer;
      }
    }
    .img-wrapper {
      width: 45%;
    }
  }
}
</style>
