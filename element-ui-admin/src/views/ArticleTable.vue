<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.importance" placeholder="重要性" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item">

        </el-option>
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
    </div>
    <el-table :data="list" v-loading="listLoading">
      <el-table-column label="序号" align="center" width="65">
        <template slot-scope="scope">
          <span>{{scope.row.id }}

          </span>
        </template>
      </el-table-column>
      <el-table-column label="重要性" prop="importance" align="center" width="150">

      </el-table-column>
      <el-table-column label="日期" prop="timestamp" align="center" width="150">

      </el-table-column>
      <el-table-column label="标题" prop="title" min-width="150">

      </el-table-column>
      <el-table-column label="作者" align="center" prop="author" width="110">

      </el-table-column>
      <el-table-column label="阅读数" align="center" width="95">
        <template slot-scope="scope">
          <span>{{scope.row.pageviews}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)">编辑</el-button>
        </template>
      </el-table-column>

    </el-table>
    <div class="pagination-container">
      <el-pagination :current-page="listQuery.page" :page-size="listQuery.limit" :total="total" layout="total, sizes, prev, pager, next, jumper"
        @current-change='handleCurrentChange'></el-pagination>

    </div>
    <el-dialog title="修改" :visible.sync="dialogFormVisibel">
      <el-form :model="temp" label-position="left" label-width="70" style="width:400px;margin-left:50px">
        <el-form-item prop="title" label="标题">
          <el-input v-model="temp.title"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateData">保存</el-button>
        <el-button @click="dialogFormVisibel=false">取消</el-button>

      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
    fetchList
  } from '@/api/article'
  export default {
    data() {
      return {
        importanceOptions: [1, 2, 3],
        total: 0,
        listLoading: false,
        dialogFormVisibel: false,
        // 弹窗里的表单model
        temp: {
          id: null,
          importance: undefined,
          remark: '',
          timestamp: new Date(),
          title: '',
          type: '',
          status: 'published'
        },
        list: [

        ],
        listQuery: {

          title: undefined,
          importance: undefined,
          type: undefined,
          sort: '+id',
          page: 1,
          limit: 20
        }
      }

    },
    methods: {
      handleFilter() {
        this.listQuery.page = 1;
        this.getList();
      },
      handleCurrentChange(page) {
        this.listQuery.page = page;
        this.getList();
      },
      getList() {
        this.listLoading = true
        fetchList(this.listQuery).then(response => {
          this.list = response.data.items
          this.total = response.data.total
          setTimeout(() => {
            this.listLoading = false
          }, 2000)
          // this.listLoading=false
        })
      },
      handleUpdate(row) {
        this.temp = Object.assign({}, row);
        // this.list.push(this.temp);
        this.dialogFormVisibel = true
        console.log(row);
      },
      updateData(row) {

      }
    },
    created() {
      this.getList();
    }
  }

</script>

<style>


</style>
