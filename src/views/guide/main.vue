<template>
  <div id="guide-wrapper">
    <div class="main-page">
      <atom-model class="atom-model"></atom-model>
      <div class="text-wrapper">
        <h1>Atom Design</h1>
        <p>如果您喜欢可定制的移动端组件库来开发你的产品，您可以选择Atom-Design。提供给Vue移动端开发者的一套高效、灵活、易用的组件库。</p>
        <div class="btn-group">
           <div class="btn" @click="jumpMobile">立即体验</div>
             <div class="star" @click="jumpGithub"><i class="iconfont">&#xe677;</i>&nbsp;Star</div>
             <span class="star-num" v-text="starNum" v-show="starNum" @click="jumpStar"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import atomModel from '@/components/atomModel.vue'
export default {
  data () {
    return {
      starNum: null
    }
  },
  components: {
    atomModel
  },
  mounted () {
    const xhr = new XMLHttpRequest()
    xhr.open('get', ' https://api.github.com/repos/reming0227/atom-design', true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        this.starNum = JSON.parse(xhr.responseText).stargazers_count
      }
    }
    xhr.send()
  },
  methods: {
    jumpMobile () {
      window.open('https://atom-design.github.io/mobile/#/')
    },
    jumpGithub () {
      window.open('https://github.com/reming0227/atom-design')
    },
    jumpStar () {
      window.open('https://github.com/reming0227/atom-design/stargazers')
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
    padding: 30px 0;
    margin: 30px 50px;
    box-shadow: 0 0 20px #f0f1f2;
    &:hover {
      box-shadow: 0 0 20px #ccc;
    }
    border-radius: 5px;
    .text-wrapper {
      margin-right: 80px;
      padding: 50px 0 0 50px;
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
    overflow: hidden;
    .text-wrapper {
      float: left;
      min-width: 300px;
      max-width: 500px;
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
      .btn-group {
        margin-top: 30px;
        cursor: pointer;
        display: flex;
        align-items: center;
        .btn {
          width: 100px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          background: #0099FF;
          color: white;
          font-size: 14px;
          border-radius: 3px;
        }
        .star {
          .iconfont {
            font-size: 15px;
          }
          margin-left: 20px;
          color: #333;
          background: #f0f1f2;
          height: 32px;
          line-height: 32px;
          padding: 0 8px;
          border-radius: 3px;
          font-size: 14px;
          border: 1px solid #ccc;
          font-weight: bold;
          box-sizing: border-box;
        }
        .star-num {
          position: relative;
          margin-left: 12px;
          color: #333;
          background: #fafbfc;
          padding: 3px 5px;
          border-radius: 3px;
          border: 1px solid #ccc;
          font-size: 14px;
          font-weight: bold;
          box-sizing: border-box;
          &::before {
            content: " ";
            position: absolute;
            left: -5px;
            top: 50%;
            width: 10px;
            height: 10px;
            border: 1px solid #ccc;
            border-top: none;
            border-right: none;
            transform: translate3d(0, -50%, 0) rotate3d(0, 0, 1, 45deg);
            background: #fafbfc;
          }
        }
      }
    }
    .img-wrapper {
      width: 45%;
    }
  }
}
</style>
