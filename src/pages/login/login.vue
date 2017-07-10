<template>
    <div class="login-container">
        <div class="global-header">
            <div class="close-login" @click="close()">
                <span>&times;</span>
            </div>
            <div class="global-header-title">
                <span>用户登陆</span>
            </div>
            <div class="global-header-right">
                <span @click="enrollment">还没账号?</span>
            </div>
        </div>
        <div class="login-logo">
            <span class="login-bg"></span>
        </div>
        <div class="login-input">
            <mt-field placeholder="手机号" v-model="mobile"></mt-field>
            <mt-field placeholder="密码" v-model="passWord"></mt-field>
            <div class="save-mobile">
                <span class="save-mobile-text">记住账号</span>
                <mt-switch v-model="saveMobile" class="save"></mt-switch>
                <span class="forget-pwd">忘记密码</span>
            </div>
        </div>
        <div class="login-btn-container">
            <button class="login-btn btn"
                    @click="login">登陆
            </button>
            <button class="enrollment-btn btn"
                    @click="enrollment">注册
            </button>
        </div>
        <div class="other-login">
            <div class="other-login-title">
                其他方式登陆
            </div>
            <div class="other-login-icon">
                <img src="../../images/weixin.png"
                     @click="weixin"
                     alt="">
            </div>
            <div class="icon-name">
                微信
            </div>
        </div>
    </div>
</template>
<style lang="scss" type="text/scss">
    .global-header {
        height: 42px;
        line-height: 42px;
        text-align: center;
        color: #555;
        font-size: 1.2em;
        z-index: 100;
        position: fixed;
        right: 0;
        left: 0;
        padding: 0 10px;
        &:after {
            content: '';
            display: block;
            clear: both;
        }
        .go-before {
            position: absolute;
            left: .8em;
            line-height: 42px;
            color: #fff;
        }
        .global-header-right {
            position: absolute;
            right: 0;
            top: 0;
            line-height: 42px;
            font-size: 0.8em;
            color: #999;
        }
        .close-login {
            position: absolute;
            left: 0;
            font-size: 1.5em;
            color: #777;
            opacity: 0.6;
            text-align: left;
        }
        .global-header-title {
            text-align: center;
        }
    }

    .login-container {
        width: 100%;
        .global-header {
            margin-top: -41px;
            .close-login, .global-header-right {
                margin: 0 15px;
            }
        }
        .login-logo {
            padding: 3em 0;
            .login-bg {
                background: url(data:image/png;base64,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) no-repeat;
                width: 101px;
                height: 101px;
                margin: 0 auto;
                display: block;
            }
        }
        .login-input {
            border: 1px solid #ddd;
            padding: 0.5em;
            border-radius: 5px;
            .save-mobile {
                font-size: 0.7em;
                color: #999;
                padding: 0 10px;
                margin-bottom: 0.7em;
                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                .save-mobile-text {
                    float: left;
                    line-height: 32px;
                    margin-right: 1em;
                }
                .save {
                    float: left;
                }
                .forget-pwd {
                    float: right;
                    line-height: 32px;
                }
            }
        }
        .login-btn-container {
            margin-top: 1.3em;
            .login-btn {
                width: 49%;
                height: 46px;
                background: #F23030;
                color: #fff;
                &:hover {
                    background: #E81212;
                }

            }
            .enrollment-btn {
                width: 49%;
                height: 46px;
                background: #fff;
                color: #F23030;
                border: 1px solid #F23030;
                &:hover {
                    background: #fff;
                }
            }
        }
        .other-login {
            position: fixed;
            bottom: .2em;
            left: 0;
            right: 0;
            font-size: 0.8em;
            color: #999;
            .other-login-title {
                width: 85%;
                margin: 0 auto;
                text-align: center;
                border-bottom: 1px solid #f1f1f1;
                padding: 0.5em 0;
            }
            .other-login-icon {
                padding: 0.5em 0;
                text-align: center;
                img {
                    cursor: pointer;
                }
            }
            .icon-name {
                text-align: center;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import storage from '../../shared/services/storageService.js';
    import request from '../../shared/request/asyncRequest.js';
    import prompt from '../../shared/services/promptServices';

    export default {
        data(){
            return {
                mobile: '',
                saveMobile: true,
                passWord: ''
            }
        },
        methods: {
            close(){
                if(this.$store.state.loginState){
                    this.$router.push(this.$store.state.loginState);
                    this.$store.state.loginState = '';
                    return
                }
                this.$router.go(-1)
            },
            login(){
                if (!this.mobile || !this.passWord) {
                    prompt.alert('账号或密码不能为空!')
                    return
                }
                request.user.login({
                    loginName: this.loginName,
                    passWord: this.passWord
                }).then(data => {
                    var user = data.data;
                    storage.set('user', user);
                    this.$store.state.user = user;
                    if(this.saveMobile){
                        storage.set('pwd', {
                            mobile:this.mobile,
                            passWord:this.passWord
                        });
                    }
                    if(this.$store.state.loginState){
                        this.$router.push(this.$store.state.loginState);
                        this.$store.state.loginState = '';
                        return
                    }
                    this.$router.go(-1)
                }).catch(err => {
                    prompt.alert(err.message || '服务器错误！')
                })
            },
            weixin(){
                prompt.alert( '即将开放，敬请期待..')
            },
            enrollment(){
                this.$router.push({path: '/enrollment'});
            }
        },
        mounted(){
            let _this = this;
            if(this.$store.state.user.userId){
                this.$router.push({path:'/dashboard'})
            }
            var pwd = storage.get('pwd');
            if(pwd){
                this.mobile = pwd.mobile;
                this.passWord = pwd.passWord;
            }
            this.$store.state.isLogin = true;
            document.onkeyup = function (event) {
                let e = event || window.event;
                let keyCode = e.keyCode || e.which;
                if (keyCode == 13) {
                    _this.login()
                }
            }
        }
    }
</script>