
<template>
    <button class="el-button" :disabled="buttonDisabled" :class="[type?'el-button--'+ type:'',{'is-disabled':'buttonDisabled','is-loading':'loading'}]">
        <i class="el-icon-loading" v-if="loading"></i>
        <i v-if="icon&&!loading" :class="icon"></i>
        <slot></slot></button>
</template>

<script>
export default {
    name:"ElButton",   //声明组件
    props: {
        disabled:Boolean,
        type: {
            type: String,
            default: "default"
        },
        loading:Boolean,
        icon: {
            icon: String,
            default: ""
        }
    },
    computed: {
        buttonDisabled(){
            return this.disabled;
        }
    }
}
</script>

<style>

</style>

