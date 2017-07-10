<template>
    <div class="guide-container">
        <div class="guide-logo">
            <img src="../../images/ca1349540923dd54e767751bdb09b3de9c8248a9.jpg" alt="">
        </div>
        <div class="go-apply">
            <button class="btn go-apply-btn">进入应用</button>
        </div>
        <div class="guide-footer">
            技术支持 古树美
        </div>
    </div>
</template>
<style type="text/scss" lang="scss">
    .guide-container{
        .guide-logo{
            width: 50%;
            margin: 0 auto;
            margin-top: 5em;
            img{
                width: 100%;
            }
        }
        .go-apply{
            margin-top:12em;
            .go-apply-btn{
                width: 100%;
                height: 45px;
                border-radius: 45px;
                width: 100%;
                background: #ee3333;
                color: #fff;
                font-size: 1em;
               &:hover{
                   outline: none;
                   background: #ee3333;
               }
            }
        }
        .guide-footer{
            position: absolute;
            bottom: 1em;
            text-align: center;
            left: 0;
            right: 0;
            text-align: center;
            font-size: .7em;
        }

    }
</style>
<script type="text/ecmascript-6">
    export default {
        data(){
            return{

            }
        }
    }
</script>