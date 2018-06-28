<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" label-position="left" ref="loginForm">
      <div class="title-container">
        <h3 class="title">
          系统登录
        </h3>
      </div>
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" @keyup.enter.native="handleLogin"></el-input>
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin" :loading="isLoading">登录</el-button>
      <div class="tips">
        <span>用户名：admin</span>
        <span>密码：111111</span>
      </div>
      <div class="tips">
        <span>用户名：editor</span>
        <span>密码：111111</span>
      </div>
      <el-button class="thirdparty-button" type="primary" @click="showDialog=true">第三方登录</el-button>
    </el-form>
    <el-dialog title="第三方登录" :visible.sync="showDialog" append-to-body closable="true">微信，QQ，微博<br/></el-dialog>
  </div>
</template>

<script>
  import {
    isvalidUsername
  } from "@/utils/validate";
  export default {
    data() {

      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error("请输入正确的用户名"));
        } else {
          callback();
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error("密码至少6位"));
        } else {
          callback();
        }
      }
      return {
        showDialog:false,
        loginRules: {
          username: [{ //这里的username就是el-input的name
            required: true,
            trigger: "blur",
            validator: validateUsername /*提供额外的校验*/
          }],
          password: [{
            required: true,
            trigger: "blur",
            validator: validatePassword
          }]
        },
        loginForm: {
          username: "",
          password: ""
        },
        isLoading: false
      }
    },
    methods: {
      handleLogin() {
        //要做什么？要验证数据
        this.$refs.loginForm.validate(valid => { //$refs:vue的方法，找到表单整体验证
          if (valid) {
            this.isLoading = true;
            setTimeout(() => {
              console.log("提交");
              this.isLoading = false;
            }, 2000)
          } else {
            console.log("submit error");
            return false;
          }
        })
      }
    }
  }

</script>

<style>


</style>
