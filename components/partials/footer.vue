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
                    <span class="mui-icon mui-icon-shopcart"><span class="mui-badge">9</span></span>
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
    export default {
        data(){
            return {}
        }
    }
</script>
<style>

</style>
