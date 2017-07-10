<template>

</template>
<style lang="scss">
    /*.global-header{*/
        /*transition: all 0.2s linear;*/
        /*position: absolute;*/
        /*top:0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*background: #20a0ff;*/
        /*height: 70px;*/
        /*.header-logo{*/
            /*float: left;*/
            /*width: 200px;*/
            /*border-right:1px solid #fff;*/
            /*text-align: center;*/
            /*font-size: 20px;*/
            /*height: 70px;*/
            /*line-height: 70px;*/
            /*color: #fff;*/
        /*}*/
        /*.header-title{*/
            /*float: left;*/
            /*font-size: 20px;*/
            /*height: 70px;*/
            /*line-height: 70px;*/
            /*color: #fff;*/
            /*margin-left: 20px;*/
        /*}*/
        /*.header-right{*/
            /*line-height: 70px;;*/
            /*float: right;*/
            /*padding-right:20px;*/
            /*&:after{*/
                /*content: '';*/
                /*display:block;*/
                /*clear: both;*/
             /*}*/
            /*.wellcome{*/
                /*float: left;*/
                /*color: #fff;*/
            /*}*/
            /*.login-out{*/
                /*float: right;*/
                /*margin-left:15px;*/
            /*}*/
        /*}*/
    /*}*/
</style>
<script type="text/ecmascript-6">
    import storage from '../services/storageService.js'
    export default {
        data:function(){
            return {
                name:'lilei'
            }
        },
        methods:{
            loginOut(){
                storage.remove('user')
                this.$router.push({ path:'/login'})
            }
        }
    }
</script>