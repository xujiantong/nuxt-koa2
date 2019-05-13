<template>
  <div class="container">
    <div class="title">学生表</div>
    <el-table :data="table" class="resultTable">
      <el-table-column prop="sid" label="学生ID"> </el-table-column>
      <el-table-column prop="sname" label="学生名称"> </el-table-column>
      <el-table-column prop="cname" label="班级名称"> </el-table-column>
      <el-table-column prop="gender" label="学生性别"> </el-table-column>
      <el-table-column prop="score" label="成绩"> </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">
            录入/更改成绩
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="录入成绩" :visible.sync="scoreDialogVisible" width="30%">
      <el-form ref="scoreForm" :model="form">
        <el-form-item label="学生名称" :label-width="formLabelWidth">
          <el-input v-model="form.sname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学生成绩" :label-width="formLabelWidth">
          <el-input v-model="form.score" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">取 消</el-button>
        <el-button type="primary" @click="updateScore()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data() {
    return {
      scoreDialogVisible: false,
      form: {
        sname: '',
        cname: '',
        gender: '',
        sid: '',
        score: ''
      },
      formLabelWidth: '120px'
    }
  },
  async asyncData() {
    // eslint-disable-next-line no-console
    console.log('server?', process.server)
    // eslint-disable-next-line no-console
    console.log('asyncData', new Date().getTime())
    const res = await api.getAll()
    return { table: res }
  },
  head() {
    return { title: '学生管理' }
  },
  beforeCreate() {
    // eslint-disable-next-line no-console
    console.log('brower?', !process.server)
    // eslint-disable-next-line no-console
    console.log('beforeCreate', new Date().getTime())
  },
  created() {
    // eslint-disable-next-line no-console
    console.log('brower?', !process.server)
    // eslint-disable-next-line no-console
    console.log('created', new Date().getTime())
  },
  methods: {
    handleClick(row) {
      this.scoreDialogVisible = true
      this.form = JSON.parse(JSON.stringify(row))
    },
    handleClose() {
      this.stuDialogVisible = false
      this.scoreDialogVisible = false
      if (this.$refs.studentForm) {
        this.$refs.studentForm.resetFields()
      }
      if (this.$refs.scoreForm) {
        this.$refs.scoreForm.resetFields()
      }
    },
    async updateScore() {
      const params = {
        sname: this.form.sname,
        score: this.form.score
      }
      const res = await api.updateScore(params)
      // eslint-disable-next-line no-console
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: auto 200px;
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
  .addButon {
    float: right;
    &::after {
      clear: both;
    }
  }
}
</style>
