<template>
  <section>
    <div class="direct">
      <div class="directList">
        <div class="title">Direct user list</div>
      </div>
      <div class="btn-box">
        <el-button type="danger">aggiugi cliente</el-button>
      </div>
    </div>
    <div style="background: #000;height: 20px"></div>
    <div class="user-list">
      <table>
        <thead>
        <tr>
          <th>Opera</th>
          <th>User</th>
          <!-- <th lay-data="{field:'操作', width:160}">各館餘額</th>-->
          <th>saldo</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in tableData">
          <td>
            <a href="https://bo.betx33.it/Member_balancedec_id_456.html">
              <el-button size="mini" type="warning">+</el-button>
            </a>
            <a href="https://bo.betx33.it/Member_balance_id_456.html">
              <el-button size="mini" type="warning">-</el-button>
            </a>
          </td>
          <td>{{ item.name }}</td>
          <td>
            {{ item.balance }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    tableRowClassName({row, rowIndex}) {
      return 'warning-row';
    }
  },
  data() {
    return {
      tableData: [{
        balance: '3333',
        name: '王小虎'
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
    }
  }
}
</script>
<style scoped="scoped" lang="scss">
@import '../../styles/home/index.scss';
</style>
