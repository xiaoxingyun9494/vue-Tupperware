<template>
    <div class="top">
        <go-back-header title="商品列表"></go-back-header>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab  value="tab1" title="水杯系列"/>
            <mu-tab v-on:click="shuibei" value="tab2" title="厨房系列"/>
            <mu-tab value="tab3" title="冰箱系列"/>
            <mu-tab value="tab4" title="休闲系列"/>
            <mu-tab value="tab5" title="宝贝系列"/>
            <mu-tab value="tab6" @active="handleActive" title="清洁系列"/>
        </mu-tabs>
        <div v-if="activeTab === 'tab1'">
           <shop> </shop>
            </div>
        <div v-if="activeTab === 'tab2'">
            <shop> </shop>
        </div>
        <div v-if="activeTab === 'tab3'">
            <shop> </shop>
        </div>
        <div v-if="activeTab === 'tab4'">
            <shop> </shop>
        </div>
        <div v-if="activeTab === 'tab5'">
            <shop> </shop>
        </div>
        <div v-if="activeTab === 'tab6'">
            <shop> </shop>
        </div>
    </div>
</template>
<script>
    import shop from './goods.vue'

    export default {
        name:'goodslist',
        data () {
            return {
                activeTab: 'tab1'
            }
        },
        components:{
            shop
        },
        methods: {
            handleTabChange (val) {
                this.activeTab = val
            },
            handleActive () {
                window.alert('tab active')
            },
            shuibei(){
                this.$refs.shop.getchufang('fff');
            }
        }
    }
</script>
<style scoped>
    .top {
        margin-top: 41px;
        background-color: #fff;
        color: #000;
    }

</style>


