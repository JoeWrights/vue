<template>
    <label class="el-radio" :class="[{'is-disabled':'isDisabled'},{'is-focus':'focus'},{'is-border':'border'}]">
        <span class="el-radio__input">
            <span class="el-radio__inner"></span>
            <input type="radio" class="el-radio__original" :value="label" @focus="focus=true" @blur="focus=false" v-model="model" @change="handleChange">
            <span class="el-radio__label">
                <slot/>
                <template v-if="!$slots.default">
                    {{label}}
                </template>
            </span>
        </span>
    </label>
</template>
 
<script>
export default {
    data(){
        return {
            focus: false
        }
    },
    props: {
        value: {},
        label: {},
        disabled: Boolean,
        name: String,
        border: Boolean,
        size: String
    },
    computed: {
        isDisabled(){
            return this.disabled
        },
        model: {
           get(){
               return this.value;
           },
           set(val){
               this.$emit("input",val);
           }
        }
    },
    methods: {
        handleChange(){

        }
    }
}
</script>

