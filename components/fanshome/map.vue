
<template>
    <div>
        <go-back-header title="位置详情"></go-back-header>
        <div class="key">
            <label>关键词：<input v-model="keyword"></label> <label>地区：<input v-model="location"></label>

        </div>

        <!--<baidu-map class="map-container">-->

        <!--</baidu-map>-->
        <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15"  :scroll-wheel-zoom="true" >
            <bm-view class="bm-view"> </bm-view>
            <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>

            <!--比例-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"/>
            <!--缩放-->
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"/>
            <!--缩略图-->
            <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT"/>
            <!--定位控件-->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"/>
            <!--城市切换控件-->
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"/>
            <!--可拖动的点标记-->
            <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :label="{content: '特百惠', opts: {offset: {width: 20, height: -10}}}"></bm-marker>
            <!--自定义图标的点-->



        </baidu-map>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                location: '广西',
                keyword: '特百惠',
                theme: [
                    {
                        "featureType": "all",
                        "elementType": "geometry",
                        "stylers": {
                            "hue": "#007fff",
                            "saturation": 89
                        }
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#ffffff"
                        }
                    }
                ]
            }
        }
    }
</script>



<!--<template>-->
    <!--<label>关键词：<input v-model="keyword"></label>-->
    <!--<label>地区：<input v-model="location"></label>-->
    <!--<baidu-map class="map-container">-->
        <!--<bm-view class="bm-view"> </bm-view>-->
        <!--<bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>-->
    <!--</baidu-map>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--location: '北京',-->
                <!--keyword: '百度'-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
<!--<style lang="stylus" scoped>-->
    <!--.map-container {-->
        <!--.bm-view {-->
            <!--width: 100%;-->
            <!--height: 400px;-->
        <!--}-->
    <!--}-->
<!--</style>-->
<style scoped>
    body{
        position: relative;
        /*overflow-x: visible;*/
    }
    .map {
        width: 100%;
        height: 700px;
        clear: both;
        /*margin-top: 41px;*/
        /*margin-bottom: 48px;*/
    }
    go-back-header{
        position: fixed;

    }
    label{
        margin-left: 5px;
    }
    input{
        margin-top: 10px;
        display: inline-block;
        width: 35%;
        color: #000;
        border-radius: 3px;
        border: 1px solid #eee;
        margin-bottom: 10px;

    }
    .bm-view{
        width: 100%;
        height: 300px;
    }
    .key{
        width: 100%;
        padding-left:15px;
        /*position: fixed;*/
        z-index: 9999;
        clear: both;
        color: #fff;
        background-color: rgba(0,0,0,0.5);
    }
    go-back-header{
    position: absolute;
    width: 100%;
    top: 45px;

    }
</style>