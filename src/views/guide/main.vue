<template>
  <div id="guide-wrapper">
    <div class="main-page">
      <div class="text-wrapper">
        <h1>Atom Design</h1>
        <p>如果您喜欢可自定义的移动端组件库来开发你的产品，您可以选择Atom-Design。提供给Vue移动端开发者的一套简单、易用的组件库。</p>
        <div class="btn" @click="jumpMobile">立即体验</div>
      </div>
      <atom-model></atom-model>
    </div>
  </div>
</template>

<script type="text/javascript">
import atomModel from './atomModel.vue'
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
      .text-wrapper {
        float: right;
        h1 {
          display: none;
        }
      }
    }
  }
}

#guide-wrapper {
  .main-page {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 46px 0;
    box-sizing: border-box;
    .text-wrapper {
      float: right;
      min-width: 300px;
      max-width: 500px;
      margin-top: 80px;
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
        margin-top: 50px;
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
