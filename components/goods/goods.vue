<template>
    <div class="tmpl" style="height:100%">

        <mt-loadmore :bottom-method="loadBottom" :auto-fill="autoFill" :bottom-distance="size" :bottom-all-loaded="hasProduct">
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in products" :key="item.id">
                    <router-link :to="'/goods/detail/'+item.id">
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
        name:'shop',
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
            this.$http.get('/components/goods/shop1.json')
                .then(res => {
                    //将数据放到页面中
                    this.pageindex++;
                    this.products = res.body.message;

                }, res => {
                    console.log('获取商品信息失败');
                });

        }, methods: { //组件创建以后，index就变成了第2页，以后你拉就拉第二页以后的部分
            //如果你拉错了,index不加，还是再从第二页拉
            getchufang() {
                // 加载更多数据
                // this.allLoaded = true; // 若数据已全部获取完毕
                // this.$broadcast('onBottomLoaded', id);//vue2.0中没有了
                this.$http.get('/components/goods/shop2.json')
                    .then(res => {

                        this.products = res.body.message;
                    }, res => {
                        console.log('拉取数据失败');
                    });
            }
        }
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
.sell s{
    padding-left: 110px;
}
    .detail >.hot {
        float: left;
        padding-left: 5px;
        text-align: left;
        font-size: 15px;
    }

    .detail >.count {
        float: right;
        text-align: right;
        font-size: 15px;
    }


    /*撑开，去除浮动没有的高度*/

    .detail {
        overflow: hidden;
    }

    .desc {
        color:palevioletred;
        background-color: rgba(220, 35, 220, 0.2);
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
        height: 200px;
    }
</style>
