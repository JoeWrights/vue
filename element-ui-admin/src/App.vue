<template>
  <div id="app">
    <article-table>
      
    </article-table>
    <!-- <comment>
      <comment-form></comment-form>
      <commnet-list>
        <comment-item></comment-item>
      </commnet-list>
      <pagination></pagination>
    </comment> -->
    <!-- <ele-radio-group v-model="sex">
      <ele-radio label="女"></ele-radio>
      <ele-radio label="男"></ele-radio>
    </ele-radio-group> -->

    <!-- <login /> -->
    <!-- <p v-html="content"></p> -->
    <!-- <markdown /> -->
  </div>
</template>

<script>
  //@表示alias 地址短链接，在哪里都指向src 让地址引入更轻松
  import ArticleTable from "@/views/ArticleTable"
  import Comment from "@/components/Comment"
  import EleRadioGroup from "@/components/EleRadioGroup"
  import EleRadio from "@/components/EleRadio"
  import Login from "@/views/Login"
  import markdown from "@/views/markdown"
  export default {
    name: 'App',
    components: {
      EleRadioGroup,
      EleRadio,
      Login,
      markdown,
      Comment,
      ArticleTable
    },
    data() {
      return {
        sex: 0,
        content: "<span>美团挂了，还有UC</span>"
      }
    }
  }

</script>

<style lang="scss">
  $bg:#2d3a4b;
  $light_gray:#eee;
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }

  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }

</style>

<style lang="scss" scoped>


</style>
