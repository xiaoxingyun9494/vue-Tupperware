/**
 * Created by Administrator on 2017/4/12.
 */
//引入包文件
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import MintUi from 'mint-ui';
import Comment from 'moment';
import LazyLoad from 'mint-ui';
// import iview from 'iview';
// import BMap from 'vue-amap';
import 'mint-ui/lib/style.css';
//引入mui
import './static/render/mui/dist/css/mui.css';
//引入muse-ui
import MuseUI from 'muse-ui' ;
import 'muse-ui/dist/muse-ui.css';

//引入百度地图
import BaiduMap from 'vue-baidu-map';
//引入全剧组件
import GoBackHeader from './components/partials/goBackHeader.vue'
import MySwipe from './components/commons/my-swipe.vue'
//引入自己的文件
import App from './app.vue';
//引入路由组件
import Home from './components/home/home.vue';
//引入登陆组件
import Login from './components/user/login.vue';
//引入购物车组件
import ShopCar from './components/shopCar/shopCar.vue';
//引入首页热门商品
import HotGoods from './components/home/hotgoods.vue';
//引入商品列表
import GoodsList from './components/goods/goodslist.vue';
//引入商品详情
import GoodsDetail from './components/goods/goodsdetail.vue';
//引入地图
import Map from './components/fanshome/map.vue';
//引入子组件
import Shop from './components/goods/goods.vue';
//引入新闻列表模块
import NewsList from './components/news/newsList.vue';
//引入新闻详情模块
import NewsDetail from './components/news/newsDetail.vue';
//图片预览组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);
//安装插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUi);
Vue.use(LazyLoad);
Vue.use(MuseUI);


Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'hGdL54vjzGhmwRXX7ujYVDLXIkWuQopH'
});

let router = new VueRouter({
    routes:[
        {name:'home',path:'/home',component:Home},
        {name:'defualt',path:'/',redirect:'/home'},
        {name:'login',path:'/login',component:Login},
        {name:'shopcar',path:'/shopCar',component:ShopCar},
        {name:'Map',path:'/map',component:Map},
        {name:'hotgoods',path:'/hotgoods',component:HotGoods},
        {name:'goodslist',path:'/goodslist',component:GoodsList},
        {name:'shop',path:'/shop',component:Shop},
        {name:'detail',path:'/goodsdetail',component:GoodsDetail},
        {name:'news.list',path:'/newslist',component:NewsList},
        {name:'news.detail',path:'/newsdetail/:id',component:NewsDetail},

    ]
});

//声明全剧组件
Vue.component('goBackHeader',GoBackHeader);
Vue.component('comment',Comment);
Vue.component('my-swipe',MySwipe);
Vue.component('hot-goods',HotGoods);
Vue.component('shop',Shop);

//在原型上配置一个属性


// import Vuex from 'vuex';
// import shopCart from './modules/shopCart.js';
// //安装插件
// Vue.use(Vuex);
// //构建Store实例对象
// const store = new Vuex.Store({
//     modules: {
//         shopCart
//     }
// });




//创建Vue实例对象
new Vue({
    el: '#app',
    router,
    // store, //老师把这个属性忘了一节课了，别忘了
    render: c => c(App)
});



