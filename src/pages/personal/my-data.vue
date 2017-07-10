<template>
    <div class="my-data-container">
        <div class="global-header header-comm">
            <div class="go-before" @click="$router.push({path:'/personal'})">
                <span class="glyphicon glyphicon-menu-left"></span>
            </div>
            <span>我的资料</span>
        </div>
        <div class="user-avatar">
            <img src="../../images/default_avator.png" alt="">
            <span class="avatar">
                头像<span class="glyphicon glyphicon-menu-right toggle"></span>
            </span>
        </div>
        <ul class="user-content-container">
            <li>
                <mt-field label="昵称:" placeholder="设置昵称" v-model="user.nickname"></mt-field>
            </li>
            <li>
                <mt-field label="姓名:" placeholder="姓名" v-model="user.userName"></mt-field>
            </li>
            <li>
                <mt-field label="身份证号:" placeholder="--" v-model="user.card"></mt-field>
            </li>
            <li class="user-gender">
                <span class="label-header">性别:</span>
                <label>
                    <input type="radio" name="gender" value="0" v-model="user.gender">
                    <span class="radio-content"></span>
                    <span>男</span>
                </label>
                <label>
                    <input type="radio" name="gender" value="1" v-model="user.gender">
                    <span class="radio-content"></span>
                    <span>女</span>
                </label>
            </li>
            <li>
                <mt-field label="职业:" v-model="user.career"></mt-field>
            </li>
            <li>
                <mt-field label="个性签名:" v-model="user.signature"></mt-field>
            </li>
            <li class="set-up" @click="$router.push({ path: '/payMent' })">
                设置支付密码 <span class="glyphicon glyphicon-menu-right toggle"></span>
            </li>
            <li class="set-up" @click="$router.push({ path: '/loginPwd' })">
                设置登陆密码 <span class="glyphicon glyphicon-menu-right toggle"></span>
            </li>
        </ul>
        <div class="technical-support">
            <img src="data:image/png;base64,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"
                 alt="">
            <p>技术支持 古美术</p>
        </div>
        <div class="save-container">
            <button class="btn save-btn" @click="save">保存</button>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import request from '../../shared/request/asyncRequest';
    import prompt from '../../shared/services/promptServices';
    export default{
        data(){
            return {
                user: {
                    nickname: '',
                    userName: '',
                    card: '',
                    career: '',
                    signature: '',
                    gender:0
                }
            }
        },
        methods:{
            save(){
                request.personal.saveUser(this.user).then(data => {
                    prompt.alert(data.message);
                }).catch(err => {
                    prompt.alert(err.message || '服务器错误!');
                })
            }
        },
        mounted(){
            this.$store.state.isLogin = true;
            this.user = this.$store.state.user
        }
    }
</script>
<style lang="scss" type="text/scss">
    .my-data-container {
        margin: 0 -15px;
        .user-avatar {
            padding: 10px;
            position: relative;
            img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
            .avatar {
                position: absolute;
                top: 10px;
                right: 10px;
                line-height: 70px;
                color: #333;
                .toggle {
                    color: #c2c2c2;
                    margin-left: 5px;
                }
            }
        }
        .user-content-container{
            .user-gender{
                .radio-content{
                    display: inline-block;
                    width: 25px;
                    height: 25px;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                    position: relative;
                    top: 7.5px;
                    margin: 0 5px 0 10px;
                    &:after{
                        content: '';
                        position: absolute;
                        width: 15px;
                        height: 15px;
                        background: #ee3333;
                        border-radius: 50%;
                        top: 4px;
                        left: 4px;
                        display: none;
                    }
                }
                label{
                    input{
                        display: none;
                    }
                    input:checked + .radio-content:after{
                        display: block;
                    }
                }
                .label-header{
                    display: inline-block;
                    width: 105px;
                    padding-left: 10px;
                    font-size: 16px;
                    line-height: 40px;
                }
            }
            .set-up{
                color: #000;
                padding: 0 10px;
                line-height: 44px;
                height: 44px;
                border-bottom: 1px solid #dddddd;
                font-size: 14px;
                .toggle{
                    float: right;
                    line-height: 40px;
                    color: #c2c2c2;
                }
            }
        }
        .technical-support{
            margin: 20px 0;
            text-align: center;
            color: #888;
            img{
                width: 45px;
                height: 45px;
            }
        }
        .save-container{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            .save-btn{
                background: #ee3333;
                height: 42px;
                color: #fff;
                font-size: 1.1em;
                width: 150px;
                margin-bottom: 10px;
            }
        }
    }
</style>