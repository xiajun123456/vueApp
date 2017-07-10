<template>
    <div class="preview-detail-container">
        <div class="global-header header-comm">
            <div class="go-before" @click="$router.go(-1)">
                <span class="glyphicon glyphicon-menu-left"></span>
            </div>
            <span>藏品详情</span>
        </div>
        <div class="img-swipe">
            <mt-swipe :auto="3000">
                <mt-swipe-item>
                    <div class="swipe-item-c">
                        <img src="../../images/1.jpg" alt="">
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="swipe-item-c">
                        <img src="../../images/2.jpg" alt="">
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="swipe-item-c">
                        <img src="../../images/3.jpg" alt="">
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="swipe-item-c">
                        <img src="../../images/4.jpg" alt="">
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="start-time">
            {{holdingDetails.startTime}} 开拍
        </div>
        <div class="holding-name">
            {{holdingDetails.name}}
        </div>
        <div class="bid-situation">
            <span class="">当前价:</span>￥{{holdingDetails.currentPrice}}
        </div>
        <div class="price">
            <div class="price-de">
                起拍价格:￥{{holdingDetails.startPrice}}
            </div>
            <div class="price-de">
                加价幅度:￥{{holdingDetails.increase}}
            </div>
        </div>
        <div class="bid">
            <span class="glyphicon glyphicon-menu-right icon icon-left"></span>
            <span class="bid-to"
                  @click="showBid()">点击此处委托出价</span>
            <span class="glyphicon glyphicon-menu-right icon icon-right"></span>
        </div>
        <div class="bid-recording">
            <div class="recording-title">
                出价记录(1)
                <span class="show-more">
                更多 <span class="more-icon">></span>
            </span>
            </div>
            <ul class="bid-list">
                <li v-for="item in holdingDetails.bidHistory">
                    <div class="bid-name">{{item.bidName}}</div>
                    <div class="bid-times">{{item.bidTimes}}</div>
                    <div class="price">￥{{item.bidPrice}}</div>
                </li>
            </ul>
        </div>
        <div class="product-details">
            <ul class="product-d-list">
                <li @click="detailType = 1">
                    <span :class="{active:detailType == 1}">商品详情</span>
                </li>
                <li @click="detailType = 2">
                    <span :class="{active:detailType == 2}">拍卖规则</span>
                </li>
                <li @click="detailType = 3">
                    <span :class="{active:detailType == 3}">藏品评论</span>
                </li>
            </ul>
            <div class="product-parameters" v-if="detailType == 1">
                <ul class="parameter-list">
                    <li>
                        <span class="list-name">藏品规格:</span>
                        <span class="parameters">{{holdingDetails.specification}}</span>
                    </li>
                    <li>
                        <span class="list-name">产品年代:</span>
                        <span class="parameters">{{holdingDetails.age}}</span>
                    </li>
                    <li>
                        <span class="list-name">品相等级:</span>
                        <span class="parameters">{{holdingDetails.grade}}</span>
                    </li>
                </ul>
                <div class="introduction">
                    {{holdingDetails.introduction}}
                </div>
            </div>
            <div class="auction-rules" v-if="detailType == 2">
                <ul>
                    <li>
                        <p>
                            厦门古美术遵循“公开、公平、公正、诚实信用”的原则，为确保竞买会员、委托方、拍卖方的权益，制定以下规则，如果您参与本拍卖，即认为认同本拍卖规则，请仔细阅读。
                        </p>
                    </li>
                    <li>
                        <h3>预展出价：</h3>
                        <p>
                            1．开拍之前，拍卖专场以预展场的形式展现。预展期间允许出价。
                            2．凡是在预展场出价最高者，且在该藏品拍卖竞价时无人应价高于他，如果该拍品成交价万元以下，可获得奖励减免200元货款；该拍品成交价万元以上，奖励为减免1000元货款。
                        </p>
                    </li>
                    <li>
                        <h3>竞价方式：</h3>
                        <p>
                            1．拍卖开始后，竞买会员按竞买阶梯报价（可高于加价梯度报价，但不能低于加价幅度报价）。开始倒计时10秒时间内，即倒计时0之前，有会员应价，10秒倒计时重新开始。直至10秒倒计时内无人应价，此件结拍。
                            2．拍卖提供三种出价方式：
                            o 直接出价：会员直接输入金额竞拍
                            o 加一手：在当前价上加一个最小加价幅度金额
                            o 委托出价：委托系统出价。若当前价在委托范围内，由系统自动帮忙出价。竞价金额为当前价加一个最小加价幅度
                            3．竞价阶梯：5000以内加价幅度为200元整数倍，5000以上加价幅度为500元整数倍，10000以上加价幅度为1000元整数倍，50000以上加价幅度为千位2、5、8、0 。

                        </p>
                    </li>
                    <li>
                        <h3>交易方式：</h3>
                        <p>
                            拍卖结束后两天内安排付款，货款到账后一到两个工作日内安排发货。会员收货后7天鉴赏期内，有不满意可与管理员协商退货事宜，谢绝恶意退货，如不经协商自行退货的，我们将收取拍品成交价15%的相关费用。若经协商并且收到退货完好，将在两个工作日内财务安排退款。
                        </p>
                    </li>
                </ul>
            </div>
            <div class="comment" v-if="detailType == 3">
                <div>
                    <p class="icon"><span class="glyphicon glyphicon-star-empty"></span></p>
                    <p class="no-c">暂无藏品评论</p>
                    <p class="wait">请稍后再试.</p>
                </div>
            </div>
        </div>
        <div class="technical-support">
            <img src="data:image/png;base64,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"
                 alt="">
            <p>技术支持 古美术</p>
        </div>
        <mt-popup
                v-model="popupVisible"
                position="middle">
            <div class="bid-container">
                <span class="close-popup"
                      @click="close">&times</span>
                <div class="b-title">
                    {{bTitle}}
                </div>
                <mt-field placeholder="设置出价金额" type="number" v-model="bidPrice"></mt-field>
                <div class="bid-alert">
                    当前价格为3000元, 请以200为基础价格,出价高于当前价格。
                </div>
                <button class="btn bid-btn-sure"
                        @click="sure">确定
                </button>
            </div>
        </mt-popup>
        <mt-actionsheet
                :actions="actions"
                v-model="sheetVisible">
        </mt-actionsheet>
        <div class="bottom-select">
            <div v-if="detailType == 1 || detailType == 2"
                 class="attention-bid-like">
                <div class="attention-like">
                    <span class="attention" @click="like" :class="{'has-like':holdingDetails.like != 0}">
                        <span class="glyphicon glyphicon-thumbs-up"></span>
                        <span>点赞({{holdingDetails.like}})</span>
                    </span>
                    <span class="like" @click="attentionSure" :class="{'has-like':holdingDetails.attention}">
                        <span class="glyphicon glyphicon-star-empty"></span>
                        <span>关注</span>
                    </span>
                </div>
                <div class="bid-bottom-btn"
                     @click="bid">
                    <p>出价</p>
                    <p>(保证金：￥{{holdingDetails.margin}}元)</p>
                </div>
            </div>
            <div v-if="detailType == 3"
                 class="attention-bid-like">
                <div class="comment-input">
                    <mt-field placeholder="填写评论内容" v-model="comment"></mt-field>
                </div>
                <div class="submit-comment">
                    <button class="submit-comment-btn btn">添加评论</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import request from '../../shared/request/asyncRequest';
    import prompt from '../../shared/services/promptServices';
    export default {
        data(){
            return {
                popupVisible: false,
                bidPrice: '',
                detailType: 1,
                comment: '',
                bTitle: '自由出价',
                actions: [],
                sheetVisible: false,
                holdingDetails: ''
            }
        },
        methods: {
            showBid(){
                if (!this.$store.state.user.userId) {
                    this.$router.push({path: '/login'});
                    this.$store.state.loginState = {name: 'holdingDetail', params: this.$route.params};
                    return;
                }
                this.popupVisible = true
            },
            close(){
                this.popupVisible = false
            },
            like(){

            },
            attentionSure(){

            },
            sure(){
                if (!this.bidPrice) {
                    prompt.alert('请输入价格!');
                    return
                }
                if (this.bidPrice < this.holdingDetails.currentPrice) {
                    prompt.alert('输入价格必须大于当前价格!');
                    return
                }
                request.dashboard.bid(
                    {
                        price: this.bidPrice,
                        userId: this.$store.state.user.userId,
                        id: this.$route.params.id
                    }).then(data => {
                    prompt.alert(data.message);
                    this.holdingDetails.currentPrice = this.bidPrice;
                    this.popupVisible = false;
                }).catch(err => {
                    prompt.alert(err.message || '服务器错误!');
                })
            },
            bid(){
                if (!this.$store.state.user.userId) {
                    this.$router.push({path: '/login'});
                    this.$store.state.loginState = {name: 'holdingDetail', params: this.$route.params};
                    return;
                }
                this.sheetVisible = true
            },
            checkType(type){
                this.detailType = type
            }
        },
        mounted(){
            var _vm = this;
            this.$store.state.isLogin = true;
            request.dashboard.getHoldingDetails(this.$route.params).then(data => {
                _vm.holdingDetails = data
            }).catch(err => {
                prompt.alert(err.message || '服务器错误!');
            });
            _vm.actions = [
                {name: '请选择出价方式'},
                {
                    name: '自由出价',
                    method(){
                        _vm.popupVisible = true;
                        _vm.bTitle = '自由出价';
                    }
                },
                {
                    name: '委托出价',
                    method(){
                        _vm.popupVisible = true;
                        _vm.bTitle = '委托出价';
                    }
                },
                {
                    name: '加一手',
                    method(){
                        _vm.popupVisible = true;
                        _vm.bTitle = '委托出价';
                        _vm.bidPrice = parseFloat(_vm.holdingDetails.currentPrice) + 200
                    }
                }
            ]
        }
    }
