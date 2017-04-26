import GoodsTools from '../components/goods/GoodsTools.js';
let shopCart = {
    state: {
        prods: GoodsTools.getProds() //读取localstorage数据
    },
    //订制一个添加的改动
    mutations: {
        //添加数量(追加)
        addNum(state, prod) {
            state.prods[prod.index].num += prod.num;
            GoodsTools.save(state.prods); //有可能你添加完了，去了别的页面，此时只是在内存中有数据修改，没有保存到Localstorage，所以需要保存
        },
        //添加元素
        addProd(state, prod) {
            state.prods.push(prod);
            GoodsTools.save(state.prods);
        },
        saveProds(state, prods) {
            state.prods = prods;
            GoodsTools.save(state.prods);
        },
        delete(state, index) {
            state.prods.splice(index, 1);
            GoodsTools.save(state.prods);
        }
    },
    actions: {
        addProductOrNum(context, prod) { //context和store对象具备一致的属性
            //判断该商品是否存在与数组中，如果存在调用追加数据改变
            let myProds = context.getters.getProds;
            let index = myProds.findIndex(function(p) {
                return p.id == prod.id;
            });
            if (index != -1) { //如果查找到对应的元素，就追加
                context.commit('addNum', { index, num: prod.num }); //比较坑，只能传递二个参数，后面一个可以用对象
            } else {
                context.commit('addProd', prod); //添加一个元素
            }
        },
        saveNewProds({ commit }, prods) {
            //就是需要存储数组
            commit('saveProds', prods);
        },
        delProd({ commit }, index) { //删除商品，调用mutations中的delete
            commit('delete', index);
        }
    },
    getters: { //属性就可以
        getProds(state) { //获取所有商品数组
            return state.prods;
        },
        getProdsCount(state) {
            let count = 0;
            for (var i = state.prods.length - 1; i >= 0; i--) {
                count += state.prods[i].num;
            }
            return count;
        },
        getInfo(state) {
            //有几个this的属性，如果这几个种任意发生改变，就会触发
            let pickNum = 0;
            let totalPrice = 0;
            state.prods.forEach(function(p) {
                //判断是否选中
                if (p.isSelected) {
                    pickNum++; //选中了一个
                    totalPrice += p.sell_price * p.num; //单价乘以数量
                }
            });
            return {
                pickNum,
                totalPrice
            }
        }
    }
}


export default shopCart;
