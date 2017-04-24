<template>
    <div>
        <HeaderVue></HeaderVue>
        <router-view></router-view>
        <FooterVue></FooterVue>
    </div>
</template>
<script type="text/ecmascript-6">
    import HeaderVue from './components/partials/header.vue';
    import FooterVue from './components/partials/footer.vue';
    export default {
        data(){
            return {}
        },components:{
            HeaderVue,
            FooterVue
        }
    }
</script>
<style>

</style>
