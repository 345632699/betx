<template>
  <section>
    <div class="box">
      <div class="header">
        <div class="directList">
          <div class="title">report</div>
        </div>
        <div class="btn-box">
          <el-col :span="3">
            <el-input placeholder="ID" v-model="value"></el-input>
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
        "report", "user", "Types of", "Amount before account change", "Account change amount", "Amount after account change", "time"
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
