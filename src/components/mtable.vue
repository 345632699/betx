<template>
  <div class="my-table">
    <table>
      <thead>
      <tr>
        <th v-for="t in thead">{{ t }}</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in tableData">
<!--        <td>-->
<!--          <a href="https://bo.betx33.it/Member_balancedec_id_456.html">-->
<!--            <el-button size="mini" type="warning">+</el-button>-->
<!--          </a>-->
<!--          <a href="https://bo.betx33.it/Member_balance_id_456.html">-->
<!--            <el-button size="mini" type="warning">-</el-button>-->
<!--          </a>-->
<!--        </td>-->
        <td v-for="i in item">{{ i }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "mtable",
  props: {
    thead: {
      type: Array,
      default: [
        "Opera", "User", "saldo", "dd"
      ]
    },
    tableData: {
      type: Array,
      default:  [{
        balance: '3333',
        name: '王小虎',
        memo: '王小虎'
      }, {
        balance: '3333',
        name: '王小虎',
        memo: '上海市普陀区金沙江路 1518 弄'
      }, {
        balance: '3333',
        name: '王小虎',
        memo: '上海市普陀区金沙江路 1518 弄',
      }, {
        balance: '3333',
        name: '王小虎',
        memo: '上海市普陀区金沙江路 1518 弄'
      }]
    },
  },
  data() {
    return {
      thead: [],
      tableData: []
    }
  }
}
</script>

<style scoped lang="scss">
  .my-table{
    background: #000;
    table{
      background: #202223;
      border-collapse:collapse;
      color: #fff;
      width: 100%;
      border: 1px solid lightgray;
      th,td{
        border: 1px solid lightgray;
        width: 200px;
        height: 40px;
        text-indent: 20px;
      }
    }
  }
</style>
