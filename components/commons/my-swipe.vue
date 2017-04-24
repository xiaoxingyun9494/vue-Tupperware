<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in imgs" :key="index">
                <a :href="item.url">
                    <img :src="item.img">
                </a>
            </mt-swipe-item>

        </mt-swipe>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {}
        },props:['imgs']
    }
</script>
<style>
    .mint-swipe {
        height: 250px;
    }

    .mint-swipe img {
        width: 100%;
        height: 250px;
    }
</style>
