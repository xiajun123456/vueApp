<template>
    <div class="personal-container">
        <div class="global-header header-comm">
            <span>我的</span>
            <div class="header-right" @click="$router.push({path: '/setting'})">
                <span class="glyphicon glyphicon-cog"></span>
            </div>
        </div>
        <div class="personal-list">
            <div class="user-header" @click="goUser">
                <div class="user-avatar">
                    <span class="glyphicon glyphicon-user" v-if="!hasUser"></span>
                    <img src="../../images/default_avator.png" alt="" v-if="hasUser">
                </div>
                <div class="user-information">
                    <span v-if="!hasUser" class="go-login">
                        立即登录 <span class="glyphicon glyphicon-menu-right toggle"></span>
                    </span>
                    <div class="user-details" v-if="hasUser">
                        <p>{{user.nickname}}</p>
                        <p>0/2199</p>
                        <div class="toggle">
                            {{user.mobile}} <span class="glyphicon glyphicon-menu-right"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="information-list-container">
                <ul class="information-list">
                    <li class="list-li" @click="goState('全部订单')">
                        <span class="glyphicon glyphicon-list-alt list-icon"></span>
                        <span class="list-name">全部订单</span>
                        <span class="list-right">
                            查看全部订单 <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </li>
                    <li class="goods-list">
                        <div class="div-comm" @click="goState('待付款')">
                            <img src="../../images/fukuan.png" alt="">
                            <p>
                                待付款
                            </p>
                        </div>
                        <div class="div-comm" @click="goState('待发货')">
                            <img src="../../images/fahuo.png" alt="">
                            <p>
                                待发货
                            </p>
                        </div>
                        <div class="div-comm" @click="goState('待收货')">
                            <img src="../../images/shouhuo.png" alt="">
                            <p>
                                待收货
                            </p>
                        </div>
                        <div class="div-comm" @click="goState('售后处理')">
                            <img src="../../images/chuli.png" alt="">
                            <p>
                                售后处理
                            </p>
                        </div>
                    </li>
                    <li class="list-li" @click="goState('我的关注')">
                        <span class="glyphicon glyphicon-star list-icon"></span>
                        <span class="list-name">我的关注</span>
                        <span class="list-right">
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </li>
                    <li class="list-li" @click="$router.push({ path: '/accountBalance' })">
                        <span class="glyphicon glyphicon-jpy list-icon"></span>
                        <span class="list-name">账户余额</span>
                        <span class="list-right amount-money">
                            0 <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </li>
                    <li class="list-li">
                        <span class="glyphicon glyphicon-scale list-icon"></span>
                        <span class="list-name" @click="tower">我的红包</span>
                        <span class="list-right amount-money">
                            0 <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </li>
                    <li class="list-li" @click="$router.push({path: '/bank'})">
                        <span class="glyphicon glyphicon-credit-card list-icon"></span>
                        <span class="list-name">我的银行卡</span>
                        <span class="list-right">
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </li>
                    <li class="list-li" @click="tower">
                        <span class="glyphicon glyphicon-tower list-icon"></span>
                        <span class="list-name">会员中心</span>
                        <span class="list-right">
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </li>
                    <li class="list-li" @click="tower">
                        <span class="glyphicon glyphicon-user list-icon"></span>
                        <span class="list-name">经纪人</span>
                        <span class="list-right">
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </li>
                    <li class="list-li" @click="$router.push({path: '/address'})">
                        <span class="glyphicon glyphicon-map-marker list-icon"></span>
                        <span class="list-name">收货地址管理</span>
                        <span class="list-right">
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </li>
                    <li class="list-li" @click="$router.push({path: '/setting'})">
                        <span class="glyphicon glyphicon-cog list-icon"></span>
                        <span class="list-name">设置中心</span>
                        <span class="list-right">
                             <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="technical-support">
                <img src="data:image/png;base64,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"
                     alt="">
                <p>技术支持 古美术</p>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {Toast} from 'mint-ui';

    export default {
        data(){
            return {
                hasUser: true,
                user: {}
            }
        },
        methods: {
            goUser(){
                if (this.hasUser) {
                    this.$router.push({path: '/myData'});
                } else {
                    this.$router.push({path: '/login'});
                    this.$store.state.loginState = {path:'/personal'}
                }
            },
            goState(stateName){
                this.$store.state.stateName = stateName;
                this.$router.push({path: '/order'});
            },
            tower(){
                Toast({
                    message: '即将开放，敬请期待..',
                    position: 'bottom',
                    duration: 2000
                });
            }
        },
        mounted(){
            this.user = this.$store.state.user;
            this.hasUser = false;

            if (this.user.userId) {
                this.hasUser = true
            }
        }
    }
</script>
<style type="text/scss" lang="scss">
    .personal-container {
        .technical-support {
            position: relative;
            bottom: 0;
        }
        .user-header {
            background: #ee3333;
            border-top: 1px solid #fff;
            padding: 20px 0;
            margin: 0 -15px;
            position: relative;
            &:after {
                content: '';
                display: block;
                clear: both;
            }
            .user-information {
                float: left;
                color: #fff;
                margin-left: 30px;
                .go-login {
                    line-height: 55px;
                    font-size: 1.2em;
                }
                .user-details {
                    font-size: 0.8em;
                    p {
                        margin: 0;
                        padding: 0;
                    }
                    p:nth-child(2) {
                        margin-top: 5px;
                    }
                }
                .toggle {
                    position: absolute;
                    right: 20px;
                    line-height: 55px;
                    top: 20px;
                    font-size: .8em;
                }
            }
            .user-avatar {
                width: 55px;
                height: 55px;
                border: 4px solid rgba(0, 0, 0, 0.2);
                border-radius: 50%;
                text-align: center;
                font-size: 2em;
                color: #fff;
                margin-left: 15px;
                float: left;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    position: relative;
                    top: -2px;
                    left: -1px;
                }
            }
        }
        .information-list {
            li.list-li {
                border-bottom: 1px solid #ddd;
                height: 45px;
                line-height: 45px;
                color: #000;
                font-size: 1em;
                margin: 0 -15px;
                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                .list-name {
                    display: inline-block;
                    height: 45px;
                    line-height: 45px;
                    float: left;
                }
                .list-icon {
                    color: #F47F16;
                    margin: 0 10px 0 15px;
                    font-size: 1.5em;
                    line-height: 42px;
                    float: left;
                }
                .list-right {
                    float: right;
                    color: #999;
                    line-height: 45px;
                    font-size: 0.9em;
                    margin-right: 15px;
                }
                .amount-money {
                    color: #F23030;
                    .glyphicon {
                        color: #999;
                    }
                }
            }
            .goods-list {
                border-bottom: 5px solid #ddd;
                margin: 0 -15px;
                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                div.div-comm {
                    float: left;
                    width: 25%;
                    text-align: center;
                    padding: 15px 0;
                    img {
                        width: 24px;
                        height: 25px;
                    }
                    p {
                        margin: 0;
                        padding: 0;
                        font-size: 1em;
                        margin-top: 3px;
                        color: #2c2c2c;
                    }
                }
            }
        }
        .technical-support {
            margin: 20px 0;
            text-align: center;
            color: #888;
            img {
                width: 45px;
                height: 45px;
            }
        }
    }
</style>