<template>
    <div class="my-money-container">
        <div class="global-header header-comm">
            <div class="go-before" @click="$router.go(-1)">
                <span class="glyphicon glyphicon-menu-left"></span>
            </div>
            <span>账户余额</span>
        </div>
        <div class="all-money">
            账户总额(元)
            <p>0.00</p>
        </div>
        <div class="money-sort">
            <div class="sort">
                冻结余额(元)
                <p>0.00</p>
            </div>
            <div class="sort">
                可用余额(元)
                <p>0.00</p>
            </div>
        </div>
        <div class="account-details">
            账户明细 <span class="glyphicon glyphicon-menu-right"></span>
        </div>
        <div class="technical-support">
            <img src="data:image/png;base64,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"
                 alt="">
            <p>技术支持 古美术</p>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {

            }
        },
        mounted(){
            this.$store.state.isLogin = true;
        }
    }
</script>
<style lang="scss" type="text/scss">
    .my-money-container{
        .all-money{
            padding: 1.3em 0;
            font-size: 17px;
            p{
                color: #ee3333;
                text-align: right;
                font-weight: normal;
                font-size: 1.3em;
                padding: 0;
                margin: 0;
            }
        }
        .money-sort{
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            margin: 0 -15px;
            &:after{
                content: '';
                display: block;
                clear: both;
            }
            .sort:nth-child(1){
                border-right: 1px solid #ddd;
            }
            .sort{
                float: left;
                width: 50%;
                font-size: 17px;
                padding:10px;
                p{
                    text-align: right;
                    font-size:20px;
                    color: #111;
                    margin: 0;
                }
            }
        }
        .account-details{
            color: #000;
            font-size: 17px;
            line-height: 2.5em;
            background: #ddd;
            margin: 0 -15px;
            padding: 0 15px;
            &:after{
                content: '';
                display: block;
                clear: both;
            }
            .glyphicon{
                float: right;
                line-height: 2.5em;
                color: #999;
            }
        }
    }
</style>