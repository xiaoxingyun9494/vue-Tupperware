<template>
    <div class="top">
        <go-back-header title="商品列表"></go-back-header>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab  value="tab1" v-on:active="shuibei"title="水杯系列"/>
            <mu-tab value="tab2" v-on:active="chufang" title="厨房系列"/>
            <mu-tab  value="tab3" v-on:active="bingxiang" title="冰箱系列"/>
            <mu-tab value="tab4" v-on:active="xiuxian" title="休闲系列"/>
            <mu-tab value="tab5" v-on:active="baobei" title="宝贝系列"/>
            <mu-tab value="tab6" v-on:active="qingjie" title="清洁系列"/>
        </mu-tabs>
        <div  v-if="activeTab === 'tab1'">
            <shop ref="shop"></shop>
        </div>
        <div v-if="activeTab === 'tab2'">
            <shop ref="shop"></shop>
        </div>
        <div v-if="activeTab === 'tab3'">
            <shop ref="shop"></shop>
        </div>
        <div v-if="activeTab === 'tab4'">
            <shop ref="shop"></shop>
        </div>
        <div v-if="activeTab === 'tab5'">
            <shop ref="shop"></shop>
        </div>
        <div v-if="activeTab === 'tab6'">
            <shop ref="shop"></shop>
        </div>
    </div>
</template>
<script>
    import shop from './goods.vue'

    export default {
        name: 'goodslist',
        data () {
            return {
                activeTab: 'tab1'
            }
        },
        components: {
            shop:shop
        },

        methods: {
            handleTabChange (val) {
                this.activeTab = val
            },
            qingjie () {
                this.$refs.shop.$emit('getqingjie');
            },
            baobei(){
                this.$refs.shop.$emit('getbaobei');
            },
            xiuxian(){
                this.$refs.shop.$emit('getxiuxian');
            },
           bingxiang(){
                this.$refs.shop.$emit('getbingxiang');
            },
            shuibei(){
                this.$refs.shop.$emit('getshuibei');
            },
            chufang(){
                this.$refs.shop.$emit('getchufang');
            }

        },

    }
</script>
<style scoped>
    .top {
        margin-top: 41px;
        background-color: #fff;
        color: #000;
    }

</style>


