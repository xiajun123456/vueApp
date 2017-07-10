<template>

    <div class="enrollment-container ">
        <div class="global-header header-comm">
            <router-link to="/login">
                <div class="go-before">
                    <span class="glyphicon glyphicon-menu-left"></span>
                </div>
            </router-link>
            <div class="global-header-title">
                <span>用户注册</span>
            </div>
        </div>

        <div class="input-container">
            <mt-field label="手机号:" placeholder="手机号" type="tel" v-model="add.mobile"></mt-field>
            <mt-field label="真实姓名:" placeholder="您的姓名" v-model="add.name"></mt-field>
            <mt-field label="身份证:" placeholder="18位身份证号码" v-model="add.card"></mt-field>
            <mt-field label="昵称:" placeholder="输入昵称" v-model="add.nickname"></mt-field>
            <mt-field label="密码:" placeholder="输入密码" type="password" v-model="add.password"></mt-field>
            <mt-field label="确认密码:" placeholder="确认密码" type="password" v-model="add.password1"></mt-field>
            <mt-field label="验证码:" placeholder="验证码" v-model="add.verificationCode"></mt-field>
            <div class="verification-code">
                <button class="btn"
                        :class="{'btn-verification':!code,'btn-code':code}"
                        @click="getVerification()">
                    <span v-if="!code">{{getCodeTxt}}</span>
                    <span v-if="code">{{times}} s</span>
                </button>
            </div>
        </div>

        <div class="sure-enrollment">
            <button class="btn btn-enrollment"
                    @click="enroll">确定注册
            </button>
        </div>

        <div class="technical-support">
            <img src="data:image/png;base64,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"
                 alt="">
            <span>
                技术支持 古美术
            </span>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
    import prompt from '../../shared/services/promptServices';
    import request from '../../shared/request/asyncRequest';
    import storage from '../../shared/services/storageService';
    import _ from 'lodash'

    export default {
        name: 'enrollment',
        data(){
            return {
                add: {
                    mobile: '',
                    name: '',
                    card: '',
                    nickname: '',
                    password: '',
                    password1: '',
                    verificationCode: ''
                },
                code: false,
                times: 60,
                getCodeTxt: '获取验证码'
            }
        },
        methods: {
            getVerification(){
                if (this.code) {
                    return
                }
                var mobileReg = /^1[34578]\d{9}$/, timers = null
                if (!this.add.mobile || !mobileReg.test(this.add.mobile)) {
                    prompt.alert('电话号码为空或者格式不正确!');
                    return
                }
                request.enroll.getCode({mobile: this.add.mobile}).then(data => {
                    this.code = true;
                    this.times = 60;
                    prompt.alert('发送成功!');
                    timers = setInterval(() => {
                        this.times--;
                        if (this.times == 0) {
                            this.code = false;
                            clearInterval(timers);
                            timers = null
                        }
                    }, 1000)
                }).catch((err) => {
                    prompt.alert(err.message || '服务器错误!');
                })
            },
            enroll(){
                var mobileReg = /^1[34578]\d{9}$/;
                if (!this.add.mobile || !mobileReg.test(this.add.mobile)) {
                    prompt.alert('电话号码为空或者格式不正确!');
                    return
                }
                if (!this.add.name) {
                    prompt.alert('姓名不能为空!');
                    return;
                }
                if (!this.add.card || this.add.card.length != 18) {
                    prompt.alert('身份证号码输入错误或为空!');
                    return
                }
                if (!this.add.nickname) {
                    prompt.alert('昵称不能为空!');
                    return
                }
                if (!this.add.password) {
                    prompt.alert('密码不能为空!');
                    return
                }
                if (this.add.password != this.add.password1) {
                    prompt.alert('2次输入密码不一致!');
                    return;
                }
                if (!this.add.verificationCode) {
                    prompt.alert('验证码不能为空!');
                    return;
                }
                request.enroll.enrollment(this.add).then(data => {
                    prompt.alert('注册成功!');
                    let user = _.assign({userId: data.userId}, this.add);
                    storage.set('user',user);
                    this.$store.state.user = user;
                    this.$router.push({path: '/dashboard'});
                }).catch(err => {
                    prompt.alert(err.message || '服务器错误!');
                })
            }
        },
        mounted(){
            this.$store.state.isLogin = true;
        }
    }
</script>
<style type="text/scss" lang="scss">
    .enrollment-container {
        .mint-field .mint-cell-title {
            width: 85px;
            color: #333;
        }
        .input-container {
            position: relative;
            .verification-code {
                position: absolute;
                right: 0;
                bottom: 10px;
                .btn-verification {
                    background: #e33;
                    color: #fff;

                }
                .btn-code {
                    background: #dddddd;
                    color: #fff;
                }
            }
        }
        .sure-enrollment {
            margin-top: 1.5em;
            .btn-enrollment {
                width: 100%;
                background: #e33;
                color: #fff;
                height: 40px;
            }
        }
        .technical-support {
            position: fixed;
            bottom: 2em;
            left: 0;
            right: 0;
            text-align: center;
            img {
                width: 50px;
                height: 50px;
            }
            span {
                display: block;
                margin-top: 0.8em;
            }
        }
    }
</style>

