<template>
    <div>
        <div>
            <nav class="mui-bar mui-bar-tab">
                <router-link to="/home" class="mui-tab-item mui-active" href="#tabbar">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link to="/login" class="mui-tab-item" href="#tabbar-with-chat">
                    <span class="mui-icon mui-icon-member"></span>
                    <span class="mui-tab-label">惠迷</span>
                </router-link>
                <router-link to="/shopCar" class="mui-tab-item" href="#tabbar-with-contact">
                    <span class="mui-icon mui-icon-shopcart"><span class="mui-badge">{{num}}</span></span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link to="/Search" class="mui-tab-item" href="#tabbar-with-map">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">查找</span>
                </router-link>
            </nav>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Connect from '../commons/Connect.js';
    import GoodsTools from '../goods/GoodsTools.js';

    export default {
        data() {
            return {
                num: 0
            }
        }, created() {
            this.num = GoodsTools.getTotalCount();
            //通过connect对象$on来接受
            Connect.$on('addCart', (num) => {
                this.num += num; //箭头函数本没有this会在声明时绑定function所在的这个this
            });
        }
    }
</script>
<style>

</style>
