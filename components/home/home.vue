<template>
    <div>
        <div class="center">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <a href="#">
                        <img src="../../static/images/swipe6.jpg">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img src="../../static/images/swipe2.jpg">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a>
                        <img src="../../static/images/swipe3.jpg">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img src="../../static/images/ganhuo.jpg">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a>
                        <img src="../../static/images/swipe7.jpg">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a>
                        <img src="../../static/images/swipe5.jpg">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a>
                        <img src="../../static/images/swipe.jpg">
                    </a>
                </mt-swipe-item>

            </mt-swipe>
            <!--<div class="zhezhao">-->
                <!--<span>特百惠优质家居用品，给你好生活！</span>-->
            <!--</div>-->
        </div>
        <div>
            <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/goodslist'>
                            <span class="mui-icon mui-icon-home"></span>
                            <div class="mui-media-body">产品展示</div>
                        </router-link>

                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/photo/share">
                            <span class="mui-icon mui-icon-email"></span>
                            <div class="mui-media-body">理家课堂</div>
                        </router-link>

                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" >
                        <router-link to='/map'>
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">惠之家</div>
                        </router-link>


                    </li>

                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="menuToggle">
                        <router-link to='/hotgoods'>
                            <span class="mui-icon mui-icon-gengduo"></span>
                            <div class="mui-media-body">更多</div>
                        </router-link>
                    </li>

                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/newslist'>
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">热点资讯</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/goodslist'>
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">创业加盟</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">关于我们</div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>

        <hot-goods></hot-goods>
    </div>


</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                imgs: []
            }
        },created(){
            this.$http.get('http://webhm.top:8899/api/getlunbo')
                    .then(res=> {
//                    console.log(res.body);
                        this.imgs = res.body.message;
                    }, res=> {
                        console.log('获取图片资源失败');
                    })
        },methods:{

    }
    };

</script>
<style scoped>
    .mint-swipe {
        margin-top: 40px;
        height: 250px;
    }

    .mint-swipe img {
        width: 100%;
        height: 250px;
    }
    .mui-table-view.mui-grid-view.mui-grid-9{
        margin-top: -10px;
        background-color: #fff;
    }
    .mui-table-view.mui-grid-view.mui-grid-9 li{
        border: none;

    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-phone:before,
    .mui-icon-search:before,
    .mui-icon-gengduo:before{
        content: '';
        display: inline-block;
        height: 50px;
        width: 50px;

    }
    .mui-icon-home:before{
        background: url("../../static/images/goodShow.png");

        background-repeat: round;
    }
    .mui-icon-email:before{
        background: url("../../static/images/lijia.gif");
        background-repeat: round;
    }
    .mui-icon-chatbubble:before{
        background: url("../../static/images/news.png");
        background-repeat: round;
    }
    .mui-icon-gengduo:before{
        background: url("../../static/images/gengduo.png");
        background-repeat: round;
    }
    .mui-icon-location:before{
        background: url("../../static/images/zixun.gif");
        background-repeat: round;
    }
    .mui-icon-search:before{
        background: url("../../static/images/jiameng.gif");
        background-repeat: round;
    }
    .mui-icon-phone:before{
        background: url("../../static/images/callme.png");
        background-repeat: round;
    }
.center{

}
    mu-sub-header{
        background-color: plum;
        width: 100%;
    }
    /*.zhezhao{*/
      /*!*position: fixed;*!*/
        /*z-index: 999;*/
        /*float: left;*/
        /*width: 100%;*/
        /*height: 40px;*/
        /*margin-top: -80px;*/
        /*color: #fff;*/
        /*font-size: 20px;*/
        /*font-family: 华文楷体;*/
        /*background-color: rgba(0,0,0,0.5);*/
        /*line-height: 50px;*/
    /*}*/
    /*.zhezhao span{*/
        /*height: 100%;*/
        /*line-height: 50px;*/
        /*width: 100px;*/
    /*}*/
</style>
