<template>
  <div class="support-wrapper">
    <div class="title">赞助研发</div>
    <div class="desc">
      atom-design采用MIT的开源协议，是完全免费的。 但是项目的长期维护是需要花费很多精力和时间，需要一定的资金支持才能持续项目的维护，您可以通过一下的方式支持我们。
    </div>
    <div class="title">赞助方式</div>
    <ul class="support-list">
        <a href="https://paypal.me/remingchan" target="_blank" class="support-item"><img src="../../assets/img/paypal.png" alt="paypal" width="100%" height="100%"></a>
        <span class="support-item zfb"><i class="iconfont">&#xe665;<img class="zfb-qrcode" src="../../assets/img/zfb_qrcode.jpg" alt="zfb-qrcode"></i></span>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
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
      margin-top: 10px;
      .support-item {
        display: inline-block;
        width: 100px;
        cursor: pointer;
      }
      .zfb {
        position: relative;
        color: #06b4fd;
        margin-left: 20px;
        i {
          font-size: 30px;
        }
        .zfb-qrcode {
          display: none;
          position: absolute;
          top: 0;
          left: 50px;
          width: 200px;
          height: 200px;
          box-shadow: 0 0 10px #ccc;
        }
        &:hover .zfb-qrcode {
          display: block;
        }
      }
    }
  }
</style>
