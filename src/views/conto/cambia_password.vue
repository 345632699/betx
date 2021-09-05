<template>
  <div class="change-password-box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="password vecchio：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="password nuovo：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="password nuovo：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" @click="onSubmit">OK</el-button>
        <el-button>cancella</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'getCount'
      // ...
    ])
  },
  methods: {
    ...mapActions([
      'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
      'decrement'
    ])
    //...mapActions({
    //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
    //})
  }
}

</script>
<style scoped lang="scss">
.change-password-box {
  padding: 10px;
  background: #33373E;
  height: 300px;
  .el-input{
    width: 200px;
  }
}
</style>
