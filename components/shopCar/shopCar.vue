<template>
    <div>
        <go-back-header title="购物车"></go-back-header>
        <div class="pay-detail">
            <ul>
                <li class="p-list">
                    <mt-switch></mt-switch>
                    <img src="../../static/images/swipe5.jpg">
                    <div class="pay-calc">
                        <p>标题sdgbddyunigm </p>
                        <div class="calc">
                            <span>￥</span>
                            <span @click="substract(item)">-</span>
                            <span></span>
                            <span @click="add(item)">+</span>
                            <a href="javascript:;" @click="del(index)">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品1件，总价￥1元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large">去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {}
        }
    }
</script>
<style>
    .pay-detail ul li {
        list-style: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 3px;
    }

    .pay-detail ul {
        padding-left: 5px;
        margin-top: 5px;
    }

    .pay-detail ul li img {
        width: 80px;
        height: 80px;
        display: inline-block;
        vertical-align: top;
        margin-top: 10px;
    }

    .pay-detail ul li >:nth-child(1),
    .pay-detail ul li >:nth-child(3) {
        display: inline-block;
    }

    .pay-calc p {
        display: inline-block;
        width: 250px;
        overflow: hidden;
        color: blue;
        font-size: 15px;
        margin-bottom: 10px;
    }

    .pay-detail ul li >:nth-child(1) {
        line-height: 80px;
    }

    .calc:nth-child(1) {
        color: red;
        font-size: 20px;
    }

    .calc span:not(:nth-child(1)) {
        border: 1px solid rgba(0, 0, 0, 0.3);
        display: inline-block;
        width: 20px;
        text-align: center;
    }

    .calc a {
        margin-left: 20px;
    }

    .show-1,
    .show-2 {
        display: inline-block;
    }

    .show-1,
    .show-2 {
        margin-left: 30px;
    }

    .show-price {
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
