<template>
  <div class="introduce-wrapper">
    <div class="top-info">
      <img src="@/assets/img/logo.png" alt="logo" class="logo">
      <div class="title">Atom Design</div>
      <div class="title-desc">基于Vue2.0的移动端组件库</div>
    </div>
    <h1 class="title">简介</h1>
    <div class="desc">
      一套易用、CSS图标、可定制的组件库
    </div>
    <h1 class="title">考虑到的因素</h1>
    <div class="desc">
      <ul>
        <li>1、图标的考虑: 对于组件库自带的图标一开始是打算用svg, 但是考虑到性能, 使用到的图标并非很多, 后面决定还是直接用css绘制。</li>
        <li>2、对于组件设计的考虑: 我发现通过插槽的形式来设计组件是一件非常有趣的事情。 通过插槽来设计组件提供给开发者更多的自由空间, 这让开发者可以自己自定义DOM来实现想要的效果。</li>
        <li>3、对于自定义样式的考虑: 很多组件的API都提供了相关字段来修改默认的样式, 这使得开发者无需再费劲的去修改源文件的样式。</li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .introduce-wrapper {
    padding: 0 24px 24px;
    .top-info {
      .logo {
        display: block;
        margin: 0 auto;
      }
      .title {
        font-size: 26px;
        font-weight: bold;
        margin-top: 24px;
        text-align: center;
      }
      .title-desc {
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        color: #666;
      }
    }
    .title {
      font-size: 18px;
    }
    .desc {
      font-size: 14px;
      line-height: 30px;
    }
  }
</style>
