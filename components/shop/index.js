/**
 * Created by Administrator on 2017/4/22.
 */
import shoplistComponent from './shoplist.vue'
const shopList ={
    install:function (Vue) {
        Vue.component('shopList',shoplistComponent)
    }
}
export default shopList;