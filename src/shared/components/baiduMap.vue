<template>
    <div>
        <div id="map">

        </div>
        <div class="test">
            {{centerPoint.c}}
        </div>
    </div>

</template>
<style>
    .test{
        position: absolute;
        top:100px;
        left: 100px;
    }
</style>
<script type="text/ecmascript-6">
    var baiduMap = function (c,p) {
        var map = new BMap.Map("map");    // 创建Map实例
        var point = new BMap.Point(c,p);
        map.centerAndZoom(point, 12);
        var marker = new BMap.Marker(point);// 创建标注
        map.addOverlay(marker);
        map.setCurrentCity("成都");          // 设置地图显示的城市 此项是必须设置的
        map.centerAndZoom(new BMap.Point(c,p), 11);  // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    };
    export default {
        props:['centerPoint'],
        watch:{
            centerPoint () {
                baiduMap(this.centerPoint.c,this.centerPoint.p)
            }
        },
        mounted(){
            baiduMap(this.centerPoint.c,this.centerPoint.p)
        }
    }
</script>