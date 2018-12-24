<template>
  <div>
    <h1>This is {{ name }} Component</h1>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" align="left">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="80" align="left">
      </el-table-column>
      <el-table-column prop="msg" label="消息" align="left">
      </el-table-column>
    </el-table>
    <div @keyup.enter="submit" class="input">
      <el-input
        placeholder="请输入内容，回车确认"
        v-model="textarea">
      </el-input>
    </div>
  </div>
</template>

<script>
import Emitter from '../mixins/emitter';
import event from '../mixins/event';

export default {
  componentName: 'Test',
  mixins: [Emitter, event],
  data() {
    return {
      name: 'test',
      textarea: '',
      tableData: [],
    };
  },
  methods: {

  },
};
</script>

<style>

</style>
<template>
  <div>
    <h1>This is {{ name }} Component</h1>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" align="left">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="80" align="left">
      </el-table-column>
      <el-table-column prop="msg" label="消息" align="left">
      </el-table-column>
    </el-table>
    <div @keyup.enter="submit" class="input">
      <el-input
        placeholder="请输入内容，回车确认"
        v-model="textarea">
      </el-input>
    </div>
  </div>
</template>

<script>
import Emitter from '../mixins/emitter';
import event from '../mixins/event';

export default {
  componentName: 'Test',
  mixins: [Emitter, event],
  data() {
    return {
      name: 'test',
      textarea: '',
      tableData: [],
    };
  },
  created() {
    this.$on('message', text => {
      this.tableData.push(this.getMessage(text));
    });
  },
  methods: {
    submit() {
      this.communicate('message', {
        componentName: 'Test',
        text: this.textarea,
      });
      this.textarea = '';
    },
  },
};
</script>

<style>

</style>
