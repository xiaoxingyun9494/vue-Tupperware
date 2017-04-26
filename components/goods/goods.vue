<template>
    <div class="tmpl" style="height:100%">

        <mt-loadmore :bottom-method="loadBottom" :auto-fill="autoFill" :bottom-distance="size"
                     :bottom-all-loaded="hasProduct">
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in products" :key="item.id">
                    <!--<router-link :to="'/goodsdetail/'+item.id">-->
                    <router-link to="/goodsdetail">
                        <img class="mui-media-object" :src="item.img_url">
                        <div class="mui-media-body">{{item.title}}</div>
                        <div class="desc">
                            <div class="sell">
                                <span>￥{{item.sell_price}}</span>
                                <s>￥{{item.market_price}}</s>
                            </div>
                            <div class="detail">
                                <div class="hot">
                                    热卖中
                                </div>
                                <div class="count">
                                    剩{{item.stock_quantity}}件
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>
<script>
    export default {
        name: 'shop',
        data() {
            return {
                products: [],
                autoFill: false,
                pageindex: 1,
                size: 70,
                hasProduct: false,
            }
        }, created() {
//            let url = '/api/getgoods?pageindex=' + this.pageindex;
            //发起请求获取数据
//            this.$http.get(`${this.config.apiPath}${url}`)
            this.$http.get('/components/goods/shuibei.json')
                .then(res => {
                    //将数据放到页面中
                    this.pageindex++;
                    this.products = res.body.message;

                }, res => {
                    console.log('获取商品信息失败');
                });


        }, methods: {

        },
        mounted: function () {
            this.$nextTick(function () {
                this.$on('getqingjie', function () {
                    this.$http.get('/components/goods/qingjie.json')
                        .then(res => {

                            this.products = res.body.message;
                        }, res => {
                            console.log('拉取数据失败');
                        });

                })
            })

            this.$nextTick(function () {
                this.$on('getbaobei', function () {
                    this.$http.get('/components/goods/baobei.json')
                        .then(res => {

                            this.products = res.body.message;
                        }, res => {
                            console.log('拉取数据失败');
                        });

                })
            })

            this.$nextTick(function () {
                this.$on('getchufang', function () {
                    this.$http.get('/components/goods/chufang.json')
                        .then(res => {

                            this.products = res.body.message;
                        }, res => {
                            console.log('拉取数据失败');
                        });

                })
            })

            this.$nextTick(function () {
                this.$on('getxiuxian', function () {
                    this.$http.get('/components/goods/xiuxian.json')
                        .then(res => {

                            this.products = res.body.message;
                        }, res => {
                            console.log('拉取数据失败');
                        });

                })
            })

            this.$nextTick(function () {
                this.$on('getbingxiang', function () {
                    this.$http.get('/components/goods/bingxiang.json')
                        .then(res => {

                            this.products = res.body.message;
                        }, res => {
                            console.log('拉取数据失败');
                        });

                })
            })

            this.$nextTick(function () {
                this.$on('getshuibei', function () {
                    this.$http.get('/components/goods/shuibei.json')
                        .then(res => {

                            this.products = res.body.message;
                        }, res => {
                            console.log('拉取数据失败');
                        });

                })
            })


        },

    }
</script>
<style scoped>
    .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
        margin: 0px;
        padding: 0px;
        border: 1px solid rgba(220, 35, 220, 0.2);

    }

    .sell > span {
        padding-left: 5px;
        float: left;
        color: red;
        text-align: left;
    }

    .sell s {
        padding-left: 110px;
    }

    .detail > .hot {
        float: left;
        padding-left: 5px;
        text-align: left;
        font-size: 15px;
    }

    .detail > .count {
        float: right;
        text-align: right;
        font-size: 15px;
    }

    /*撑开，去除浮动没有的高度*/

    .detail {
        overflow: hidden;
    }

    .desc {
        color: #ff4081;
        background-color: rgba(220, 35, 220, 0.2);
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
        height: 200px;
    }
    mt-loadmore{
        margin-bottom: 45px;
    }
</style>
