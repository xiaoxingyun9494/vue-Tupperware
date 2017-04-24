/**
 * Created by Administrator on 2017/4/12.
 */
//引入包文件
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import MintUi from 'mint-ui';
import moment from 'moment';
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
//引入地图
import Map from './components/fanshome/map.vue';
//引入子组件
import Shop from './components/goods/goods.vue';


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

    ]
});

//声明全剧组件
Vue.component('goBackHeader',GoBackHeader);
Vue.component('comment',Comment);
Vue.component('my-swipe',MySwipe);
Vue.component('hot-goods',HotGoods);
Vue.component('shop',Shop);

//在原型上配置一个属性


new Vue({
    el:'#app',
    router:router,
    render:c=>c(App),

});