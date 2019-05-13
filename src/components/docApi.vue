<template>
  <div class="doc-api">
    <h1 v-if="isTitle">API</h1>
    <div class="desc" v-text="desc"></div>
    <table class="api-table">
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in apiList" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.desc}}</td>
          <td>{{item.type}}</td>
          <td>{{item.default}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      apiList: {
        type: Array
      },
      desc: {
        type: String
      },
      isTitle: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .doc-api {
    margin-top: 40px;
    padding:  0 24px;
    overflow-x: auto;
    .desc {
      font-size: 15px;
      padding: 0 0 20px;
      line-height: 24px;
    }
    .api-table {
      width: 100%;
      border-spacing: 0;
      border: 1px solid #f0f1f2;
      color: #555;
      font-size: 15px;
      th, td {
        border: 1px solid #f0f1f2;
      }
      thead {
        background: #fcfcfc;
        border-spacing: 0;
        font-weight: 500;
        th {
          height: 50px;
        }
      }
      tbody {
        font-size: 14px;
        td {
          padding: 20px;
        }
      }
      td {
        text-align: center;
        line-height: 28px;
        letter-spacing: 0.5px;
      }
    }
  }
</style>
