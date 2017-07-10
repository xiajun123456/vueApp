<template>
    <div class="spike-list-container">
        <div class="global-header header-comm">
            <div class="go-before" @click="$router.go(-1)">
                <span class="glyphicon glyphicon-menu-left"></span>
            </div>
            <span>秒杀列表</span>
        </div>
        <div class="countdown">
            <span class="glyphicon glyphicon-time"></span>
            开拍倒计时<span class="time-bg">{{parseInt(time/3600)}}</span>时<span
                class="time-bg">{{parseInt(time%3600/60)}}</span>分<span
                class="time-bg">{{parseInt(time%3600%60)}}</span>秒
        </div>
        <div class="spike-list">
            <ul>
                <li class="list-item"
                    v-for="item in spikeList"
                    @click="$router.push({ name: 'spikeProductDetails', params: { typeId: item.id }})">
                    <img :src="item.imgUrl" alt="">
                    <div class="text-list">
                        <ul>
                            <li>
                                {{item.name}}
                            </li>
                            <li>
                                年代 {{item.age}}
                            </li>
                            <li>
                                秒拍价<span class="price">${{item.price}}</span>
                            </li>
                        </ul>
                        <span class="go-details">
                            <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                        <span class="spike-btn" v-if="hasSpike">
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" type="text/scss">
    @keyframes spike {
        from {
            transform: scale(0.9);
        }
        to {
            transform: scale(1);
        }
    }

    @-moz-keyframes spike /* Firefox */
    {
        from {
            transform: scale(0.9);
        }
        to {
            transform: scale(1);
        }
    }

    @-webkit-keyframes spike /* Safari 和 Chrome */
    {
        from {
            transform: scale(0.9);
        }
        to {
            transform: scale(1);
        }
    }

    @-o-keyframes spike /* Opera */
    {
        from {
            transform: scale(0.9);
        }
        to {
            transform: scale(1);
        }
    }

    .spike-list-container {
        position: absolute;
        top: 36px;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ee3333;
        padding: 5px;
        overflow-y: auto;
        .countdown {
            background: #FFCC00;
            height: 50px;
            line-height: 50px;
            border-radius: 4px;
            text-align: center;
            color: #666;
            font-size: 17px;
            .time-bg {
                color: #fff;
                padding: 5px;
                background: #333;
                border-radius: 3px;
                margin: 0 5px;
            }
        }
        .spike-list {
            margin-top: 10px;
            background: #fff;
            ul li.list-item {
                border-bottom: 1px solid #ddd;
                position: relative;
                padding: 10px 30px 10px 10px;
                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
                img {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    width: 70px;
                    height: 70px;
                    border-radius: 3px;
                    float: left;
                }
                .text-list {
                    .spike-btn {
                        -webkit-animation: spike .3s linear .2s infinite alternate running;
                        -o-animation: spike .3s linear .2s infinite alternate running;
                        animation: spike .3s linear .2s infinite alternate running;
                        position: absolute;
                        bottom: 6px;
                        right: 16px;
                        width: 70px;
                        height: 70px;
                        background: #f00;
                        border-radius: 50%;
                        &:after {
                            content: '抢';
                            position: absolute;
                            top: 5px;
                            left: 5px;
                            right: 5px;
                            bottom: 5px;
                            color: #fff;
                            font-size: 1.3em;
                            line-height: 60px;
                            text-align: center;
                            border-radius: 50%;
                            background: #ee3333;
                        }
                    }
                    padding-left: 80px;
                    ul {
                        li:nth-child(1) {
                            font-size: 15px;
                            color: #000;
                        }
                        li:nth-child(2) {
                            color: #999;
                            line-height: 27px;
                        }
                        .price {
                            color: #ee3333;
                            font-size: 17px;
                            margin-left: 10px;
                        }
                    }
                }
                .go-details {
                    position: absolute;
                    color: #ddd;
                    right: 5px;
                    top: 20px;
                    font-size: 13px;
                }
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import request from '../../shared/request/asyncRequest'
    export default {
        data(){
            return {
                spikeList: '',
                time: '',
                hasSpike: '',
                timers: null
            }
        },
        mounted(){
            this.$store.state.isLogin = true;
            var self = this;
            request.spike.getSpikeCommoditylist(this.$route.params).then(data => {
                this.spikeList = data.rows;
                this.time = data.time;
                this.hasSpike = data.hasSpike;
                this.timers = setInterval(() => {
                    self.time--
                }, 1000)
            })
        },
        destroyed(){
            clearInterval(this.timers)
            this.timers = null
        }
    }
</script>