<template>
    <div>
        <go-back-header title="商品详情"></go-back-header>
        <div class="outer-swiper">
            <div class="swiper">
                <my-swipe :imgs="imgs"></my-swipe>
            </div>
        </div>
        <div class="product-desc">
            <ul>
                <li><span class="product-desc-span">
                    {{prodInfo.title}}
                </span></li>
                <li class="price-li">市场价：
                    <s>￥{{prodInfo.market_price}}</s> 销售价：<span>￥{{prodInfo.sell_price}}</span></li>
                <li class="number-li">购买数量：<span @click="substract">-</span><span>{{pickNum}}</span><span @click="add">+</span></li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="addCart">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <transition name="ball" @after-enter="afterEnter">
            <div class="ball" v-show="isShow"></div>
        </transition>
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：{{prodInfo.goods_no}}</li>
                <li>库存情况：{{prodInfo.stock_quantity}}件</li>
                <li>上架时间：{{prodInfo.add_time | convertTime}}</li>
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                    <mt-button type="primary" size="large" plain @click="showPicInfo">图文介绍</mt-button>
                </li>
                <li>
                    <mt-button type="danger" size="large" plain @click="showProdComment">商品评论</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import ProdTools from './GoodsTools.js';
    import Connect from '../commons/Connect.js';
    export default {
        data() {
            return {
                imgs: [],
                prodInfo: {},
                isShow: false,
                pid: 0,
                pickNum: 1 //显示加入购物车的数量
            }
        },
        created() {
            //获取参数，请求哪一个商品的图片
            this.pid = this.$route.params.pid;
            //发起请求，将值挂载到imgs
//            this.$http.get(this.config.apiPath + '/api/getthumimages/' + this.pid)
            this.$http.get('/components/goods/detail.json')
                .then(res => {
                    this.imgs = res.body.message;
                }, res => {
                    console.log('获取商品轮播图失败');
                });


            //发起获取商品详情的请求
//            this.$http.get(this.config.apiPath + '/api/goods/getinfo/' + this.pid)
            this.$http.get('/components/goods/goodsinfo.json')
                .then(res => {
                    this.prodInfo = res.body.message[0]; //获取第一个唯一元素
                }, res => {
                    console.log('获取商品详情失败');
                })
        }, methods: {
            showPicInfo() {
                //当前的url要跳转/news/detail/:id
                //使用编程式导航$router.push('')
//                 this.$router.push('/news/detail/' + this.pid);
                this.$router.push({
                    path: '/newsdetail/' + this.pid,

                    query: {
                        title: '图片详情' //是未了让新闻详情页接受以后修改goback的title
                    }
                });
            },
            showProdComment() {
                //这样相当于router-link to="/goods/comment/' + this.pid,"
                this.$router.push({
                    path: '/goods/comment/' + this.pid,
                });
            },
            add() {
                if (this.pickNum >= this.prodInfo.stock_quantity) return;
                this.pickNum++;
            },
            substract() {
                if (this.pickNum <= 1) return;
                this.pickNum--;
            },
            addCart() { //加入购物车
                this.isShow = true;
                ProdTools.addCart({
                    id: this.prodInfo.id,
                    num: this.pickNum
                });
                Connect.$emit('addCart', this.pickNum); //发射
            },
            afterEnter() { //这个需求其实不具备元素离开的动画效果
                this.isShow = false;
            }
        }
    }
</script>
<style scoped>
    .ball-enter-active {
        animation: bounce-in 1s;
    }


    /*translate3d该方式运行比较流程*/

    @keyframes bounce-in {
        0% {
            transform: translate3d(0, 0, 0);
        }
        50% {
            transform: translate3d(140px, -50px, 0);
        }
        75% {
            transform: translate3d(160px, 0px, 0);
        }
        100% {
            transform: translate3d(140px, 300px, 0);
        }
    }

    .swiper {
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin: 8px;
        margin-left: 12px;
        width: 95%;
        border-radius: 15px;
        overflow: hidden;
    }
    .swiper img{
        width: 100%;
        height: 100%;
    }

    .outer-swiper,
    .product-desc,
    .product-props,
    .product-info {
        border-radius: 5px;
        border: 1px solid rgba(255, 64, 129, 0.46);
        margin: 3px;

    }

    /*.outer-swiper{*/
        /*background-color: #FF00FE;*/
    /*}*/
    /*请ulpadding*/

    .outer-swiper ul,
    .product-desc ul,
    .product-props ul,
    .product-info ul {
        padding-right: 10px;
    }

    .product-desc ul li,
    .product-props ul li,
    .product-info ul li {
        list-style: none;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.5);
        margin-top: 8px;
    }

    .product-desc ul >:nth-child(1) span {
        color: #ff4081;
        font-size: 22px;
        font-weight: bold;
    }

    .product-desc ul >:nth-child(1) {
        border-bottom: 1px solid rgba(255, 64, 129, 0.46);
    }

    .product-desc ul,
    .product-info ul,
    .product-props ul {
        padding-left: 10px;
    }

    .price-li span {
        color: red;
        font-size: 25px;
    }

    .price-li s {
        margin-right: 16px;
    }


    /*加减*/

    .number-li span {
        display: inline-block;
        border: 2px solid rgba(0, 0, 0, 0.1);
        width: 25px;
    }


    /*商品参数*/

    .product-props ul >:nth-child(1) {
        text-align: left;
    }

    .product-props ul:not(:nth-child(1)) {
        margin-left: 40px;
    }

    .product-info ul {
        margin-bottom: 70px;
        padding: 0 5;
    }

    .number-li span {
        text-align: center;
    }

    .number-li >:nth-child(2) {
        width: 40px;
    }

    .ball {
        border-radius: 50%;
        background-color: red;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 440px;
        left: 120px;
        display: inline-block;
        z-index: 9999;
    }
</style>
