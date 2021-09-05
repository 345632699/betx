<template>
  <section>
    <div class="box">
      <div class="header">
        <div class="user-info">
          <h5>utente：testforclick  saldo：2.00</h5>
        </div>
        <div class="btn-box">
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
    <div class="bill-list">
      <el-row :gutter="20">
        <el-col span="6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>2</h5>
            </div>
            <div class="ibox-content" style="height: 80px">
              <h1 class="no-margins">Total number of team</h1>
              <div class="stat-percent font-bold text-success">人</div>
            </div>
          </div>
        </el-col>
        <el-col span="6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>2</h5>
            </div>
            <div class="ibox-content" style="height: 80px">
              <h1 class="no-margins">Number of direct members</h1>
              <div class="stat-percent font-bold text-success">人</div>
            </div>
          </div>
        </el-col>
        <el-col span="6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>2</h5>
            </div>
            <div class="ibox-content" style="height: 80px">
              <h1 class="no-margins">Number of direct agents</h1>
              <div class="stat-percent font-bold text-success">人</div>
            </div>
          </div>
        </el-col>
        <el-col span="6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>2</h5>
            </div>
            <div class="ibox-content" style="height: 80px">
              <h1 class="no-margins">Direct member main wallet</h1>
              <div class="stat-percent font-bold text-success">EUR</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col span="6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>2</h5>
            </div>
            <div class="ibox-content" style="height: 80px">
              <h1 class="no-margins"Total bet</h1>
              <div class="stat-percent font-bold text-success">EUR</div>
            </div>
          </div>
        </el-col>
        <el-col span="6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>2</h5>
            </div>
            <div class="ibox-content" style="height: 80px">
              <h1 class="no-margins">Total profit and loss</h1>
              <div class="stat-percent font-bold text-success">EUR</div>
            </div>
          </div>
        </el-col>
        <el-col span="6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>2</h5>
            </div>
            <div class="ibox-content" style="height: 80px">
              <h1 class="no-margins">Upper/lower</h1>
              <div class="stat-percent font-bold text-success">EUR</div>
            </div>
          </div>
        </el-col>
      </el-row>
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
        "Opera", "ID", "user", "saldo", "Affiliated agent", "operating"
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
.bill-list{
  .ibox{
    background: #33373E;
    .ibox-title{
      height: 60px;
      line-height: 60px;
      padding: 0 30px;
      font-size: 30px;
      color: #fff;
    }
    .ibox-content {
      border: none;
      padding: 0 30px 20px 30px;
      font-size: 12px;
      color: #7c8b9f;
      padding-top: 25px !important;
      padding-bottom: 5px;
      position: relative;
      z-index: 1;
    }
    .text-success{
      color: #1c84c6;
      float: right;
    }
  }
}
.box {
  .user-info{
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-indent: 30px;
    font-size: 20px;
  }
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
      height: 55px;
      padding-left: 30px;
    }
  }

  .list {
    margin: 10px;
  }
}

</style>
