<template>
  <section>
    <div class="box">
      <div class="header">
        <div class="directList">
          <div class="title">Team performance query (subordinate agency team)</div>
        </div>
        <div class="btn-box">
          <el-col :span="3">
            <el-input placeholder="代理ID或代理名字" v-model="value"></el-input>
          </el-col>
          <el-date-picker
              placeholder="date"
              v-model="value2"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']">
          </el-date-picker>
          <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
          <el-button type="warning"> search for</el-button>
        </div>
      </div>
    </div>
    <div class="user-list">
      <mtable :table-data="users" :thead="thead"></mtable>
    </div>
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
    </el-pagination>

    <!--列表-->

  </section>
</template>
<script>
import {getUserList} from '../../api/api';
import mtable from "../../components/mtable";
//import NProgress from 'nprogress'
export default {
  data() {
    return {
      filters: {
        name: ''
      },
      thead:[
        "ID", "user", "Agency level", "Affiliated agent", "Activity gift", "Artificial gift", "Total bet", "Total profit and loss"
      ],
      loading: false,
      users: [],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value2: ""
    }
  },
  components: {
    mtable: mtable
  },
  methods: {
    //获取用户列表
    getUser: function () {
      let para = {
        name: this.filters.name
      };
      this.loading = true;
      //NProgress.start();
      getUserList(para).then((res) => {
        this.users = res.data.users;
        this.loading = false;
        //NProgress.done();
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.getUser();
  }
};

</script>

<style scoped lang="scss">
.user-list{
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
.box {
  .header {
    background: #33373E;
    margin-bottom: 10px;

    .directList {
      .title {
        height: 70px;
        line-height: 70px;
        font-size: 20px;
        color: #fff;
        text-indent: 20px;
        border-bottom: 1px solid #000;
      }
    }

    .btn-box {
      height: 95px;
      padding-left: 30px;
    }
  }

  .list {
    margin: 10px;
  }
}

</style>
