<template>
  <section class="container">
    <el-table :data="table" class="resultTable">
      <el-table-column prop="sid" label="学生ID"> </el-table-column>
      <el-table-column prop="sname" label="学生名称"> </el-table-column>
      <el-table-column prop="cname" label="班级名称"> </el-table-column>
      <el-table-column prop="gender" label="学生性别"> </el-table-column>
      <el-table-column prop="score" label="成绩"> </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
import api from '@/api'
export default {
  data() {
    return {
      table: []
    }
  },
  head() {
    return { title: '学生管理' }
  },
  created() {
    this.getAll()
  },
  methods: {
    async getAll() {
      const res = await api.getAll()
      this.table = res
    },
    handleClick(row) {
      // eslint-disable-next-line no-console
      console.log(row)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
}
.resultTable {
  flex-direction: column;
  justify-content: center;
}
</style>
