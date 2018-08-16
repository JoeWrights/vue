<template>
  <div class="hello">
    <button @click="sweetAlert()">click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
    sweetAlert() {
      this.$tada.confirm({
        title: '删除',
        text: '你确定要删除吗?',
        primaryText: '删除'
      }).then(willDelete => {
        if (!willDelete) return;
        swal('deleted!', 'you has deleted this item', 'success'); 
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
