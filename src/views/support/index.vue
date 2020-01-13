<template>
  <div class="support-wrapper">
    <div class="title">赞助研发</div>
    <div class="desc">
      atom-design采用MIT的开源协议，是完全免费的。 但是项目的长期维护是需要花费很多精力和时间，需要一定的资金支持才能持续项目的维护，您可以通过以下的方式支持我们。
    </div>
    <div class="title">赞助方式</div>
    <ul class="support-list">
      <span class="support-item zfb"><i class="iconfont">&#xe665;<img class="zfb-qrcode" src="../../assets/img/zfb_qrcode.jpg" alt="zfb-qrcode"></i></span>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
  @media only screen and (max-width: 768px) {
    .support-wrapper {
      width: 85%;
    }
  }
  @media only screen and (min-width: 768px) {
    .support-wrapper {
      width: 60%;
      .patreon {
        position: relative;
        &:hover::after {
          display: block!important;
        }
        &::after {
          display: none;
          content: 'jump to patreon';
          position: absolute;
          top: 60px;
          left: -20px;
          font-size: 15px;
          color: #e85b46;
          white-space: nowrap;
        }
      }
    }
  }
  .support-wrapper {
    padding: 0 24px 24px;
    height: 100vh;
    overflow: auto;
    .title {
      font-size: 18px;
      line-height: 30px;
      font-weight: bold;
      margin-top: 28px;
    }
    .desc {
      font-size: 14px;
      line-height: 30px;
    }
    .support-title {
      font-size: 18px;
      line-height: 32px;
    }
    .support-list {
      margin: 20px 0 0 10px;
      .support-item {
        display: inline-block;
        cursor: pointer;
        vertical-align: top;
      }
      .zfb {
        position: relative;
        color: #06b4fd;
        height: 40px;
        line-height: 40px;
        i {
          font-size: 36px;
        }
        .zfb-qrcode {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 150%;
          width: 200px;
          height: 200px;
          box-shadow: 0 0 10px #ccc;
          transition: opacity 0.3s ease;
        }
        &:hover .zfb-qrcode {
          opacity: 1;
        }
      }
    }
  }
</style>
