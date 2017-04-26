<template>
    <div class="gridlist-demo-container">
        <router-link to="/goodsdetail">
        <mu-grid-list class="gridlist-demo">
            <mu-sub-header>热销单品</mu-sub-header>

            <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">

                    <img :src="tile.image"/>

                <span slot="title">{{tile.title}}</span>
                <span slot="subTitle">by <b>{{tile.author}}</b></span>
                <!--<mu-icon-button icon="star_border" slot="action"/>-->
            </mu-grid-tile>

        </mu-grid-list>
        </router-link>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list: [ {
                    image: '../../static/images/hot1.jpg',
                    title: '全能苹果锅',
                    author: 'Tuppware',
                    featured: true
                },{
                    image: '../../static/images/dudu1.jpg',
                    title: '新品嘟嘟杯，没有最可爱！',
                    author: 'Tuppware',

                }, {
                    image: '../../static/images/jingshui.jpg',
                    title: '最新优惠！纳美玲珑净水器，给你好水好生活！',
                    author: 'Tuppware'
                }, {
                    image: '../../static/images/waidai.jpg',
                    title: '外出就餐好伴侣',
                    author: 'Tuppware'
                }, {
                    image: '../../static/images/mibao.jpg',
                    title: '酸奶制作神器，迷你保温杯糖果杯！',
                    author: 'Tuppware'
                }, {
                    image: '../../static/images/xunfeng.jpg',
                    title: '旋风切剁器，什么东西在你手下秒变渣渣！',
                    author: 'Tuppware',
                    featured: true
                }, {
                    image: '../../static/images/baobei.jpg',
                    title: '专为儿童设计的水杯，家有宝贝，给你最贴心的爱！',
                    author: 'Tuppware'
                }, {
                    image: '../../static/images/ganhuo.jpg',
                    title: '干货轻松搞定再也不用担心受潮发霉，虫子吃了',
                    author: 'Tuppware'
                }]
            }
        }
    }
</script>

<style scoped>
    .gridlist-demo-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 48px;
    }

    .gridlist-demo{
        width: 100%;
        height: 450px;
        overflow-y: auto;
    }
    mu-sub-header{
        width: 500px;
        height: 48px;
        background-color: #fd3bfc;
        margin-bottom: 80px;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>