</script>
<style type="text/scss" lang="scss">

    .preview-detail-container {
        padding-bottom: 30px;
        .technical-support {
            position: relative;
            bottom: 0;
        }
        .img-swipe {
            height: 350px;
            margin: 0 -15px;
            img {
                width: 100%;
                height: 350px;
            }
        }
        .start-time {
            margin: 0 -15px 0;
            background: #000;
            color: #fff;
            padding-left: .8em;
            line-height: 2.5em;
            font-size: 1.1em;
        }
        .holding-name {
            font-size: 16px;
            padding: .5em 0;
        }
        .bid-situation {
            color: #f00;
            font-size: 1.5em;
            margin-bottom: 5px;
            span {
                font-size: 0.8em;
            }
        }
        .price {
            color: #999;
        }
        .bid {
            background: #FFCCCC;
            color: #666;
            border: 5px solid #eee;
            border-right: none;
            border-left: none;
            height: 50px;
            line-height: 40px;
            margin: 0 -15px;
            text-align: center;
            position: relative;
            .bid-to {
                line-height: 40px;
                display: inline-block;
                height: 40px;
                padding: 0 3em;
                cursor: pointer;
                color: #666;
                font-size: 1em;
            }
            .icon {
                color: #eee;
                font-size: 46px;
                position: absolute;
                top: -2px;
            }
            .icon-left {
                left: .5em;
            }
            .icon-right {
                right: .5em;
            }
        }
        .mint-popup-middle {
            border-radius: 5px;
        }
        .bid-container {
            background: #fff;
            width: 300px;
            padding: 10px;
            border-radius: 5px;
            position: relative;
            .b-title {
                font-size: 1.3em;
                color: #000;
                text-align: center;
                border-bottom: 1px solid #ddd;
                line-height: 40px;
            }
            .bid-alert {
                color: #333;
                text-align: center;
            }
            .bid-btn-sure {
                background: #ee3333;
                height: 40px;
                font-size: 15px;
                color: #fff;
                border-radius: 5px;
                width: 100%;
                margin: 15px 0;
            }
            .close-popup {
                position: absolute;
                background: #ee3333;
                border: 1px solid #fff;
                font-size: 16px;
                height: 30px;
                line-height: 30px;
                width: 30px;
                border-radius: 50%;
                text-align: center;
                color: #fff;
                right: -11px;
                top: -11px;
                cursor: pointer;
            }
        }
        .bid-recording {
            font-size: 15px;
            .recording-title {
                font-size: 15px;
                color: #222;
                line-height: 44px;
                border-bottom: 1px solid #ddd;
                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
            }
            .bid-list {
                margin: 0 -15px;
                padding: 0 15px;
                border-bottom: 5px solid #ddd;
                li {
                    color: #999;
                    line-height: 44px;
                    &:after {
                        content: '';
                        display: block;
                        clear: both;
                    }
                    .price {
                        color: #ee3333;
                        width: 25%;
                        text-align: right;
                    }
                    .bid-name {
                        width: 25%;
                        text-align: left;
                    }
                    .bid-times {
                        width: 50%;
                        text-align: center;
                    }
                    div {
                        float: left;
                    }
                }
            }
            .show-more {
                float: right;
                .more-icon {
                    color: #888;
                }
            }
        }
        .product-details {
            .product-d-list {
                line-height: 37px;
                color: #333;
                font-size: 15px;
                margin: 0 -15px;
                border-bottom: 1px solid #ddd;
                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                li {
                    float: left;
                    width: 33%;
                    text-align: center;
                    .active {
                        color: #ee3333;
                        padding-bottom: 5px;
                        border-bottom: 2px solid #ee3333;
                    }
                }

            }
        }
        .product-parameters {
            color: #666666;
            font-size: 14px;
            padding-bottom: 30px;
            .parameter-list {
                li {
                    display: flex;
                    padding: 10px 0;
                    border-bottom: 1px dotted #999;
                    &:after {
                        content: '';
                        display: block;
                        clear: both;
                    }
                    .parameters {
                        display: inline-block;
                        word-wrap: break-word;
                        word-break: break-all;
                        -webkit-box-flex: 1;
                        -webkit-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        margin-left: 5px;
                    }
                }
            }
            .introduction {
                margin-top: 10px;
            }
        }
        .auction-rules {
            color: #999;
            font-size: 14px;
            li {
                padding: 10px 0;
                h3 {
                    color: #ee3333;
                    font-size: 18px;
                    margin: 0;
                    padding: 0;
                    font-weight: normal;
                }
                p {
                    margin-top: 5px;
                }
            }
        }
        .comment {
            .icon {
                text-align: center;
                font-size: 5em;
                color: #ccc;
                margin: 0;
            }
            .no-c {
                color: #666;
                font-size: 16px;
                text-align: center;
                margin: 0;
            }
            .wait {
                color: #555;
                font-size: 14px;
                text-align: center;
                margin-top: 10px;
            }
        }
        .technical-support {
            text-align: center;
            color: #888;
            img {
                width: 45px;
                height: 45px;
            }
        }
        .bottom-select {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            height: 50px;
            background: #fff;
            .attention-bid-like {
                height: 50px;
                width: 100%;
                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                .attention-like {
                    float: left;
                    width: 50%;
                    .attention, .like {
                        float: left;
                        width: 50%;
                        text-align: center;
                        height: 50px;
                        color: #555;
                        font-size: 14px;
                        line-height: 50px;
                        font-style: normal;
                    }
                    .has-like {
                        color: #f00;
                    }
                }
                .bid-bottom-btn {
                    float: left;
                    width: 50%;
                    background: #ee3333;
                    height: 50px;
                    color: #fff;
                    font-size: 1.3em;
                    text-align: center;
                    p {
                        margin: 0;
                        padding: 0;
                    }
                    p:nth-child(2) {
                        font-size: 14px;
                        margin-top: -5px;
                    }
                }
            }
            .comment-input {
                float: left;
                width: 70%;
            }
            .submit-comment {
                float: left;
                width: 30%;
                text-align: center;
                .submit-comment-btn {
                    color: #fff;
                    height: 30px;
                    background: #ee3333;
                    font-size: 16px;
                    border-radius: 5px;
                    width: 80%;
                    margin-top: 10px;
                    line-height: 18px;
                }
            }
        }
    }
</style>