<template>
    <div class="setting-container">
        <div class="global-header header-comm">
            <div class="go-before" @click="$router.go(-1)">
                <span class="glyphicon glyphicon-menu-left"></span>
            </div>
            <span>设置</span>
        </div>
        <ul class="setting-list">
            <li>常见问题 <span class="glyphicon glyphicon-menu-right"></span></li>
            <li>关于我们 <span class="glyphicon glyphicon-menu-right"></span></li>
            <li>用户反馈 <span class="glyphicon glyphicon-menu-right"></span></li>
        </ul>
        <button class="btn btn-login-out" @click="loginOut">退出登录</button>
    </div>
</template>
<style type="text/scss" lang="scss">
    .setting-container{
        .setting-list{
            li{
                font-size: 1.1em;
                color: #333;
                padding: 0 15px;
                border-bottom: 1px solid #ddd;
                line-height: 40px;
                margin: 0 -15px;
                &:after{
                    content: '';
                    display: block;
                    clear: both;
                }
                span{
                    float: right;
                    color: #999;
                    line-height: 40px;
                    font-size: .6em;
                }
            }

        }
        .btn-login-out{
            width: 100%;
            background: #ee3333;
            color: #fff;
            margin-top: 30px;
            height: 46px;
        }
    }
</style>
<script type="text/ecmascript-6">
    import storage from '../../shared/services/storageService';
    import request from '../../shared/request/asyncRequest'
    export default {
        data(){
            return {
                user:''
            }
        },
        methods:{
            loginOut(){
                request.personal.loginOut({userId:this.user.userId}).then(data => {
                    storage.remove('user');
                    this.$store.state.user = {};
                    this.$router.go(-1)
                })
            }
        },
        mounted(){
            var _vm = this;
            this.$store.state.isLogin = true;
            _vm.user = _vm.$store.state.user
        }
    }
</script>
