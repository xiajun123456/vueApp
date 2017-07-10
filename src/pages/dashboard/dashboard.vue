<template>
    <div class="dashboard-container ">
        <div class="global-header header-comm">
            <span>古美术</span>
            <span class="glyphicon glyphicon-search header-search-log"></span>
        </div>
        <div class="dashboard-sort">
            <div class="sort-list" @click="sort(1)">
                <span :class="{'sort-list-active':sortActive == 1}"> 今日热拍({{hotShotNum}})</span>
            </div>
            <div class="sort-list" @click="sort(2)">
                <span :class="{'sort-list-active':sortActive == 2}">预览列表</span>
            </div>
        </div>
        <div class="previews-list" v-if="sortActive == 2">
            <div>
                <span class="sort-list-active">06日</span>
            </div>
            <div>
                <span>07日</span>
            </div>
            <div>
                <span>更多</span>
            </div>
        </div>
        <div class="type-list-container">
            <div v-if="sortActive == 1" class="swipe-container">
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
            <div v-if="sortActive == 1" class="special-list-title">
                <span class="slash"></span>
                <span class="slash"></span>
                <span class="slash"></span>
                <span class="special-text">专场列表</span>
                <span class="slash"></span>
                <span class="slash"></span>
                <span class="slash"></span>
            </div>
            <ul class="list-item">
                <li class="item"
                    v-for="item in previewsList"
                    @click="goList(item.id)">
                    <div class="item-img">
                        <img :src="item.imgUrl" alt="">
                        <div class="item-title">
                            <div class="item-name">
                                {{item.holdingName}}
                            </div>
                            <div class="item-type">
                                <span> {{item.holdingType}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="item-details">
                        <p> {{item.holdingDetails}}</p>
                        <p> {{item.startTime}}</p>
                        <div class="previews-number">
                            <p>预览中</p>
                            <p> {{item.previewsPeopleNum}}</p>
                            <p>人围观</p>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>
<style lang="scss" type="text/scss">
    .dashboard-container {
        &:before {
            content: '';
            display: table;
        }
        .sort-list-active {
            color: #F23030;
            border-bottom: 2px solid #F23030;

        }
        .global-header {
            text-align: center;
            color: #fff;
            .header-search-log {
                position: absolute;
                right: 1em;
                line-height: 2.5em;
                font-weight: normal;
            }
        }
        .dashboard-sort {
            &:after {
                content: '';
                display: block;
                clear: both;
            }
            .sort-list {
                float: left;
                text-align: center;
                width: 50%;
                color: #333;
                padding: .4em;
                font-size: 1.1em;
                span {
                    padding: .3em;
                }
            }
        }
        .type-list-container {
            margin: 0 -15px 0;
            .swipe-container {
                width: 100%;
                height: 200px;
            }
            .swipe-item-c {
                width: 100%;
                height: 200px;
                img {
                    width: 100%;
                    height: 200px;
                }
            }
            .special-list-title {
                text-align: center;
                color: #ee3333;
                font-weight: 600;
                line-height: 2.5em;
                font-size: 1.1em;
                .slash {
                    height: 1em;
                    width: 2px;
                    background: #999;
                    display: inline-block;
                    transform: rotate(20deg);
                    position: relative;
                    margin-left: 5px;
                }
                .special-text {
                    margin: 0 1em;
                }
            }
            .list-item {
                width: 100%;
                position: relative;
                .item-img {
                    position: relative;
                    height: 230px;
                    overflow: hidden;
                    &:hover img {
                        transform: scale(1.1);
                    }
                    img {
                        width: 100%;
                        height: 230px;
                        transition: all .3s;
                    }
                }
                .item-title {
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    height: 84px;
                    margin-top: -42px;
                    .item-name {
                        width: 100%;
                        color: #fff;
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .item-type {
                        text-align: center;
                        width: 100%;
                        span {
                            color: #fff;
                            padding: 0 1em;
                            display: inline-block;
                            height: 30px;
                            line-height: 30px;
                            border-radius: 30px;
                            background: rgba(0, 0, 0, 0.8);
                        }
                        margin-top: 1.5em;
                    }
                }
                .item-details {
                    padding: .7em 0;
                    position: relative;
                    p {
                        width: 75%;
                        margin: 0;
                        padding-left: .8em;
                    }
                    p:nth-child(1) {
                        font-size: 1.2em;
                        color: #000;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .previews-number {
                        width: 20%;
                        position: absolute;
                        right: 3%;
                        bottom: 1.5em;
                        background: rgba(30, 137, 109, 0.5);
                        font-size: 1em;
                        padding: 1em 0;
                        p {
                            width: 100%;
                            padding-left: 0;
                            text-align: center;
                            color: #fff;
                        }
                    }
                }
            }
        }
        .previews-list {
            display: flex;
            display: -webkit-flex;
            border-top: 1px solid #ddd;
            margin: 0 -15px;
            padding: 0 15px;
            div {
                font-size: 1.1em;
                padding: .4em;
                flex-grow: 1;
                text-align: center;
                span {
                    padding: .3em;
                }
            }
        }

    }
</style>
<script type="text/ecmascript-6">
    import re from '../../shared/request/asyncRequest.js';
    import prompt from '../../shared/services/promptServices';
    export default {
        name: "dashboard",
        data: function () {
            return {
                hotShotNum: 10,
                sortActive: 1,
                previewsList: []
            }
        },
        methods: {
            sort(item){
                this.sortActive = item
            },
            goList(id){
                this.$router.push({ name: 'previewList', params: { typeId: id }})
            }
        },
        mounted(){
            let self = this;
            re.dashboard.getPreviewList({}).then(data => {
                this.previewsList = data.rows;
            }).catch(err => {
                prompt.alert(err.message || '服务器错误!');
            })
        }
    }
</script>