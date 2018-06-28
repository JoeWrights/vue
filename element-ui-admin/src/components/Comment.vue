<template>
  <div>
    <comment-form @addComment="addComment" />
    <comment-list :list="list"/>
    <pagination :totalCount="totalCount" :currentPage="currentPage" :pagesize="pagesize" @turnPage="turnPage" />
  </div>
</template>

<script>
  import CommentForm from "./CommentForm.vue";
  import CommentList from "./CommentList.vue"
  import Pagination from "./Pagination.vue";
  export default {
    data() {
      return {    
        list: [],          //只是一部分数据
        totalData: [],     //所有的数据=>当前页面的评论
        pagesize: 3,       //pagination组件无法独立，list
        totalCount: 0,
        currentPage: 1
      }
    },
    components: {
      CommentForm,
      CommentList,
      Pagination
    },
    methods: {
      addComment(msg) {
        console.log(msg);
        this.totalData.push({text:msg});
        this.totalCount=this.totalData.length;
        if(this.totalCount<=this.pagesize){
            this.list=this.totalData.reverse();
        }else{
            // this.list=?
            
            this.list=this.totalData.slice(0,this.pagesize).reverse();
        }
        this.currentPage=1;
        // this.list.reverse();
      },
      turnPage(curr){
          console.log(curr);
          this.currentPage=curr;
          this.list=this.totalData.slice(this.pagesize*(curr-1),this.pagesize*curr);
      }
    }
  }

</script>

<style>


</style>
