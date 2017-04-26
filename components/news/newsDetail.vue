<template>
    <div class="tmpl">
        <go-back-header :title="title"></go-back-header>
        <div class="news-title">
            <p v-text="news.title"></p>
            <div>
                <span>{{news.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{news.add_time | convertTime}}</span>
            </div>
        </div>
        <div class="news-content" v-html="news.content"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            news: {},
            title: ''
        }
    }, created() {
        // 0.5 接受从商品详情过来的title
        this.title = this.$route.query.title || '新闻详情';
        //1：接收数据
        let id = this.$route.params.id;
        //2:发起请求，获取数据
        this.$http.get('http://webhm.top:8899/api/getnew/' + id)
            .then(res => {
                //3:将数据挂载到当前组件的属性中
                //4:确认返回的是数组还是对象？ 返回的时候获取res.body.message[0]
                this.news = res.body.message[0];
            }, res => {
                console.log('新闻详情出现异常');
            });

    }
}
</script>
<style scoped>
.news-title p {
    color:#ff4081;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10px 5px;
}
</style>
