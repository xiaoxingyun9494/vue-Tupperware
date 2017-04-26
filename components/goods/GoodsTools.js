let tools = {
    addCart(prod) {
        //先读取LocalStorage的数据，是一个数组，或者空数组
        let prods = this.getProds();
        // //将元素push进去
        // prods.push(prod);

        //判断当前id是否存在，如果存在，num追加，不存在就Push
        let newP = prods.find(function(p) {
            return p.id == prod.id;
        });

        if (!newP) prods.push(prod);
        else
            newP.num += prod.num; //num追加 


        //保存到Localstorage
        this.save(prods);
    },
    getProds() {
        return JSON.parse(localStorage.getItem('shopcart') || '[]');
    },
    save(prods) {
        localStorage.setItem('shopcart', JSON.stringify(prods));
    },
    getTotalCount() {
        let sum = 0;
        let prods = this.getProds();
        prods.forEach(function(p) {
            sum += p.num;
        });

        return sum;
    },
    deleteProd(index) { //localstorage中的顺序和内存中的顺序一致，还和view的顺序一致
        let prods = this.getProds();
        prods.splice(index, 1);
        this.save(prods);
    }
}

export default tools;
