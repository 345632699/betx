<template>
  <section>
    <div class="direct">
      <div class="directList">
        <div class="title">Direct user list</div>
      </div>
      <div class="btn-box">
        <el-button type="danger" @click="dialogFormVisible = true">aggiugi cliente</el-button>
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
    <el-dialog title="aggiugi cliente" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="user：" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="password：" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogFormVisible = false">cancel</el-button>
        <el-button type="warning" @click="dialogFormVisible = false">Submit to save</el-button>
      </div>
    </el-dialog>
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
      }],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>
<style scoped="scoped" lang="scss">
@import '../../styles/home/index.scss';
.el-dialog__body{
  background: #101010;
}
</style>
